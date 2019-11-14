import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/login.js";
import Error from "./Error";

function Login({ login, history, error }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    console.log(login(data));
    const response = await login(data);
    console.log(response);
    if (response === "Successful") {
      history.push("/profile");
    } else {
      console.log(response);
    }
  };
  console.log("Login Errors", errors);

  return (
    <>
      {error && <Error error={error} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register({ required: true })}
        />

        <input type="submit" />
      </form>
    </>
  );
}

const mapStateToProps = state => {
  const { error } = state;
  return {
    error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);
