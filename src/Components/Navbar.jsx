import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = ({setSearchFilter}) => {

    const { cart } = useSelector((state) => state);
    const [search, setSearch] = useState("");

    const formSubmit = (event) => {
        event.preventDefault();
        setSearchFilter(search);
    }

    return (
        <div className="">
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto gap-2">

                <NavLink to="/">
                    <div className="md:ml-5 ml-2" >
                        <img src={logo} alt="logo" height={100} width={150} />
                    </div>
                </NavLink>

                
                <form className=" mx-auto max-w-xl py-1 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300" onSubmit={formSubmit}>
                    <input type="text" placeholder="Search items here" onChange={(e)=> setSearch(e.target.value)}
                        className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="search"></input>
                        <button type="submit" className="flex flex-row items-center justify-center min-w-[30px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-slate-900 text-white font-medium tracking-wide border-transparent py-1.5 h-[35px] -mr-3" >
                        <FaSearch/>
                    </button>
                </form>

                <div className="flex items-center font-medium text-slate-100 mr-5 md:space-x-6 space-x-1">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div className="relative">
                            <FaShoppingCart className="text-2xl" ></FaShoppingCart>

                            {
                                cart.length > 0 &&
                                (<span className="absolute -top-1 -right-2 bg-green-600 text-x5 w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">

                                    {cart.length}</span>)
                            }
                        </div>
                    </NavLink>

                </div>

            </nav>
        </div>


    )
};

export default Navbar;