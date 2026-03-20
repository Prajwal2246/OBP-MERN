import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    salary: "",
    description: "",
    type: "Full-time",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = async (e) => {
    e.preventDefault();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:3000/api/jobs", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to post job");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Post a New Job</h2>
      <input
        name="title"
        placeholder="Job Title"
        value={form.title}
        onChange={handleChange}
      />
      {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />
      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Job Description"
        value={form.description}
        onChange={handleChange}
      />
      JobPortal — Student Project Guide Full Stack MERN
      {errors.description && (
        <p style={{ color: "red" }}>{errors.description}</p>
      )}
      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "PostJob"}
      </button>
    </form>
  );
}

export default PostJob;
