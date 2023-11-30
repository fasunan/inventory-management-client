import { Helmet } from "react-helmet-async";
import { FaHome,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // const [cart] = useCart();
    // const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <Helmet>
                <title>Fashion Store || Dashboard</title>
            </Helmet>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#4796BD] mt-5">
                <ul className="menu p-4">
                    {
                        // isAdmin ? <>
                        //     <li>
                        //         <NavLink to="/dashboard/adminHome">
                        //             <FaHome></FaHome>
                        //             Admin Home</NavLink>
                        //     </li>
                        //     
                        // </>
                        //     :
                            <>
                                <li>
                                    <NavLink to="/dashboard/shopManager">
                                        Shop Manager</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/salesProducts">
                                        Sales Collection</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/checkOutCart">
                                        Check-Out Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/salesSummary">
                                        Manager Sales Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/subscription">
                                    subscription</NavLink>
                                </li>
                                
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    
                   
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;