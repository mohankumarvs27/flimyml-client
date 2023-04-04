import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function PoppupComProfile() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  const logoutFun = () => {
    localStorage.removeItem("dbdatalocal");
    navigate("/login");
  };

  //useeffect
  React.useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("dbdatalocal")));
  }, []);

  return (
    <div className=" top-5 right-5">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="">
            <img
              className="h-10 w-10 rounded-full"
              src={value[1]}
              alt="profile_pic"
            />
          </Menu.Button>
        </div>
        <Transition>
          <Menu.Items className="absolute right-0 text-left shadow-lg rounded-md  p-2 text-white bg-gray-600">
            <div className="hover:bg-gray-500 rounded p-2">
              <Menu.Item>
                <button>
                  <div className="flex items-center space-x-2">
                    <CgProfile />
                    <p>{value[0]}</p>
                  </div>
                </button>
              </Menu.Item>
            </div>
            <div className="">
              <Menu.Item>
                <button
                  onClick={() => {
                    logoutFun();
                  }}
                >
                  <div className="flex rounded items-center p-2 hover:bg-gray-500 w-48 space-x-2">
                    <AiOutlineLogout />
                    <p>logout</p>
                  </div>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}