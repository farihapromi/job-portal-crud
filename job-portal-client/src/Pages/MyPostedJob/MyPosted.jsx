import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'

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
      
    </div>
  )
}

export default MyPosted
