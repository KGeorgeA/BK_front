import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../utils/hooks/reduxHooks";
import { Box, Button, Input, TextField } from "@mui/material";
import { Profile } from "../UserPage.styles";
import { useDispatch } from "react-redux";
import { passwordChangeThunk } from "../../../redux/user/userData/userDataThunk";
import api from "../../../api/axios";

function UserProfile() {
  const dispatch = useDispatch();
  const { name, surname, email, phoneNumber, dob } = useAppSelector(
    (state) => state.userData.user
  );
  const { code, type, value } = useAppSelector((state) => state.userData.error);
  const [data, setData] = useState({
    name,
    surname,
    email,
    phoneNumber,
    dob,
    password: "",
  });
  const [passwordData, setPasswordData] = useState({
    passwordFirst: "",
    passwordSecond: "",
    password: "",
  });
  const [selectedFile, setSelectedFile] = useState({});
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleContactsInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (ev) => {
    setData({ ...data, [ev.currentTarget.id]: ev.currentTarget.value });
  };

  const handlePasswordInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (ev) => {
    setPasswordData({
      ...passwordData,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  };

  const handlePasswordSubmit: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    dispatch(passwordChangeThunk(passwordData));
  };

  const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    ev.preventDefault();
    // КАК С ЭТИМ БОРОТЬСЯ?
    // @ts-ignore
    setSelectedFile(ev.target.files[0]);

    // {
    //   target: { files },
    // }: any

    // console.log(files[0]);
    // const data = new FormData();
    // data.append("file", files[0]);
    // console.log(data);
    // api
    //   .post("/userdata/avatarchange", files[0])
    //   .then((res) => console.log(res));
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault();
    console.log(selectedFile);
    api
      .post("/userdata/avatarchange", selectedFile)
      .then((res) => console.log(res));
  };

  return (
    <Profile className="userpage__profile profile">
      <div className="profile__changer">
        <Box className="profile__contacts contacts">
          <div className="profile__title title">Контактные данные</div>
          <TextField
            label="Имя"
            id="name"
            className="contacts__item"
            fullWidth
            value={data.name}
            onChange={handleContactsInputChange}
          />
          <TextField
            label="Фамилия"
            id="surname"
            className="contacts__item"
            fullWidth
            value={data.surname}
            onChange={handleContactsInputChange}
          />
          <TextField
            label="Дата рождения"
            id="dob"
            className="contacts__item"
            fullWidth
            value={data.dob}
            onChange={handleContactsInputChange}
          />
          <TextField
            label="Номер телефона"
            id="phonenumber"
            className="contacts__item"
            fullWidth
            value={data.phoneNumber}
            onChange={handleContactsInputChange}
          />
          <TextField
            label="Логин (email)"
            id="email"
            className="contacts__item"
            fullWidth
            value={data.email}
            onChange={handleContactsInputChange}
          />
        </Box>
        <Box className="profile__password-changer password-changer">
          <div className="password-changer__title title">Смена пароля</div>
          <TextField
            label="Введите пароль"
            id="passwordFirst"
            className="password-changer__item"
            name="passwordFirst"
            onChange={handlePasswordInputChange}
            value={passwordData.passwordFirst}
            helperText=""
          />
          <TextField
            label="Повторите пароль"
            id="passwordSecond"
            className="password-changer__item"
            name="passwordSecond"
            onChange={handlePasswordInputChange}
            value={passwordData.passwordSecond}
            helperText=""
          />
          <TextField
            label="Введите новый пароль"
            id="password"
            className="password-changer__item"
            name="password"
            onChange={handlePasswordInputChange}
            value={passwordData.password}
            helperText="123"
          />
          <Button onClick={handlePasswordSubmit}>Send</Button>
        </Box>
        <Box>
          <div className="image-changer__title title">Установка аватарки</div>
          <div className="image-changer__image">
            <img
              className="changing-img"
              src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1644229735~hmac=9bfe09442cd71e853da5b90256401224"
              alt="user_avatar"
            />
          </div>
          <Box
            component="form"
            encType="multipart/form-data"
            sx={{ display: "flex", flexDirection: "column" }}
            // onSubmit={handleUpload}
          >
            <Input
              type="file"
              id="fileUpload"
              name="file"
              onChange={handleFileUpload}
            />
            <Button type="submit" onClick={handleSubmit}>
              Загрузить
            </Button>
          </Box>
        </Box>
      </div>
    </Profile>
  );
}

export default UserProfile;
