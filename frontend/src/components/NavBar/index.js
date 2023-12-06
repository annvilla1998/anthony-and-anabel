import React from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
  const location = useLocation();

  const links = [
    { label: "Photo Album", href: "/photo-album" },
    { label: "RSVP", href: "/rsvp" },
  ];

  return (
    <div>
        <nav className="navbar navigation shadow-lg">
          <div className="flex-1">
            <Link className={`${"/" === location.pathname ?  "active-link" : ""}`} to="/">Home</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                <Link passHref={true} to="https://www.honeyfund.com/site/sieber-villalobos-05-26-2024">Honeyfund</Link>
                </li>
                {links.map(({ label, href }) => (
                <li key={href} className={`${href === location.pathname ?  "active-link" : ""}`}>
                    <Link to={href}>{label}</Link>
                </li>
                ))}
            </ul>
          </div>
        </nav>
        <Outlet />
    </div>
  );
};

export default NavBar;
