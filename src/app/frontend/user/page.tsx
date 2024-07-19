import ChartDemo from "@/components/components/ChartDemo";
import ListLeave from "@/components/components/ListLeave";
import { Separator } from "@/components/components/ui/separator";
import { bal } from "@/constants/data";
import { redirect } from "next/navigation";
import React from "react";

const Users = () => {
  return (
    <section className=" flex flex-col w-full relative h-screen pt-3">
      <h1 className="text-4xl font-bold ">Dashboard</h1>
      <Separator className="mb-2" />
      <div className="relative flex  h-[15rem] items-center  justify-around  gap-5 w-full overflow-x-scroll  px-4 py-4 no-scrollbar ">
        {/* balaced below  header part */}
        {bal.map((itmes) => (
          <div
            className="relative min-w-[10rem]  flex flex-col  justify-center  sm:p-4 transition-all duration-150  border rounded-xl cursor-pointer hover:shadow-lg hover:border-black"
            onClick={()=> redirect("/user/leavesrequest")}
          >
            <p className=" font-medium ">{itmes.leaveType}</p>
            <h1 className="text-2xl font-bold">
              {itmes.used} /{" "}
              <span className="font-semibold">{itmes.total}</span>{" "}
              <span>days</span>
            </h1>
            <p className="text-gray-500 text-sm">{itmes.text}</p>
           
          </div>
        ))}
        <div className="relative min-w-[12rem]  flex flex-col items-center justify-center  sm:p-4 border rounded-xl">
          {/* total balaced  */}
          <p className=" font-medium ">Total Balance</p>
          <h1 className="text-2xl font-bold">
            45 <span>days</span>
          </h1>
          <p className="text-gray-500 text-sm">forward to next year</p> 
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  border  w-full h-full">

        <div className="flex flex-col gap-10 min-w-[24rem]  w-full md:w-fit px-4 py-8 shadow-lg">
          {/* Charts of status */}
          <div className="w-full relative">
            <h1 className="text-4xl font-bold ">Status of Leaves</h1>
            <p>This is the status of last 50 days</p>
          </div>
          <ChartDemo className="md:w-[30rem] md:h-[25rem] " />
        </div>
        <div className="flex-1 flex gap-5 flex-col px-4  py-8">
          {/* recent applied */}
          <div>

          <h1 className="text-4xl font-bold ">Recent Applied </h1>
          <p>This is the list of recent applied with in 10 days</p>
          </div>
          <ListLeave className="max-w-xl"/>
        </div>
      </div>
    </section>
  );
};

export default Users;
