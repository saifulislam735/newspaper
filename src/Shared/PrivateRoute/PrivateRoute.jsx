// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <p className="text-center">loading...............</p>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate >

};

export default PrivateRoute;