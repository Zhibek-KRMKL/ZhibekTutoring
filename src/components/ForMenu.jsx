import "../index.css";
import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedOut } from "../reducers/LoginReducer";

function LogoutLink() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setLoggedOut(true));

    localStorage.removeItem("loggedIn");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };
  return (
    <Link className="linkStyle" onClick={onLogout}>
      Log out
    </Link>
  );
}

function getItem(label) {
  return {
    label,
  };
}
const itemsFive = [
  getItem(
    <Link className="linkStyle" to="/homePage">
      🏠Home
    </Link>
  ),
  getItem(
    <Link className="linkStyle" to="/todoList">
      📝To Do List
    </Link>
  ),
  getItem(
    <Link className="linkStyle" to="/listItem">
      LIST Item
    </Link>
  ),
  getItem(
    <Link className="linkStyle" to="/password">
      🔐Input Password
    </Link>
  ),
  getItem(
    <Link className="linkStyle" to="/notification">
      📳Notification
    </Link>
  ),
  getItem(
    <Link className="linkStyle" to="/colorChange">
      🔄Color Change
    </Link>
  ),
  getItem(<LogoutLink />),
];
const itemsTwo = [
  getItem(
    <Link className="linkStyle" to="/registration">
      Registration
    </Link>
  ),
  getItem(
    <Link className="linkStyle" to="/login">
      Login
    </Link>
  ),
];

const ForMenu = () => {
  const loginStorage = JSON.parse(localStorage.getItem("loggedIn"));
  // console.log("forMenu", loginStorage);
  return (
    <>
      {loginStorage ? (
        <div className="forMenu">
          <Menu
            className="menuStyle"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="horizontal"
            theme="none"
            items={loginStorage ? itemsFive : itemsTwo}
          />
        </div>
      ) : null}
    </>
  );
};

export default ForMenu;
