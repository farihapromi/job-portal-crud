import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'



const AddJob = () => {
    const navigate=useNavigate()
 
  const [job, setJob] = useState({
    title: '',
    location: '',
    jobType: '',
    category: '',
    applicationDeadline: '',
    salaryMin: '',
    salaryMax: '',
    currency: 'bdt',
    description: '',
    company: '',
    requirements: '',
    responsibilities: '',
    hr_name: '',
    hr_email: '',
    company_logo: '',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //fomData diye form er sob data 
    const formData=new FormData(e.target)
    const initialData=Object.fromEntries(formData.entries())
    //console.log(initialData)
    const {min,max,currency,...newJob}=initialData
    console.log(newJob)
    newJob.salaryRange={min,max,currency}
    newJob.requirements=newJob.requirements.split(',')
    newJob.responsibilities=newJob.responsibilities.split(',')
     console.log(newJob)
     //sebd data to backend
     fetch('http://localhost:5000/jobs',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newJob)

     })
     .then (res=>res.json())
     .then(data=>{
        if(data.insertedId){
                  Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Job has been added",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/myPostedJob')
        
              }
     })
     .catch(error=>console.log(error))
    
  };

  return (
    <div className="flex justify-center px-4 py-10 bg-gray-100 min-h-screen">
      <div className="w-full max-w-3xl p-8 bg-white shadow-xl rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">Post a Job</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="title" value={job.title} onChange={handleChange} className="input input-bordered" placeholder="Job Title" required />
          <input name="location" value={job.location} onChange={handleChange} className="input input-bordered" placeholder="Location" required />
          
          <select name="jobType" value={job.jobType} onChange={handleChange} className="select select-bordered" required>
            <option value="">Select Job Type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Hybrid</option>
            <option>Remote</option>
            <option>Intern</option>
            <option>Contractual</option>
          </select>
          
          <input name="category" value={job.category} onChange={handleChange} className="input input-bordered" placeholder="Category" required />
          
          <input name="applicationDeadline" type="date" value={job.applicationDeadline} onChange={handleChange} className="input input-bordered" placeholder="Deadline" required />
          
          <input name="min" value={job.min} onChange={handleChange} className="input input-bordered" placeholder="Min Salary" type="number" required />
          
          <input name="max" value={job.max} onChange={handleChange} className="input input-bordered" placeholder="Max Salary" type="number" required />
          
          <select name="currency" value={job.currency} onChange={handleChange} className="select select-bordered" required>
            <option value="bdt">BDT</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>

          <input name="company" value={job.company} onChange={handleChange} className="input input-bordered col-span-2" placeholder="Company Name" required />
          
          <textarea name="description" value={job.description} onChange={handleChange} className="textarea textarea-bordered col-span-2" placeholder="Job Description" required />

          <input name="requirements" value={job.requirements} onChange={handleChange} className="input input-bordered col-span-2" placeholder="Requirements (comma separated)" required />
          
          <input name="responsibilities" value={job.responsibilities} onChange={handleChange} className="input input-bordered col-span-2" placeholder="Responsibilities (comma separated)" required />
          
          <input name="hr_name" value={job.hr_name} onChange={handleChange} className="input input-bordered" placeholder="HR Name" required />
          <input name="hr_email" type="email" value={job.hr_email}  onChange={handleChange} className="input input-bordered" placeholder="HR Email" required />
          
          <input name="company_logo" value={job.company_logo} onChange={handleChange} className="input input-bordered col-span-2" placeholder="Company Logo URL" />

          <button type="submit" className="btn btn-primary col-span-2 mt-4">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
