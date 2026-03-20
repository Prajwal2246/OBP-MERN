import React from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";

function JobDetail() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [job, setJob] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [applied, setApplied] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/jobs/${id}`)
      .then((res) => setJob(res.data));
  }, [id]);

  const handleApply = async () => {
    const token = localStorage.getItem("token");
    try {
      (await axios.post("http://localhost:3000/api/applications"),
        { jobId: id, coverLetter },
        { headers: { Authorization: `Bearer ${token}` } });
      setApplied(true);
    } catch (error) {
      alert(error.response?.data?.message || "Application failed");
    }
  };
  if (!job) return <p>Loading...</p>;
  return <div>
    
    <h2>{job.title}</h2>
    <p>{job.company} - {job.location} </p>
    <p>{job.description}</p>
    {user?.role === "seeker" && !applied && (
        <div>
            <textarea ref={textareaRef} placeholder="Cover letter (optional)" 
            value={coverLetter} onChange={(e)=>setCoverLetter(e.target.value)}
            />
            <button onClick={handleApply}>Apply Now</button>

        </div>
    )}
    {applied && <p style={{color:"green"}}>Application submitted!</p>}

  </div>;
}

export default JobDetail;
