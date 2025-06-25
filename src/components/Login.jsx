import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);
  const navigateTo = useNavigate();

    const [loading, setLoading] = useState(false);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    setLoading(true); //Show loader
    await axios
      .post("https://mern-auth-backend-23n4.onrender.com/api/v1/user/login", data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(true);
        setUser(res.data.user);
        navigateTo("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
       .finally(() => {
      setLoading(false); // Hide loader
    });
  };
  return (
    <>
      <form
        className="auth-form"
        onSubmit={handleSubmit((data) => handleLogin(data))}
      >
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />
        <input
          type="password"
          placeholder="Password"
          required
          {...register("password")}
        />
        <p className="forgot-password">
          <Link to={"/password/forgot"}>Forgot your password?</Link>
        </p>
          <button type="submit" disabled={loading}>
  {loading ? (
    <span className="spinner"></span>
  ) : (
    "Login"
  )}
</button>
      </form>
    </>
  );
};

export default Login;