import React,{useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navigate} from 'react-router-dom'


export function Auth({children}) {
    const {userLogin,loading} = useContext(AuthContext);
    if(loading) return <h1>loading....</h1>
    if(!userLogin) return <Navigate to="/login"/>
    return <>{children}</>
 
}
