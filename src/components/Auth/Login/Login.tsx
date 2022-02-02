import React, { useState } from "react";
import { signinThunk } from "../../../redux/thunk/userAuthThunk";
import { useDispatch } from "react-redux";

import { Box, Button, Grid, Link, TextField } from "@mui/material";
import { AuthDiv, AuthHeader } from "../Auth.styles";

// material UI
function Login() {
  // const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    dispatch(signinThunk(data));
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
          <AuthDiv>Вход</AuthDiv>
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
            Войти
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className="login__link">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="/registration"
                variant="body2"
                className="login__link"
              >
                {"Зарегистрироваться"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
