import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdMovieFilter } from "react-icons/md";
import { HiTv } from "react-icons/hi2";

export default function MobileNavbar() {
  const sidebardata = [
    {
      id: 1,
      icon: <AiFillHome className="group-hover:text-blue-500 h-6 w-6" />,
      title: "Home",
      path: "/dashboard/home",
    },
    {
      id: 2,
      icon: <MdMovieFilter className="group-hover:text-blue-500 h-6 w-6" />,
      title: "Movies",
      path: "/dashboard/movies",
    },
    {
      id: 3,
      icon: <HiTv className="group-hover:text-blue-500 h-6 w-6" />,
      title: "WebSeries",
      path: "/dashboard/webseries",
    },
  ];
  return (
    <div className="fixed bottom-0 w-full h-[54px] text-white text-[10px] bg-gray-900">
      <div className="grid grid-cols-3 border-t gap-2 border-gray-800 py-1 px-2">
        {sidebardata.map(({ icon, title, path }, key) => (
          <React.Fragment key={key}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-800 group flex flex-col justify-center rounded items-center p-1 mb-2"
                  : "group flex flex-col justify-center rounded items-center hover:bg-gray-800 p-1 mb-2"
              }
            >
              {icon}
              <span className="group-hover:text-blue-500">{title}</span>
            </NavLink>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
