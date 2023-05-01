import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function ProfileDataCom() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();
  const PROFILE_PATH = "/assets/avatar_default.jpg";

  const logoutFun = () => {
    localStorage.removeItem("dbdatalocal");
    navigate("/login");
  };

  //useeffect
  React.useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("dbdatalocal")));
  }, []);

  return (
    <div className="pt-[4.5rem] text-white p-2 flex flex-col justify-center items-center">
      <div className="flex">
        <img
          className="h-32 w-32 rounded-full object-cover"
          src={value[1] ? `${value[1]}` : `${PROFILE_PATH}`}
          alt="profile_pic"
        />
      </div>
      <div className="w-full md:w-96">
        <div className="w-full mt-10">
          <p className="pl-2">User Name</p>
          <p className="text-md py-4 pl-3 w-full rounded bg-gray-700">
            @{value[0]}
          </p>
        </div>
        <div className="w-full mt-8">
          <p className="pl-2">Email</p>
          <p className="text-md py-4 pl-3 w-full rounded bg-gray-700">
            {value[2]}
          </p>
        </div>
        <div className="w-full mt-8">
          <p className="pl-2">PhoneNumber</p>
          <p className="text-md py-4 pl-3 w-full rounded bg-gray-700">
            {value[3]}
          </p>
        </div>
        <div
          className="w-full mt-8"
          onClick={() => {
            logoutFun();
          }}
        >
          <p className="text-xl flex items-center justify-center py-4 pl-3 w-full rounded bg-gray-700 hover:bg-gray-600">
            <AiOutlineLogout />
            <span className="pl-2">Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDataCom;
