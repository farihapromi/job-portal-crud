import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
  
}

export default PrivateRoute
