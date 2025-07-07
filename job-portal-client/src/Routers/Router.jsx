import { createBrowserRouter } from "react-router-dom";
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

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`${API_BASE_URL}/jobs/${params.id}`)
      },
      {
        path: '/job-apply/:id',
        element: <PrivateRoute><JobApply /></PrivateRoute>
      },
      {
        path: '/myApplications',
        element: <PrivateRoute><MyApplication /></PrivateRoute>
      },
      {
        path: '/addJob',
        element: <PrivateRoute><AddJob /></PrivateRoute>
      },
      {
        path: '/viewApplications/:job_id',
        element: <PrivateRoute><ViewApplication /></PrivateRoute>,
        loader: ({ params }) => fetch(`${API_BASE_URL}/job-applications/jobs/${params.job_id}`)
      },
      {
        path: '/myPostedJob',
        element: <PrivateRoute><MyPosted /></PrivateRoute>
      },
      {
        path: '/sign-up',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
]);

export default router;
