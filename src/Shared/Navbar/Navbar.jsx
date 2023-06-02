import { Link } from "react-router-dom";
import { BsFillCartFill } from 'react-icons/all';
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";
import './Navbar.css'
import useMyCarts from "../../Hooks/useMyCarts";

const Navbar = () => {
    const {user, auth} = useAuth();
    const [cart] = useMyCarts();

    const handleLogout = () =>{
        signOut(auth)
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Logout',
                showConfirmButton: false,
                timer: 1500
              })
          }).catch((error) => {
            console.log(error.message);
          });
    }

    const navItem = <>
        <li><Link className="uppercase text-sm active:bg-[unset] focus:bg-[unset] hover:bg-[unset] hover:text-[#EEFF25]" to=''>Home</Link></li>
        <li><Link className="uppercase text-sm active:bg-[unset] focus:bg-[unset] hover:bg-[unset] hover:text-[#EEFF25]" to=''>CONTACT us</Link></li>
        <li><Link className="uppercase text-sm active:bg-[unset] focus:bg-[unset] hover:bg-[unset] hover:text-[#EEFF25]" to='/dashboard'>DASHBOARD</Link></li>
        <li><Link className="uppercase text-sm active:bg-[unset] focus:bg-[unset] hover:bg-[unset] hover:text-[#EEFF25]" to='/ourmenu'>Our Menu</Link></li>
        <li><Link className="uppercase text-sm active:bg-[unset] focus:bg-[unset] hover:bg-[unset] hover:text-[#EEFF25]" to='/ourshop'>Our Shop</Link></li>
        <><Link className="uppercase text-sm active:bg-green-400 bg-green-400 h-8 w-8 flex justify-center items-center relative rounded-[50%] focus:bg-green-400 hover:bg-bg-400" to='dashboard/mycart'> <BsFillCartFill className="text-sm"></BsFillCartFill><div className="bg-red-600 text-xs h-6 w-6 flex justify-center items-center rounded-[50%] absolute -bottom-2 -right-2">{cart?.length || 0}</div></Link></>
    </>
    return (
        <>
            <nav className="navbar max-w-screen-lg mx-auto">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link className="block text-xl font-bold">BISTRO BOSS
                        <span className="block tracking-[5px] font-thin text-sm uppercase">Restaurant</span></Link>
                </div>
                <div className="navbar hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?<div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div> : <li className="list-none"><Link className="uppercase text-sm active:bg-[unset] focus:bg-[unset] hover:bg-[unset] hover:text-[#EEFF25]" to='/login'>Login</Link></li>}                    
                </div>
            </nav>
        </>
    );
};

export default Navbar;