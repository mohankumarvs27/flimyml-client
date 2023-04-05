import React from "react";
import CardCom from "../Components/CardCom";
import DummyCom from "../Components/DummyCom";
import HeaderCom from "../Components/HeaderCom";
import MobileNavbar from "../Components/MobileNavbar";

function Dashboard() {
  return (
    <div>
      <HeaderCom />
      <DummyCom />
      <CardCom />
      <MobileNavbar />
    </div>
  );
}

export default Dashboard;
