import React, { useCallback, useContext } from "react";
import "./SignIn.scss";
import { auth } from "../../utils/firebase-functions";
import { UserContext } from "../providers/UserProvider";
import { Redirect, withRouter } from "react-router-dom";

const SignIn = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        history.push("/Dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { user } = useContext(UserContext);
  if (user) {
    return <Redirect to={"/Dashboard"} />;
  }
  return (
    <div className="login-page">
      <div className="login">
        <form onSubmit={handleLogin} className="login__form">
          <div className="mb-5">
            <h2 className="heading-form">LogIn</h2>
          </div>
          <div className="form__group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="form__input"
            />
          </div>
          <div className="form__group mb-5">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form__input"
            />
          </div>
          <div className="form__group">
            <button className="btn-submit" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
