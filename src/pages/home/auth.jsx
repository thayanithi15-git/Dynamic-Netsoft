import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = (WrappedComponent) => {
  return (props) => {
    // const navigate = useNavigate();
    // const isAuth = true;
    const [isAuth, setisauth] = useState(true);

    setTimeout(() => {
      setisauth(false);
    }, 2000); 

    // useEffect(() => {
    //   console.log("User Token = ", isAuth);
    //   if (!isAuth) {
    //     navigate("/home");
    //   }
    // }, [isAuth, navigate]);

    return isAuth ? (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "600",
        }}>
        Loading...
      </div>
    ) : (
      <WrappedComponent />
    );
  };
};

export default Auth;
