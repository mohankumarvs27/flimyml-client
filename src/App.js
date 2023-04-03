// import logo from "./logo.svg";
// import LginCom from "./Pages/LginCom";
//import RegisterCom from "./Pages/RegisterCom";
import { BrowserRouter } from "react-router-dom";
import RouterCom from "./router";

//import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterCom />
      </BrowserRouter>
    </>
  );
}

export default App;
