import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Layout() {
  return (
    <>
      <SideBar />

      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;