import React from "react";

function JobCard({ title, company, location, salary, type, _id }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>
        {company}-{location}
      </p>
      <p>💰 {salary}</p>
      <span>{type}</span>
    </div>
  );
}

export default JobCard;
