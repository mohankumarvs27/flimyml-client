import React from "react";
import { Outlet } from "react-router-dom";
// import CardCom from "../Components/CardCom";
import HeaderCom from "../Components/HeaderCom";
import MobileNavbar from "../Components/MobileNavbar";

function Dashboard() {
  return (
    <>
      <section>
        <HeaderCom />
        <MobileNavbar />
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default Dashboard;
