import React, { useState } from "react";
import { userRegistration } from "../../axios/post/userRegistration";

// material UI
//
// form data -> name (surname?), phoneNumber, email, pass
function Registration() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    userRegistration(data);
  };

  const handleOnInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    setData({ ...data, [ev.currentTarget.name]: ev.currentTarget.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          onChange={handleOnInputChange}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={data.name}
        />
        <input
          onChange={handleOnInputChange}
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          value={data.phoneNumber}
        />
        <input
          onChange={handleOnInputChange}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={data.email}
        />
        <input
          onChange={handleOnInputChange}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={data.password}
        />
        <button>Зарегестрироваться</button>
      </form>
    </>
  );
}

export default Registration;
