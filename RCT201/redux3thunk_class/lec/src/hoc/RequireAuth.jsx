import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const RequireAuth = ({ children }) => {
  const isAuth=useSelector((store)=>store.auth.isAuth)
  const { pathname } = useLocation();
  
  if (isAuth) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }
};

export default RequireAuth;
