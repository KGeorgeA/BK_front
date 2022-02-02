import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signinThunk, signupThunk } from "../../redux/thunk/userAuthThunk";
import { useNavigate, useLocation } from "react-router-dom";
import store from "../../redux/store/store";

import { Button, Grid, TextField, Link } from "@mui/material";
import { Box } from "@mui/system";
import { AuthDiv, AuthHeader } from "./Auth.styles";

function Auth() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [authUi, setAuthUi] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // const fromPage = location.state?.from?.pathname || '/';

  // useEffect(() => {
  //   navigate("/", { state: data });
  // }, [store.getState().userAuth.message.type]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    console.log(location);
    

    if (authUi) {
      if (localStorage.getItem("token") && store.getState().userAuth.loggedIn.isLoggedIn) {
        console.log("U are already loged in");
      } else {
        console.log("signin logic");

        dispatch(signinThunk({ email: data.email, password: data.password }));
      }
    } else {
      // dispatch(signupThunk(data));
      setAuthUi(true);
      // navigate('/auth')
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    setData({ ...data, [ev.currentTarget.name]: ev.currentTarget.value });
  };

  const handleAuthType: React.MouseEventHandler<HTMLAnchorElement> = () => {
    setAuthUi(!authUi);
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
          <AuthDiv>{authUi ? "Вход" : "Регистрация"}</AuthDiv>
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
          {!authUi && (
            <>
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
            </>
          )}
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
            {authUi ? "Войти" : "Зарегистрироваться"}
          </Button>
          <Grid container>
            {authUi && (
              <Grid item xs>
                <Link
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  className="auth__link"
                >
                  Забыли пароль?
                </Link>
              </Grid>
            )}
            <Grid item>
              <Link
                sx={{ cursor: "pointer" }}
                variant="body2"
                className="auth__link"
                onClick={handleAuthType}
              >
                {authUi ? "Зарегистрироваться" : "Уже зарегистрированы?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Auth;
