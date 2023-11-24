import { Outlet } from "react-router-dom";
import NavBar from "../Pages/SharedPage/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;