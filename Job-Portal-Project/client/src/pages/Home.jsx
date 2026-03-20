import React, { useEffect, useState } from "react";
import getAllJobs from "../api/jobs";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    getAllJobs()
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("failed to load jobs");
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "" || job.type === filterType;
    return matchesSearch && matchesType;
  });

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <SearchBar
        onSearch={(value) => setSearchTerm(value)}
        onFilter={(value) => setFilterType(value)}
      />
      <h1>Available Jobs ({filteredJobs.length})</h1>
      {jobs.map((job) => (
        <JobCard key={job._id} {...job} />
      ))}
    </div>
  );
}

export default Home;
