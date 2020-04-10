import React from "react";
import { auth } from "../../utils/firebase-functions";

const Dashboard = () => {
  return (
    <div>hello
      <button onClick={() => auth.signOut()}>SignOut</button>
    </div>
  );
};

export default Dashboard;
