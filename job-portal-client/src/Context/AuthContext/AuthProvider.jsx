import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase/firebase.init'

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    //user create
    const createUser=(email,password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login
    const signInUser=(email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()

        }
         
    },[])
    const userInfo={
        user,
        loading,
        createUser,
        signInUser

    }
  return (
    <AuthContext.Provider value={userInfo}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
