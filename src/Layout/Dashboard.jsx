import {
    FaAddressBook,
  FaCalendarAlt,
  FaDeezer,
  FaHome,
  FaShoppingCart,
  FaUser,
  FaWallet,
} from "react-icons/fa";

import { Link, NavLink, Outlet } from "react-router-dom";
import useAds from "../Hooks/usAds";
import useInstructor from "../Hooks/useInstructor";


const Dashboard = () => {
  
  // const isheAdmin = true
const [isheAdmin] =useAds();
  const [isheInstructor] = useInstructor()
  // const isheStudent = false
  return (
    <div className="drawer lg:drawer-open bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200  space-y-3">
        
        {
          isheAdmin ?( 
            
          <ul>
              <li className="hover:bg-yellow-400">
            <NavLink to={"/"}>
              {" "}
              <FaHome></FaHome> Home
            </NavLink>
          </li>

            <li className="hover:bg-yellow-400">
            <NavLink to={"/dashboard/allusers"}>
              {" "}
              <FaUser></FaUser> AllUsers
            </NavLink>
          </li>
          
         
          </ul>

          ) : isheInstructor ? (   <div>
             <li className="hover:bg-yellow-400">
            <NavLink to={"/dashboard/addaclass"}>
              {" "}
              <FaDeezer></FaDeezer> Add a class
            </NavLink>
          </li>
          </div>
         ) : ( <div>


<li className="hover:bg-yellow-400">
            <NavLink to={"/"}>
              {" "}
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li className="hover:bg-yellow-400">
            <NavLink to={"/dashboard/selectedclass"}>
              {" "}
              <FaDeezer></FaDeezer> My selected Class
            </NavLink>
          </li>
          <li className="hover:bg-yellow-400text-black ">
            <NavLink to={"/dashboard/history"}>
              {" "}
              <FaWallet></FaWallet> Payment
            </NavLink>
          </li>
          <li className="hover:bg-yellow-400 text-black ">
            <NavLink to={"/dashboard/enrolled"}>
              {" "}
              <FaAddressBook></FaAddressBook> Enrolled Class
            </NavLink>
          </li>
         

          </div> ) }



       

          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
