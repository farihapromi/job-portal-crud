import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewApplication = () => {
    const applications=useLoaderData()
    console.log(applications)
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
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {
        applications.map((app,index)=><tr key={app._id}>
            <th>{index+1}</th>
            <td>{app.applicant_email}</td>
        </tr>)
     }
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ViewApplication
