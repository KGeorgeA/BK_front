import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks/reduxHooks";

function UserPage() {
  const {name, surname, email, phoneNumber, dob} = useAppSelector(state => state.userAuth.user) // add phonenumber to the store
  const [filter, setFilter] = useState('Профиль');

  return (
    <div className="profile">
      <div className="profile__header">
        <h1>{filter}</h1>
        <div className="profile__user-info">
          <div className="profile__user-name">{name} {surname}</div>
          <div className="profile__user-contacts">{phoneNumber} {email}</div>
        </div>
      </div>
      <ul className="profile__filters">
        <li onClick={() => {setFilter('Профиль')}}>Профиль</li>
        <li onClick={() => {setFilter('Заказы')}}>Заказы</li>
        <li onClick={() => {setFilter('Вишлист')}}>Вишлист</li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default UserPage;
