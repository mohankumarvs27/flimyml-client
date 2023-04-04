import React from "react";
import CardCom from "../Components/CardCom";
import HeaderCom from "../Components/HeaderCom";
import MobileNavbar from "../Components/MobileNavbar";
//import SidebarCom from "../Components/SidebarCom";

function Dashboard() {
  return (
    <div className="flex h-screen w-full flex-col mx-auto">
      <div>
        <HeaderCom />
      </div>
      <div className="flex relative bg-gray-900">
        {/* <SidebarCom /> */}
        <MobileNavbar />
        <CardCom />
      </div>
    </div>
  );
}

export default Dashboard;
