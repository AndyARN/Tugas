/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function Navbar({ logo = "default" }) {
  return (
    <header className="">
      <div>
        {/* logo */}
        <NavLink to="/" className="">
          {logo}
        </NavLink>

        {/* navigasi */}
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Contact</NavLink>
          <NavLink to="/">Get Started</NavLink>
        </nav>
      </div>
    </header>
  );
}
