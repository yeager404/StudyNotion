import React from "react";
import Counter from "../../common/Counter";

const Stats = [
  { count: 5, char:"K", label: "Active Students" },
  { count: 10, char:"K", label: "Mentors" },
  { count: 200, char:"K", label: "Courses" },
  { count: 50, char:"K", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className="bg-richblack-700">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col items-center py-10" key={index}>
                <div>
                  <h1 className="text-[30px] font-bold text-richblack-5 flex">
                    <Counter endValue={data.count}/>
                    {data.char}
                  </h1>
                </div>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;
