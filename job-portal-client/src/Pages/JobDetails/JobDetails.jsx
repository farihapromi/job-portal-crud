import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const { _id, title, company, description } = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Job Title: {title}</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Job Description:</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-800 font-medium">
            <span className="font-semibold text-gray-700">Company:</span> {company}
          </p>
        </div>

        <div className="text-right">
          <Link to={`/job-apply/${_id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-200">
              Apply Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
