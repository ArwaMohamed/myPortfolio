import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
export default function MasterLayout() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 p-0">
          <SideBar />
        </div>
        <div className="col-md-10 p-0">
          <Outlet />
        </div>
      </div>
    </div>
    </>
  );
}
