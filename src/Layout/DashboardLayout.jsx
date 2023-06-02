import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillHome,BsFillCalendarWeekFill,AiOutlineShoppingCart,MdReviews,BsCalendarHeart,MdPayment } from 'react-icons/all';
import ActiveLink from '../components/ActiveLink/ActiveLink';

const DashboardLayout = () => {
    const navItems = <>
        <li><ActiveLink to='/dashboard/userhome' className='text-black uppercase'> <AiFillHome className='text-lg'></AiFillHome>User Home</ActiveLink></li>
        <li><ActiveLink to='/dashboard/reservation' className='text-black uppercase'> <BsFillCalendarWeekFill className='text-lg'></BsFillCalendarWeekFill>reservation</ActiveLink></li>
        <li><ActiveLink to='/dashboard/paymenthistory' className='text-black uppercase'> <MdPayment className='text-lg'></MdPayment>payment history</ActiveLink></li>
        <li><ActiveLink to='/dashboard/mycart' className='text-black uppercase'> <AiOutlineShoppingCart className='text-lg'></AiOutlineShoppingCart>my cart</ActiveLink></li>
        <li><ActiveLink to='/dashboard/addreview' className='text-black uppercase'> <MdReviews className='text-lg'></MdReviews>add review</ActiveLink></li>
        <li><ActiveLink to='/dashboard/mybooking' className='text-black uppercase'> <BsCalendarHeart className='text-lg'></BsCalendarHeart>my booking</ActiveLink></li>
    </>
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                        <li><Link to='/' className="block text-xl font-extrabold  text-black">BISTRO BOSS
                            <span className="block tracking-[5px] font-thin text-sm uppercase">Restaurant</span></Link></li>
                        {/* <!-- Sidebar content here --> */}
                        {navItems}
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashboardLayout;