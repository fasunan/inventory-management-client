import { Outlet } from "react-router-dom";
import NavBar from "../Pages/SharedPage/Navbar/Navbar";
import Footer from "../Pages/SharedPage/Footer/Footer";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;