import React from 'react';
import { Spinner } from 'react-bootstrap';
import {Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children}) => {
    const { user, isLoading } = useAuth();
    console.log(user);
    const location = useLocation();

     if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};


export default PrivateRoute;