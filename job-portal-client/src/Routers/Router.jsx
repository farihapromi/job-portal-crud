import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/Home';
import Signup from '../Pages/SignUp/Signup';
import Login from '../Pages/Login/Login';
import JobDetails from '../Pages/JobDetails/JobDetails';
import PrivateRoute from './PrivateRoute';
import JobApply from '../Pages/JobApply/JobApply';
import MyApplication from '../Pages/MyApplications/MyApplication';
import AddJob from '../Pages/AddJob/AddJob';
import MyPosted from '../Pages/MyPostedJob/MyPosted';
import ViewApplication from '../Pages/ViewApplication/ViewApplication';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
   errorElement:<h2>Route Not found</h2>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoute><JobDetails/></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)

        },
        {
          path:'/job-apply/:id',
          element:<PrivateRoute><JobApply/></PrivateRoute>
        }
        ,{
          path:'myApplications',
          element:<PrivateRoute><MyApplication/></PrivateRoute>
        },
        {
          path:'/addJob',
          element:<PrivateRoute><AddJob/></PrivateRoute>
        }
        ,
        {
           path:'/viewApplications/:job_id',
          element:<PrivateRoute><ViewApplication/></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)

        },
          {
          path:'/myPostedJob',
          element:<PrivateRoute><MyPosted/></PrivateRoute>
        }
        ,
        {
            path:'/sign-up',
            element:<Signup/>
        },
        {
          path:'/login',
          element:<Login/>
        }
    ]
  },
]);
export default router