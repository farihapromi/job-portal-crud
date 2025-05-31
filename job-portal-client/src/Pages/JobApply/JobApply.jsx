import React from 'react'
import { useParams } from 'react-router-dom'

const JobApply = () => {
    const {id}=useParams()
    const submitJobApply=e=>{
        e.preventDefault()
        const form=e.target
       

  const linkedin = form.linkedin.value;
  const github = form.github.value;
  const resumeFile = form.resume; 
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Apply Now!</h1>
          <p className="py-6">
            Fill out your details to apply for this position. Make sure all fields are accurate.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            

            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn</span>
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub Link</span>
              </label>
              <input
                type="url"
                name="github"
                placeholder="GitHub Profile URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume </span>
              </label>
              <input
                type="url"
                name="resume"
                placeholder='Resume Url'
               
                className="file-input file-input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JobApply
