import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { Userpage } from "./UserPage.styles";

function UserPage() {
  const {
    user: { name, surname, email, phoneNumber },
    avatarPath,
  } = useAppSelector((state) => state.userData);
  const [filter, setFilter] = useState<string>("Профиль");

  return (
    <Userpage className="userpage">
      <div className="userpage__header">
        <div className="userpage__title">
          <h2 className="title">{filter}</h2>
        </div>
        <div className="userpage__user">
          <div className="userpage__user-image">
            <img
              className="profile-img"
              src={avatarPath ? `http://localhost:4000${avatarPath}` : ""}
              alt="user_avatar"
            />
          </div>
          <div className="userpage__user-info">
            <div className="userpage__user-name">
              {name} {surname}
            </div>
            <div className="userpage__user-contacts user-contacts">
              <div className="user-contacts__phone">{phoneNumber}</div>
              <div className="user-contacts__email">{email}</div>
            </div>
          </div>
        </div>
        <div>
          <ul className="userpage__filters">
            <div className="filter">
              <Link
                className={`link ${filter === "Профиль" ? "link-active" : ""}`}
                to="profile"
                onClick={() => {
                  setFilter("Профиль");
                }}
              >
                Профиль
              </Link>
            </div>

            <div className="filter">
              <Link
                className={`link ${filter === "Заказы" ? "link-active" : ""}`}
                to="orders"
                onClick={() => {
                  setFilter("Заказы");
                }}
              >
                Заказы
              </Link>
            </div>

            <div className="filter">
              <Link
                className={`link ${filter === "Вишлист" ? "link-active" : ""}`}
                to="wishlist"
                onClick={() => {
                  setFilter("Вишлист");
                }}
              >
                Вишлист
              </Link>
            </div>
          </ul>
        </div>
      </div>

      <Outlet />
    </Userpage>
  );
}

export default UserPage;
