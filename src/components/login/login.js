import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      emailId: e.target.emailId.value,
      password: e.target.password.value,
    };

    fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "this");
        if (result?.success == 1) {
          localStorage.setItem("isLogin", result?.success);
          navigate("/dashboard")
        }else{
          localStorage.setItem("isLogin", 0);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="loginForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="formInputs">
          <div className="formControl">
            <input name="emailId" type="text" autoComplete={false} />
            <label>Username</label>
          </div>
          <div className="formControl">
            <input name="password" type="password" autoComplete={false} />
            <label>Password</label>
          </div>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
