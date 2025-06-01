import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const MyPosted = () => {
    const{user}=useAuth()
    const[jobs,setJobs]=useState([])

    useEffect(()=>{
       
      fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
         setJobs(data);
        })
        .catch(error => console.log(error));
   

    },[user.email])
  return (
    <div>
        <h3>{jobs.length}</h3>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Application Deadline</th>
        <th>Applications</th>
      </tr>
    </thead>
    <tbody>
     {
        jobs.map((job,index)=><tr key={index}>
            <th>{index+1}</th>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td>
                {
                    <Link to={`/viewApplications/${job._id}`}><button className='btn btn-link'>View Application</button></Link>
                }
                </td>
        </tr>)
     }
     
    </tbody>
  </table>
</div>
      
    </div>
  )
}

export default MyPosted
