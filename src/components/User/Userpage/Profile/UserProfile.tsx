import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../../utils/hooks/reduxHooks";
import { Box, Button, Input, TextField } from "@mui/material";
import { Profile } from "../UserPage.styles";
import { useDispatch } from "react-redux";
import {
  avatarUploadThunk,
  dataChangeThunk,
  passwordChangeThunk,
} from "../../../../redux/user/userData/userDataThunk";
import { IUser } from "../../../../types/user/user.types";
import { SERVER_PATH } from "../../../../constants/serverPath";

function UserProfile() {
  const dispatch = useDispatch();
  const { avatarPath, isCompleted } = useAppSelector((state) => state.userData);
  const { name, surname, email, phoneNumber, dob } = useAppSelector(
    (state) => state.userData.user
  );
  console.log(dob)
  const [data, setData] = useState<IUser>({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    dob: '',
  });
  const [passwordData, setPasswordData] = useState({
    passwordFirst: "",
    passwordSecond: "",
    password: "",
  });
  const [selectedFile, setSelectedFile] = useState<File>();
  const [touched, setTouched] = useState<boolean>(false);

  useEffect(() => {
    setData({ name, surname, email, phoneNumber, dob });
  }, [isCompleted]);

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
    setSelectedFile(ev.target.files![0]);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault();
    if (selectedFile) {
      const data = new FormData();
      data.append("file", selectedFile);
      dispatch(avatarUploadThunk(data));
    }
  };

  const handleUpdateData: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault();
    dispatch(dataChangeThunk(data));
  };

  const handleTouch = () => {
    setTouched(!touched)
  }

  if (!isCompleted) {
    return null;
  }

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
            value={data.name || ""}
            onChange={handleContactsInputChange}
          />
          <TextField
            label="Фамилия"
            id="surname"
            className="contacts__item"
            fullWidth
            value={data.surname || ""}
            onChange={handleContactsInputChange}
          />
          <TextField
            label="Дата рождения"
            id="dob"
            className="contacts__item"
            fullWidth
            onFocus={handleTouch}
            onBlur={handleTouch}
            value={data.dob || ""}
            onChange={handleContactsInputChange}
            helperText={touched && "ДД.ММ.ГГГГ"}
            autoComplete="off"

          />
          <TextField
            label="Номер телефона"
            id="phonenumber"
            className="contacts__item"
            fullWidth
            value={data.phoneNumber || ""}
            onChange={handleContactsInputChange}
          />
          <TextField
            label="Логин (email)"
            id="email"
            className="contacts__item"
            fullWidth
            value={data.email || ""}
            onChange={handleContactsInputChange}
          />
          <Button onClick={handleUpdateData}>Сохранить изменения</Button>
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
            helperText=""
          />
          <Button onClick={handlePasswordSubmit}>Send</Button>
        </Box>
        <Box>
          <div className="image-changer__title title">Установка аватарки</div>
          <div className="image-changer__image">
            <img
              className="changing-img"
              src={avatarPath ? `${SERVER_PATH}${avatarPath}` : ""}
              alt="user_avatar"
            />
          </div>
          <Box
            component="form"
            encType="multipart/form-data"
            sx={{ display: "flex", flexDirection: "column" }}
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
