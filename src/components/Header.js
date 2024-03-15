import React from "react";
import { Link } from "react-router-dom";

function Header() {
  /** */
  return (
    <header className="bg-blue-600 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-gray-100">School</span>
            <span className="text-gray-300">ForALL</span>
          </h1>
        </Link>
        <ul className="flex gap-4 text-yellow-50">
          <Link to={"/courses"}>
            <li className="">Courses</li>
          </Link>
          <Link to={"/sign-in"}>
            <li className="">SignIn</li>
          </Link>
          <Link to={"/sign-up"}>
            <li className="">SignUp</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
