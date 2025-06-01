import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewApplication = () => {
    const applications=useLoaderData()
    console.log(applications)
    const handleStatusUpdate=(e,id)=>{
        console.log(e.target.value,id)
        const data={
            status:e.target.value
        }
        fetch(`http://localhost:5000/job-applications/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

            
        })
        .catch(error=>console.log(error))

    }
  return (
    <div>
      <h3 className="text-2xl">View Applications {applications.length}</h3>

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Status</th>
        <th>Update Status</th>
      </tr>
    </thead>
    <tbody>
     {
        applications.map((app,index)=><tr key={app._id}>
            <th>{index+1}</th>
            <td>{app.applicant_email}</td>
            <td>
                <select
                onChange={(e)=>handleStatusUpdate(e,app._id)}
                defaultValue={app.status||'Changed Status'}
                 className="select select-bordered select-xs w-full max-w-xs">
  <option disabled selected>Under Review</option>
  <option>Set interview</option>
  <option>Hired</option>
  <option>Rejected</option>
</select>
            </td>
        </tr>)
     }
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ViewApplication
