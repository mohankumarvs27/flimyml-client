import React from "react";
import CardCom from "../Components/CardCom";
import HeaderCom from "../Components/HeaderCom";
import SidebarCom from "../Components/SidebarCom";

function Dashboard() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <HeaderCom />
      <div className="flex h-full bg-gray-900">
        <SidebarCom />
        <CardCom />
      </div>
    </div>
  );
}

export default Dashboard;
