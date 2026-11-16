import React from "react";


const CourseBox = ({name}) => {
  return (
    <>
      <div className="px-4 py-2 bg-[#2510469e] flex flex-col">
        <h1 className="text-xl font-bold tracking-wide">{name}</h1>
        <p className="text-xs leading-2">Skillora</p>
        <div className="self-end flex gap-3">
            
            <span className="self-end bg-[#321a5898] py-2 px-4 mt-4 cursor-pointer rounded-2xl hover:scale-105">
            -&gt;
            </span>

        </div>
      </div>
    </>
  );
};

export default CourseBox;
