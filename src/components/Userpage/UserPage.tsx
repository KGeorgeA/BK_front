import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { Userpage } from "./UserPage.styles";

function UserPage() {
  const { name, surname, email, phoneNumber, dob } = useAppSelector(
    (state) => state.userAuth.user
  );
  const [filter, setFilter] = useState("Профиль");

  return (
    <Userpage className="userpage">
      <div className="userpage__header">
        <div className="userpage__title">
          <h2 className="title">{filter}</h2>
        </div>
        <div className="userpage__user">
          <div className="userpage__user-image">
            <img className="profile-img" src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1644229735~hmac=9bfe09442cd71e853da5b90256401224" alt="user_avatar" />
          </div>
          <div className="userpage__user-info">
            <div className="userpage__user-name">
              {/* {name} {surname} */}
              George Karcivadze
            </div>
            <div className="userpage__user-contacts user-contacts">
              <div className="user-contacts__phone">
                +79515235344
                {/* {phoneNumber} */}
              </div>
              <div className="user-contacts__email">
                karcivadzega@gmail.com
                {/* {email} */}
              </div>
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
