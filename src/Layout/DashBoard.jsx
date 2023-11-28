import { FaHome,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // const [cart] = useCart();

    // TODO: get isAdmin value from the database
    // const [isAdmin] = useAdmin();

    return (
        <div className="flex">
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
                                        {/* <FaHome></FaHome> */}
                                        Shop Manager</NavLink>
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