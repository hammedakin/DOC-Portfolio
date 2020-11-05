import React from "react";
import { NavLink , Link} from "react-router-dom";
import Logo from './DOCLogo.png'

const Navbar = () => {
  return (
    <>
 
      <nav class="navbar navbar-expand-lg">
        <Link class="navbar-brand" to="/">
          <img
            src={ Logo }
            width="60"
            height="60"
            alt="DOCLogo"
            loading="lazy"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon toggler"> 
          <box-icon class="box-icon" size='3rem' color=" #0197f6" name="menu" type="logo"></box-icon>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li>
              <NavLink tag={Link} activeClassName="active1"  to="/case-study">
                CASE STUDY
              </NavLink>
            </li>
            <li>
              <NavLink tag={Link} activeClassName="active1"  to="/articles">
                ARTICLES 
              </NavLink>
            </li>
            <li>
              <NavLink tag={Link} activeClassName="active1" class="nav-link" to="/about">
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
