import React from 'react';
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo
  } = job;

  return (
    <Link to={`/jobs/${_id}`} className="block hover:shadow-lg transition duration-200 mt-10">
      <div 
        className="card card-compact bg-base-100 shadow-xl hover:border hover:border-blue-400 flex flex-col justify-between h-full max-h-[400px] min-h-[380px] w-full"
      >
        {/* Header: company info */}
        <div className='flex gap-2 m-4 items-center'>
          <figure>
            <img className='w-16 h-16 object-contain rounded-md' src={company_logo} alt="logo" />
          </figure>
          <div>
            <h1 className="text-2xl font-semibold">{company}</h1>
            <p className='flex gap-2 items-center text-gray-500 text-sm'>
              <LiaMapMarkerAltSolid />{location}
            </p>
          </div>
        </div>

        {/* Body: title, badge, description, skills */}
        <div className="card-body flex-grow px-4 pt-0 pb-2">
          <h2 className="card-title text-lg font-bold mb-1">{title}</h2>
          <div className="badge badge-secondary mb-2">NEW</div>
          <p className="line-clamp-3 text-sm text-gray-700 mb-3">{description}</p>

          <div className='flex gap-2 flex-wrap'>
            {requirements.map((skill, index) => (
              <p
                key={index}
                className='border rounded-md text-center px-2 py-0.5 hover:text-white hover:bg-blue-700 text-xs'
              >
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* Footer: salary and apply button */}
        <div className="card-actions justify-between items-center px-4 pb-4 pt-2">
          <p className='text-sm font-medium text-gray-800'>
            Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </p>
          <button
            className="btn bg-gray-300 text-blue-500 hover:bg-blue-600 hover:text-white rounded-lg px-4 py-1 text-sm"
            onClick={(e) => e.preventDefault()} // prevent link navigation on button click
          >
            Apply
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotJobCard;
