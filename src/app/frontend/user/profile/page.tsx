import { Separator } from "@/components/components/ui/separator";
import { personal } from "@/constants/data";
import React from "react";

const Profile = () => {
  return (
    <section className="mt-4 flex flex-col w-full relative px-2">
      <h1 className="text-4xl font-bold ">Profile</h1>
      <Separator className="mb-2" />
      <div className="flex flex-col w-full gap-10  rounded-sm border">
        {/* basic info */}
        <div className="  max-w-sm">
          <h2 className="text-2xl font-semibold text-black bg-blue-300 ">
            Personal Info
          </h2>
          <div className="flex  flex-col gap-1 justify-center">
            {/* Details */}
            <div className="grid grid-cols-2 ">
              <h1 className="font-semibold">Name</h1>
              <p>{personal.name}</p>
            </div>
            <div className="grid grid-cols-2">
              <h1 className="font-semibold">Email</h1>
              <p>{personal.email}</p>
            </div>
            <div className="grid grid-cols-2">
              <h1 className="font-semibold">Phone No</h1>
              <p>{personal.phone}</p>
            </div>
            <div className="grid grid-cols-2">
              <h1 className="font-semibold">Adress</h1>
              <p>{personal.address}</p>
            </div>
            <div className="grid grid-cols-2">
              <h1 className="font-semibold">Date of birth</h1>
              <p>{personal.dob}</p>
            </div>
            <div className="grid grid-cols-2">
              <h1 className="font-semibold">Date of Joining</h1>
              <p>{personal.doj}</p>
            </div>
            <div className="grid grid-cols-2">
              <h1 className="font-semibold">Department</h1>
              <p>{personal.department}</p>
            </div>
          </div>
        </div>
        {/* Education info */}
      </div>
    </section>
  );
};

export default Profile;

// optimize my code?
