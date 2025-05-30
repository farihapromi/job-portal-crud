import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/Home';
import Signup from '../Pages/SignUp/Signup';
import Login from '../Pages/Login/Login';
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