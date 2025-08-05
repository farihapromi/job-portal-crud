import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${API_URL}/job-application?email=${user.email}`, {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        })
        .catch((error) => console.error(error));
    }
  }, [user?.email]);

  const handleWithdraw = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to withdraw your application!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, withdraw it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/job-applications/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire(
                'Withdrawn!',
                'Your application has been withdrawn.',
                'success'
              );
              setJobs(jobs.filter((job) => job._id !== id)); // Remove from UI
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire('Error!', 'Failed to withdraw application.', 'error');
          });
      }
    });
  };

  return (
    <div>
      <h2 className='text-3xl mb-4'>My Applications: {jobs.length}</h2>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>
                <input type='checkbox' className='checkbox' />
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <input type='checkbox' className='checkbox' />
                </th>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle h-12 w-12'>
                        <img
                          src={job?.jobDetails?.company_logo}
                          alt='Company Logo'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>{job?.jobDetails?.title}</div>
                      <div className='text-sm opacity-50'>
                        {job?.jobDetails?.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {job?.jobDetails?.category || 'Untitled'}
                  <br />
                  <span className='badge badge-ghost badge-sm'>
                    {job?.jobDetails?.jobType}
                  </span>
                </td>
                <td>{job?.status || 'Pending'}</td>
                <td>
                  <button
                    className='btn btn-outline btn-error btn-xs'
                    onClick={() => handleWithdraw(job._id)}
                  >
                    Withdraw
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
