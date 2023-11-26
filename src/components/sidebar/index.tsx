import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../router/routes";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="fixed top-0 xl:block hidden right-0 w-0 xl:w-[250px] border-l h-screen border-l-white-100 z-10 py-[30px]  no-scrollbar">
      <img
        alt=""
        src={require("../../assets/images/soft-bank.png")}
        className="mx-auto"
      />
      <div className="mt-[66px] pr-11">
        <ul>
          {routes.map(route => {
            return (
              <li className="mb-10 ">
                <Link className="flex items-center gap-[24px]" to={route.path}>
                  {route.path === pathname
                    ? route.activeIon
                    : route.deactivateIcon}
                  <p
                    className={`morabba ${
                      route.path === pathname
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                  >
                    {route.title}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
