import NavLink from "@/components/NavLink";
import React from "react";
import User from "@/components/User";

const navLinks = [
  {
    path: "/",
    title: "Go to Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="mr-8 ml-2 w-1/3">
      <h1 className="text-3xl font-semibold">Message</h1>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li className="my-2" key={path}>
            <NavLink exact className="text-blue-500" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
    </aside>
  );
};

export default Sidebar;
