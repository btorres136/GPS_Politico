import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import { auth } from "../utils/firebase-functions";
import { UserContext } from "../providers/UserProvider";

const SignUp = ({history}) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth.createUserWithEmailAndPassword(email.value, password.value);
        history.push("/Dashboard/Home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { user } = useContext(UserContext);
  if (user) {
    return <Redirect to={"/Dashboard/Home"} />;
  }
  return (
    <div className="login-page">
      <div className="login">
        <form onSubmit={handleSignUp} className="login__form">
          <div className="mb-5">
            <h2 className="heading-form">SignUp</h2>
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

export default withRouter(SignUp);
