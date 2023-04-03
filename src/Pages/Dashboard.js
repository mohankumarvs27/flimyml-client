import React from "react";
import CardCom from "./CardCom";
import HeaderCom from "./HeaderCom";

import SidebarCom from "./SidebarCom";

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
