import React from "react";

const Slider = () => {
  return (
    <div className="slider overflow-x-scroll flex space-x-4 p-4 bg-slate-900 mt-10">
      <div className="flex-shrink-0 w-[800px] bg-slate-900 rouded-md shadow-md p-4">
        <h3 className="text-xl font-semibold">User name</h3>
        <p className="mt-2">User age</p>
      </div>
    </div>
  );
};
export default Slider;
