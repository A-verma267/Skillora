import CourseBox from "../component/CourseBox";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import project from "../projectData.json";

const Dashboard = () => {
  const { wishlist , completed , pending} = useContext(UserContext);
  
  return (
    <>
      {/* Progress */}
      <div className="flex flex-col gap-4 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 max-w-screen-2xl mx-auto w-full">
        <p className="text-sm text-gray-400">progress</p>

        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:px-4">
          {/* Stats card */}
          <div className="flex w-full flex-col gap-3 rounded-2xl bg-brown-container px-4 py-5 text-sm text-white sm:gap-4 sm:text-base lg:w-[40%]">
            <div>Topics Covered - {completed.length}</div>
            <div>Completed Project - {completed.length}</div>
            <div>Pending project - {pending.length}</div>
            <div>Certificate - tags</div>
          </div>

          {/* Chart */}
          <div className="right flex w-full items-center justify-center text-white lg:w-[55%]">
            Piechart
          </div>
        </div>

        {/* Pending */}
        <p className="mt-10 text-sm text-gray-400 sm:mt-12">
          pending - {pending.length}
        </p>
        <div className="mt-3 grid grid-cols-1 gap-4 rounded-lg text-white sm:grid-cols-2 lg:grid-cols-3">
          {pending.map((index) => (
            <NavLink key={index} to={`/project/${index}`} className="w-full">
              <CourseBox name={`${project[index].name}`} />
            </NavLink>
          ))}
        </div>

        {/* Completed */}
        <p className="mt-10 text-sm text-gray-400 sm:mt-12">completed - {completed.length}</p>
        <div className="mt-3 grid grid-cols-1 gap-4 rounded-lg text-white sm:grid-cols-2 lg:grid-cols-3">
          {completed.map((index) => (
            <NavLink key={index} to={`/project/${index}`} className="w-full">
              <CourseBox name={`${project[index].name}`} />
            </NavLink>
          ))}
        </div>

        {/* Wishlist */}
        <p className="mt-10 text-sm text-gray-400 sm:mt-12">wishlist - {wishlist.length}</p>
        <div className="mt-3 grid grid-cols-1 gap-4 rounded-lg text-white sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((index) => (
            <NavLink key={index} to={`/project/${index}`} className="w-full">
              <CourseBox name={`${project[index].name}`} />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;