import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css';
import NavAvaAndInfo from "./NavAvaAndInfo";

const Nav = () => {
  return (
    <nav className={s.nav}>
     <NavAvaAndInfo />
      <div className={s.item}>
        <NavLink to="/profile"  activeClassName={s.activeLink}><button className={s.glowOnHover}>Profile</button></NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}><button className={s.glowOnHover}>Messages</button></NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}><button className={s.glowOnHover}>Users</button></NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}><button className={s.glowOnHover}>News</button></NavLink>
      </div>
      {/* <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}><button className={s.glowOnHover}>Music</button></NavLink>
      </div> */}
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}><button className={s.glowOnHover}>Settings</button></NavLink>
      </div>
    </nav>
  );
};

export default Nav;
