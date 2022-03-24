import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/user-list">User Listing</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
        </ul>
      </header>
      );
  }
}

export default Header;
