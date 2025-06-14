import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'

const JobApply = () => {
  const { id } = useParams()
  const {user}=useAuth()
  const navigate=useNavigate()

  const submitJobApply = (e) => {
    e.preventDefault()
    const form = e.target
    const linkedin = form.linkedin.value
    const github = form.github.value
    const resume = form.resume.value

    console.log({ linkedin, github, resume, jobId: id })
    const jobApplication={
        job_id:id,
        applicant_email:user.email,
        linkedin,
        github,
        resume
    }
    //post form dat
    fetch('http://localhost:5000/job-applications',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(jobApplication)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
    navigate('/myApplications')
        }
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Apply for the Job
        </h1>

        <form onSubmit={submitJobApply} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/yourname"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              GitHub Profile
            </label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/yourname"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Resume URL
            </label>
            <input
              type="url"
              name="resume"
              placeholder="https://your-resume-link.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4 text-white"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default JobApply
