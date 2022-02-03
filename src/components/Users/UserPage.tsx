import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import store from "../../redux/store/store";

function UserPage() {
  const {name, email} = store.getState().userAuth.data // add phonenumber to the store
  const [filter, setFilter] = useState('профиль');

  return (
    <div className="profile">
      <div className="profile__header">
        <h1>{filter}</h1>
        <div className="profile__user-info">
          <div className="profile__user-name">{name} Karcivadze</div>
          <div className="profile__user-contacts">PhoneNumber {email}</div>
        </div>
      </div>
      <ul className="profile__">
        <li>Профиль</li>
        <li>Заказы</li>
        <li>Вишлист</li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default UserPage;
