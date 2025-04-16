import { Outlet } from "react-router-dom";
import "./App.css";
import Content from "./Content";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="col-xxl-12">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
