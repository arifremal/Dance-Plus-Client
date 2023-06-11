import { FaBeer, FaCalendarAlt, FaHome, FaShoppingCart, FaUser, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile ">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

    </div>
    <div className="drawer-side bg-[#ffbd59]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">

        <li><NavLink > <FaUser></FaUser> User</NavLink></li>
        <li><NavLink to={'/dashboard/mycart'}  > <FaShoppingCart> </FaShoppingCart>My Cart
        {/* <div className="badge badge-secondary">{cart?.length || 0}</div> */}
        </NavLink></li>
        <li><NavLink  > <FaWallet></FaWallet> Payment</NavLink></li>
        <li><NavLink  > <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>

            <div className="divider"></div>
            <li><NavLink to={'/'}  > <FaHome></FaHome> Home</NavLink></li>
            <li><NavLink to={'/menu'}   > <FaHome></FaHome> our Menu</NavLink></li>
            <li><NavLink to={'/order/salad'}   > <FaHome></FaHome> Order Food</NavLink></li>
            
        </ul>

    </div>
</div>
    );
};

export default Dashboard;