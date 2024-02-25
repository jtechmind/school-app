import React from "react";
import { Link } from "react-router-dom";

function Header() {
  /** */
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">School</span>
            <span className="text-slate-700">ForALL</span>
          </h1>
        </Link>
        <ul className="flex gap-4">
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
