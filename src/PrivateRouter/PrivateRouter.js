import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/admin");
      setAuth(data[0].admin);
    };
    fetchData();
  }, []);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <h3 className="text-center mt-4">Admin access first</h3>
        )
      }
    />
  );
};

export default PrivateRoute;
