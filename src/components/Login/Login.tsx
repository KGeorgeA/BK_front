import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginThunk } from "../../redux/thunk/userAuthThunk";
import { Box, Button, Grid, Link, TextField } from "@mui/material";
import { HeaderDiv, LoginHeader } from "./Login.styles";

// material UI
function Login() {
  // const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    // userLogin(data);
    // dispatch(loginThunk(data));
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    setData({ ...data, [ev.currentTarget.name]: ev.currentTarget.value });
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit} autoComplete="off">
    //     <input
    //       onChange={handleInputChange}
    //       value={data.email}
    //       id="email"
    //       type="email"
    //       name="email"
    //       placeholder="Email"
    //     />
    //     <input
    //       onChange={handleInputChange}
    //       value={data.password}
    //       id="password"
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //     />
    //     <button>Click me</button>
    //   </form>
    //   <br></br>
    //   <br></br>
    //   <br></br>
    //   <br></br>
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
        <LoginHeader className="login__header">
          <HeaderDiv>Bookstore Name</HeaderDiv>
          <HeaderDiv>Вход</HeaderDiv>
          <HeaderDiv>Шрифт ни о чём</HeaderDiv>
        </LoginHeader>
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
