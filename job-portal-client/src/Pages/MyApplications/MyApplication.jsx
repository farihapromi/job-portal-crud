import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (user?.email) {
     
      axios.get(`http://localhost:5000/job-application?email=${user.email}`, 
        { withCredentials: true })
  .then(res => {
    setJobs(res.data);
console.log(res.data); // to verify data

  })
  .catch(error => console.error(error));

  
    }
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-3xl mb-4">My Applications: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th><input type="checkbox" className="checkbox" /></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
      <tbody>
  {jobs.map((job) => (
    <tr key={job._id}>
      <th>
        <input type="checkbox" className="checkbox" />
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={job?.jobDetails?.company_logo}
                alt="Company Logo"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{job?.jobDetails?.title}</div>
            <div className="text-sm opacity-50">{job?.jobDetails?.location}</div>
          </div>
        </div>
      </td>
      <td>
        {job?.jobDetails?.category || "Untitled"}
        <br />
        <span className="badge badge-ghost badge-sm">{job?.jobDetails?.jobType}</span>
      </td>
      <td>{job?.status || "Pending"}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Details</button>
      </th>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default MyApplication;
