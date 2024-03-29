import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { FiTrash } from "react-icons/fi";
import docs_logo from "../assets/docs_logo.webp";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className=" fixed top-0 left-0 flex text-center items-center flex-col w-20 h-screen p-[1.4px]   bg-gradient-to-b from-zinc-900 to-zinc-900">
        <img
          onClick={() => window.location.reload()}
          src={docs_logo}
          alt="docs logo"
          className="scale-125 mb-12 mt-4 cursor-pointer"
        />

        <div className="NAV-BUTTONS flex flex-col space-y-9 ">
        <Link to="/" className="flex items-center justify-center flex-col">
          <div
            className={`flex justify-center rounded-lg items-center flex-col text-neutral-200 w-full h-16 cursor-pointer px-2 hover:bg-zinc-50/35 transition-colors`}
          >
            
            <GoHomeFill className="w-6 h-6" />

            <p className={`tracking-tight text-nowrap text-sm`}>Home</p>
          </div>
            </Link>

            <Link to="/Create-New-Doc" className="flex items-center justify-center flex-col">
          <div
            className={`flex justify-center rounded-lg items-center flex-col text-neutral-200 w-full h-16 cursor-pointer px-2 hover:bg-zinc-50/35 transition-colors`}
          >

            <GoPlusCircle className="w-6 h-6 " />

            <p className={`tracking-tight text-nowrap text-sm`}>Write</p>
          </div>
            </Link>

            <Link to="/Trash" className="flex items-center justify-center flex-col">
          <div
            className={`flex justify-center rounded-lg items-center flex-col text-neutral-200 w-full h-16 cursor-pointer px-2 hover:bg-zinc-50/35 transition-colors`}
          >
              <FiTrash className="w-6 h-6" />

              <p className={`tracking-tight text-nowrap text-sm`}>Trash</p>
          </div>
            </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
