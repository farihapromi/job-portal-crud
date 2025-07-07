import React, { useEffect, useState } from 'react'
import HotJobCard from './HotJobCard'

const HotJobs = () => {
    const [jobs,setJobs]=useState([])
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';


    useEffect(()=>{
        fetch(`${API_URL}/jobs`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
        .catch(error=>console.log(error))
    },[])
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
            jobs.map(job=><HotJobCard key={job._id} job={job}></HotJobCard>)
        }
      
    </div>
    </div>

  )
}

export default HotJobs
