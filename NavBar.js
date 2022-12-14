import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.css";

const navs = ["Home", "Calculator", "Counter", "Login", "More"];

export default class NavBar extends Component {
  render() {
    return (
      <>
      {this.props.NavBar}
        <div className={styles.nav_wrap}>
         {navs.map((item) => {
            return (
              <NavLink to={"/" + item} key={item}>
                <div className={styles.navs}>{item}</div>
              </NavLink>
            );
          })}
        </div>
      </>
    );
  }
}
