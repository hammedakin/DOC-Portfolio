import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./DOCLogo.png";

const AdminNav = (props) => {
  const HandleLogout = () => {
    localStorage.removeItem("token");
    props.location.push("/");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <Link class="navbar-brand" to="/">
          <img src={Logo} width="60" height="60" alt="DOCLogo" loading="lazy" />
        </Link>

        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <NavLink class="nav-link" to="/adminpage">
              EDIT
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/case-study" onClick={HandleLogout}>
              LOGOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminNav;
