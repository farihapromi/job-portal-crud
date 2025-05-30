import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import auth from '../../firebase/firebase.init'


const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    //user create
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //signout
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)

    }
    //signin with google
    const signInWithGoogle=()=>{
         setLoading(true)
        return signInWithPopup(auth,googleProvider)
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
        signInUser,
        signOutUser,
        signInWithGoogle

    }
  return (
    <AuthContext.Provider value={userInfo}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
