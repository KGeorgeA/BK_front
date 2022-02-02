import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupThunk } from "../../../redux/thunk/userAuthThunk";

import { Button, Grid, TextField, Link } from "@mui/material";
import { Box } from "@mui/system";
import { AuthDiv, AuthHeader } from "../Auth.styles";

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

  const dispatch = useDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    dispatch(signupThunk(data));
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    setData({ ...data, [ev.currentTarget.name]: ev.currentTarget.value });
  };

  return (
    <Box
      className="wrapper"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <AuthHeader className="login__header">
          <AuthDiv>Bookstore Name</AuthDiv>
          <AuthDiv>Регистрация</AuthDiv>
          <AuthDiv>НАПОМИНАНИЕ! Шрифт ни о чём</AuthDiv>
        </AuthHeader>
        <Box
          className="login__form"
          component="form"
          sx={{
            margin: "auto auto",
            maxWidth: "500px",
            width: "100%",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            className="form__input"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Ваше Имя"
            name="name"
            autoComplete="off"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            className="form__input"
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Ваш номер телефона"
            name="phoneNumber"
            autoComplete="off"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            className="form__input"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Электронная почта"
            name="email"
            autoComplete="off"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            className="form__input"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="off"
            onChange={handleInputChange}
          />
          <Button
            className="form__button"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Зарегистрироваться
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="/login"
                variant="body2"
                className="registration__link"
              >
                {"Уже зарегистрированы?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Registration;
