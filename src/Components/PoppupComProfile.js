import React from "react";
import { Link } from "react-router-dom";

export default function PoppupComProfile() {
  const [value, setValue] = React.useState("");
  const PROFILE_PATH = "/assets/avatar_default.jpg";

  //useeffect
  React.useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("dbdatalocal")));
  }, []);

  return (
    <div className="top-5 right-5">
      <div className="relative inline-block">
        <Link to="/dashboard/profile">
          <img
            className="h-10 w-10 rounded-full select-none"
            src={value[1] ? `${value[1]}` : `${PROFILE_PATH}`}
            alt="profile_pic"
          />
        </Link>
      </div>
    </div>
  );
}
