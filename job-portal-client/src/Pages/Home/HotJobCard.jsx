import React from 'react'
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const HotJobCard = ({job}) => {
  const { _id,title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;

  return (
    <div className="card card-compact bg-base-100  shadow-xl">
 <div className='flex gap-2 m-4'>
     <figure>
    <img
    className='w-16'
    src={company_logo}
      alt="logo" />
  </figure>
  <div>
    <h1 className="text-2xl">{company}</h1>
    <p className='flex gap-2 items-center'> <LiaMapMarkerAltSolid/>{location}</p>
  </div>
 </div>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
         <div className="badge badge-secondary">NEW</div>
    <p>{description}</p>
    <div className='flex gap-2 flex-wrap'>
        {
            requirements.map((skill,index)=><p  key={index} className='border rounded-md text-center px-2 hover:text-white hover:bg-blue-700'>{skill}</p>)
        }
    </div>
    <div className="card-actions justify-end items-center mt-4">
        <p>Salary :{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
    <Link to={`jobs/${_id}`}>
      <button className="btn bg-gray-300 text-blue-500 hover:bg-blue-600 hover:text-white rounded-lg">Apply</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default HotJobCard
