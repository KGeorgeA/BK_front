import React, { useState } from "react";
import { userLogin } from "../../axios/post/userLogin";

// material UI
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    userLogin(data);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setData({ ...data, [ev.currentTarget.name]: ev.currentTarget.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          onChange={handleInputChange}
          value={data.email}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleInputChange}
          value={data.password}
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button>Click me</button>
      </form>
    </div>
  );
}

export default Login;
