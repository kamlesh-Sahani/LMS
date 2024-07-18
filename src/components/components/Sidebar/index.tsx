"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { LuHome } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BiCloset, BiLogOut } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Separator } from "../ui/separator";

const Sidebar = () => {
  const [close , setClose] = useState<Boolean>(false)
  const path = usePathname();
  return (
    <aside className={`relative pt-2 ${close?'hidden':"flex"} sm:flex flex-col border border-black h-screen min-w-[18rem]  `}>
      {/* Header  */}
      <div className="block sm:hidden">
        <IoMdClose size={32} className="absolute right-1" onClick={()=>setClose(true)}/>
      </div>
      <section className="h-[20rem] flex flex-col justify-center gap-2 items-center">
        {/* Profile pic and heading */}
        <div className="rounded-full w-[200px] h-[200px]">
        <Image
          src={"/img.jpg"}
          alt="profile"
          width={200}
          height={200}
          className="rounded-full w-full h-full object-cover border-black  "
        />
        </div>
        
        <div className="  rounded-3xl  flex justify-center items-center flex-col">
          <h1 className="text-3xl md:text-2xl font-semibold">Kamlesh Sahani</h1>
          <p className="text-gray-600 text-xl md:text-base font-medium">
            ID 123-456-789
          </p>
        </div>
      </section>
      <Separator/>

      {/* Nav links */}
      <section className=" flex flex-col p-5 gap-5  bg-white flex-1 ">
        {/* List of Link */}
        <Link
          href={"/user"}
          className={`${path === "/user" ? "bg-blue-500 text-white" : null}`}
        >
          <LuHome size={24} />
          Dashboard
        </Link>
        <Link
          href={"/user/profile"}
          className={`${
            path === "/user/profile" ? "text-white bg-blue-500" : null
          }`}
        >
          <CgProfile size={24} />
          Profile
        </Link>
        <Link
          href={"/user/leavesrequest"}
          className={`${
            path === "/user/leavesrequest" ? "text-white bg-blue-500" : null
          }`}
        >
          <FaPersonCirclePlus size={24} />
          Leave Request
        </Link>
        <Link
          href={"/user/leaveshistory"}
          className={`${
            path === "/user/leaveshistory" ? "bg-blue-500 text-white" : null
          } `}
        >
          <FaHistory size={24} />
          Leave History
        </Link>
        <Link href={"/user/setting"} className={` ${
            path === "/user/setting" ? "bg-blue-500 text-white" : null
          }  `}>
        <IoSettingsOutline size={24} />
          Setting
        </Link>
        <Link href={"/login"} className={`   `}>
          <BiLogOut size={24} />
          Logout
        </Link>
      </section>
    </aside>
  );
};

export default Sidebar;
