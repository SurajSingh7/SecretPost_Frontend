import React from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {token} = useSelector((state) => state.auth);

    if(token !== null)
        return children
    else{
        toast.success("please first login")
        return  <Navigate to="/login" />
    }
        
}

export default PrivateRoute;