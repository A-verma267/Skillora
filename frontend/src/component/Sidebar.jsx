import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () =>{
    return (
        <>
            <div className="flex w-full pt-10  gap-2 md:hidden">
                <NavLink to={"/"} className={`text-white bg-[#251046] p-1 py-2 m-auto sm:py-3 sm:px-4 text-xs text-center w-4/5 rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out`}>Home</NavLink>
                <NavLink to={"/dashboard"} className="text-white bg-[#251046] p-1 py-2 m-auto sm:py-3 sm:px-4 text-xs text-center w-4/5 rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out">DashBoard</NavLink>
                <NavLink to={"/plans"} className="text-white bg-[#251046] p-1 py-2 m-auto sm:py-3 sm:px-4 text-xs text-center w-4/5 rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out">Plans</NavLink>
                <NavLink to={"/tutor"} className="text-white bg-[#251046] p-1 py-2 m-auto sm:py-3 sm:px-4 text-xs text-center w-4/5 rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out">Find Tutor</NavLink>
            
            </div>
            <div className="hidden  w-[15%] h-full fixed top-[10%] pt-10 md:flex items-center gap-4 flex-col border-r border-r-white">
                <NavLink to={"/"} className={`text-white bg-[#251046] py-3 px-4 text-xs text-center w-4/5 rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out`}>Home</NavLink>
                <NavLink to={"/dashboard"} className="text-white bg-[#251046] py-3 px-4 text-xs text-center w-4/5 rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out">DashBoard</NavLink>
                <NavLink to={"/plans"} className="text-white bg-[#251046] py-3 px-4 text-xs text-center w-4/5 rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out">Plans</NavLink>
                <NavLink to={"/tutor"} className="text-white bg-[#251046] py-3 px-4 text-xs text-center w-4/5 rounded-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out">Find Tutor</NavLink>
            </div>

        </>
    )
}
export default  Sidebar;