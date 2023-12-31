import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authproviders/AuthProvider";
import useCart from "../Hooks/useCart";

const Navbar = () => {
  const[enroll] = useCart()
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const nav = (
    <>
      <li>
        <Link to={"/"}>Home </Link>
      </li>
      <li>
        <Link to={"/instructor"}>Instructors </Link>
      </li>
      <li>
        <Link to={"/classes"}>Classes </Link>
      
      </li>
      <li>
        <Link to={"/dashboard"}>DashBoard </Link>
      
      </li>


      {/* <Link to={"/dashboard/selectedclass"}>
        <button className="btn bg-black text-white border-none hover:bg-black">
          <p className="text-yellow-400">Dashboard</p>
          <div className="badge bg-black text-yellow-400 badge-secondary">
            +{enroll.length || 0}
          </div>
        </button>
      </Link> */}
    </>
  );
  return (
    <div className="navbar bg-black text-yellow-400 font-semibold fixed z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <img width={"50"} height={"90"} src="../../public/logo.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom me-1"
              data-tip={user.displayName}
            >
              <img
                style={{ height: "45px" }}
                className="rounded-full tooltip tooltip-bottom"
                data-tip="hello"
                src={user.photoURL}
                alt=""
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn bg-yellow-400 text-black border-none hover:bg-white"
            >
              Logout
            </button>
            {/* <Link to={"/myclasses"}>My Classes </Link> */}

          </>
        ) : (
          <>
            <Link to={"login"}>
              {" "}
              <a className="btn bg-yellow-400 text-black border-none hover:bg-white">
                Login
              </a>
            </Link>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
