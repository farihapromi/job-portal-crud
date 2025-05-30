import Lottie from 'lottie-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import registerAnimationData from '../../assets/lottie/login.json'
import AuthContext from '../../Context/AuthContext/AuthContext'

const Login = () => {

    const {signInUser}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault()
        const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
   signInUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
    })

    }
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
        <Lottie animationData={registerAnimationData }></Lottie>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className=" ml-8 mt-4 text-5xl font-bold">Login now!</h1>
     
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name ="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password"className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
       <p className="mb-4 ml-4">
       Don't have account?
        <Link className='p-2 m-2 bg-blue-500 rounded-lg' to='/sign-up'>Sign Up</Link>
      </p>
    </div>
  </div>
</div>
  )
}

export default Login
