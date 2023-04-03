import React from "react";
import { HiHome } from "react-icons/hi";
import { BsFillCameraReelsFill, BsFillCalendar3WeekFill } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SidebarCom() {
  const sidebardata = [
    {
      id: 1,
      icon: <HiHome className="text-xl" />,
      title: "Home",
      path: "/home",
    },
    {
      id: 2,
      icon: <BsFillCameraReelsFill className="text-xl" />,
      title: "Movies",
      path: "/movies",
    },
    {
      id: 3,
      icon: <MdOndemandVideo className="text-xl" />,
      title: "TVSeries",
      path: "/tvseries",
    },
    {
      id: 4,
      icon: <BsFillCalendar3WeekFill className="text-xl" />,
      title: "Upcoming",
      path: "/upcoming",
    },
  ];
  return (
    <>
      <div className="h-full flex items-center shadow-md w-16 px-3 text-gray-700">
        <ul className="group fixed flex flex-col space-y-6 pt-2">
          {sidebardata.map(({ icon, title }, key) => (
            <li key={key}>
              <NavLink>
                <div className="flex items-center h-8  rounded-md hover:text-white">
                  {icon}
                  <span className="group-hover:inline hidden pl-2">
                    {title}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SidebarCom;
