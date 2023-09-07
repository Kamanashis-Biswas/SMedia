import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/message",
    title: "Message",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      <h1 className="text-3xl font-semibold">SMedia</h1>
      <ul className="flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <NavLink
              exact={path === "/"}
              activeClassName="text-blue-500"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
