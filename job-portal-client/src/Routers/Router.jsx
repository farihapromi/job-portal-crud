import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/Home';
import Signup from '../Pages/SignUp/Signup';
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
        }
    ]
  },
]);
export default router