import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileDataCom() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  //useeffect
  React.useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("dbdatalocal")));
  }, []);

  return (
    <div className="pt-14 text-white p-2 flex justify-center overflow-scroll">
      <div className="rounded shadow-lg">
        <div className="flex items-center justify-center flex-col space-y-2">
          <img
            className="h-32 w-32 rounded-full object-cover"
            src={value[1]}
            alt="profile_pic"
          />
          <p className="text-md p-2 w-full rounded">{value[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDataCom;
