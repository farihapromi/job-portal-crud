import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const {_id,title,company}=useLoaderData()
  
  return (
    <div className='m-10'>
        <h2>Job Details : {title}</h2>
        <p>Apply for :{company}</p>
       <Link to={`/job-apply/${_id}`}> 
       <button className='btn btn-primary'>Apply Now !</button></Link>
      
    </div>
  )
}

export default JobDetails
