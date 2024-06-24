import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="text-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">BEM</span>
            <span className="text-slate-700">estates</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-4 items-center">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:underline tracking-wider">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover:underline tracking-wider">
              About
            </li>
          </Link>
          <Link to={"/signin"}>
            <li className=" text-slate-700 hover:underline tracking-wider">
              SignIn
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
