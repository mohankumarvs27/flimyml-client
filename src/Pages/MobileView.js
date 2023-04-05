import React from "react";
import CardCom from "../Components/CardCom";
import DummyCom from "../Components/DummyCom";
import HeaderCom from "../Components/HeaderCom";
import MobileNavbar from "../Components/MobileNavbar";

function MobileView() {
  return (
    <div>
      <HeaderCom />
      <DummyCom />
      <MobileNavbar />
      <CardCom />
    </div>
  );
}

export default MobileView;
