import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/" exact>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Expense</NavLink>
        </li>
        <li>
          <NavLink to="/edit">Edit Expense</NavLink>
        </li>
        <li>
          <NavLink to="/help">Help</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
