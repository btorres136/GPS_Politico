import React, { createContext, useState } from "react";
import { auth } from "../../utils/firebase-functions";

export const UserContext = createContext();

const UserProviders = ({ children }) => {
  const [user, setuser] = useState(null);
  const userState = () => {
    auth.onAuthStateChanged((userAuth) => {
      setuser(userAuth);
    }, []);
  };
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProviders;
