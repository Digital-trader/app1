import Link from "next/link";
import React from "react";
import { SiYamahamotorcorporation } from "react-icons/si";

const Header = () => {
  return (
    <div className="flex relative h-full justify-between items-center  bg-cyan-600 p-4">
      <nav className="flex justify-between items-center gap-40">
        <Link href={"/"} className="flex justify-between gap-1 items-center ">
          <p>PROX4</p>
          <SiYamahamotorcorporation />
          <p>PROX4</p>
        </Link>
        <ul className="flex justify-between items-center gap-3">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/articles"}>Articles</Link>
          <Link href={"/admin_dashboard"}>Admin Dashboard</Link>
        </ul>
      </nav>
      <div className="flex justify-between items-center gap-2">
        <Link
          href={"/login"}
          className="border-slate-100 px-2 border-2 bg-blue-500 rounded-md hover:text-white hover:bg-blue-900"
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className="border-slate-100 px-2  bg-blue-500 rounded-md hover:text-white hover:bg-blue-900"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
