import Plans from "@/components/createdComponents/plans/Plans";
import React from "react";

function page() {
  return (
    <div className="p-16 flex flex-col gap-8 md:gap-16 justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-black">Select a plan !</h1>
      <Plans />
    </div>
  );
}

export default page;
