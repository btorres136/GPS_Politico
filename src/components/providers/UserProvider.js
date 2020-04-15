import React, { createContext, useState, useEffect } from "react";
import { auth } from "../utils/firebase-functions";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setuser(user);
      setloading(false);
    });
  }, []);

  if (loading) {
    return(
      <div className="loading" >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
