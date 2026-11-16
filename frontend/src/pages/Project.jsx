import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotesIcon from "@mui/icons-material/Notes";
import AssignmentIcon from "@mui/icons-material/Assignment";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import FlagIcon from "@mui/icons-material/Flag";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import project from "../projectData.json";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { UserContext } from "../context/UserContext";
import ProgressBar from "../component/ProgressBar";
import ClearIcon from '@mui/icons-material/Clear';

const Project = () => {
  const navigate = useNavigate();
  const { projects, setProjects , done , toggleDone , wishlist , toggleWishlist ,pending , toggleProjProgress} = useContext(UserContext);
  const { projectId } = useParams();
  const pres = projects.includes(projectId);
  const projectName = project[projectId];
  const [expand, setExpand] = useState(null);
  const topics = projectName.topics;
  const [flag, setFlag] = useState(null);
  const [addToDashBoard , setAddtoDashBoard] = useState(false);
  const doneKeys = done[projectId] || [];
  const getKey = (topic , sub , t , s) => `${topic.id ?? t}-${sub.id ?? s}`;
  const totalSubtopics = topics.reduce((n,t) =>  n + t.subTopic.length, 0);
  const progress = totalSubtopics ? Math.ceil((doneKeys.length / totalSubtopics) * 100) : 0;
  const [canNotBeAdded , setCanNotBeAdded] = useState(false);

  console.log(projects);
  useEffect(()=>{
    if(pres){
      return toggleProjProgress(projectId , progress);
    }
  },[progress])
  
  return (
    <>
      <div className="w-full max-w-300 mx-auto min-h-full my-6 sm:my-8 lg:my-12 px-4 sm:px-6 lg:px-8">
        <div className="header my-6 sm:my-10">
          <div className="flex items-center justify-between gap-3">
            <p className="heading text-lg sm:text-xl lg:text-2xl font-bold tracking-wide py-2 wrap-break-word min-w-0">
              {projectName.name}
            </p>
            <p className="bg-[#321a5898] py-2 px-2 sm:px-2 mt-0 sm:mt-2 cursor-pointer rounded-2xl hover:scale-105 shrink-0">
              <button onClick={()=> toggleWishlist(projectId)}>{wishlist.includes(projectId) ? <BookmarkIcon color="primary" className="w-full h-full" />  : <BookmarkIcon className="w-full h-full" />}</button>
              
            </p>
          </div>
          <p className="text-sm sm:text-base">{projectName.desc}</p>
          <p className="text-sm sm:text-base">
            {projectName.online} online - {projectName.learner} learner
          </p>
          <div className="mt-4">
            <ProgressBar progress = {progress}/>
            
          </div>
        </div>
        {!pres && <>   
        <button onClick={()=>{
          pending.length <2 ? setAddtoDashBoard(true) : setCanNotBeAdded(true);
        }} className="w-full sm:w-auto justify-center px-3 py-2.75 flex items-center gap-2 border border-gray-600 rounded-2xl cursor-pointer scale-100 hover:scale-102 duration-300 bg-[#251046]">UnLock the Project 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="11" width="16" height="10" rx="2"></rect>
          <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
        </svg>
      </button>
        </>}
        {pres && 
        <div className="content relative py-6 sm:py-10">
          <p className="relative heading text-lg sm:text-xl font-bold tracking-wide">Topic</p>
          <div className=" relative listOfTask py-3 flex flex-col gap-3 sm:gap-4 overflow-hidden">
          
            {topics.map((topic, index) => {
              const topicDone = topic.subTopic.filter((sub , sIndex) => doneKeys.includes(getKey(topic , sub , index , sIndex))).length ;

              return (
              <>
                  <div key={topic.id ?? index}>
                    <div
                      className="contheading flex items-center justify-between gap-2 bg-[#321a59b9] px-3 py-2 rounded-xl cursor-pointer text-sm sm:text-base"
                      onClick={() => setExpand(expand === index ? null : index)}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <button className="shrink-0">
                          {expand === index ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}
                        </button>
                        <p className="wrap-break-word min-w-0">{topic.topic}</p>
                      </div>
                      <div className="shrink-0">{topicDone}/{topic.subTopic.length}</div>
                    </div>
                    {expand === index &&
                      topic.subTopic.map((subtopic, sIndex) => {
                        const key = getKey(topic , subtopic , index , sIndex);
                        return (
                        <div key={key} className="contfield flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-base">
                          <div className="flex items-center gap-3 min-w-0">
                            <input onChange={()=> toggleDone(projectId , key)} type="checkBox" className="shrink-0" checked={doneKeys.includes(key) }/>
                            <p className="wrap-break-word min-w-0">{subtopic.name}</p>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-2 pl-7 sm:pl-0 shrink-0">
                            <p
                              className="cursor-pointer "
                              title="Notes"
                              onClick={() => navigate(`./${subtopic.notes}`)}
                            >
                              <NotesIcon />
                            </p>
                            <p
                              className="cursor-pointer "
                              title="Practice"
                              onClick={() => navigate(`./${subtopic.practice}`)}
                            >
                              <AssignmentIcon />
                            </p>
                            <p
                              className="cursor-pointer"
                              title="Revision"
                              onClick={() =>
                                setFlag(flag === index ? null : index)
                              }
                            >
                              {flag === index ? (
                                <FlagIcon color="primary" />
                              ) : (
                                <FlagIcon />
                              )}{" "}
                            </p>
                          </div>
                        </div>
                      ) } )}
                  </div>
                  
              </>
            ) })
          }
          </div> 
        </div> }
      </div>

      {addToDashBoard && 
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/50 p-4">
        <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 h-auto min-h-1/3 bg-red-100 rounded-xl px-5 py-6 sm:px-7 sm:py-10 text-black flex flex-col gap-5 sm:gap-7">
          <p className="font-bold text-sm sm:text-base">Do you want to add this project to your dashboard ? </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button onClick={()=>{
              setProjects(prev => [...prev , projectId]);
              toggleProjProgress(projectId , progress) ;
              navigate("/dashboard");
            }} className="border border-black px-4 py-2 sm:py-1 rounded-lg cursor-pointer ">✔️ Eager to learn..</button><button onClick={()=> setAddtoDashBoard(false)} className="border border-black px-4 py-2 sm:py-1 rounded-lg cursor-pointer ">❌ Still exporling..</button>
          </div>
        </div>
      </div>}
      {canNotBeAdded && 
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/50 p-4">
      
        <div className="w-full relative max-w-md sm:w-2/3 lg:w-1/3 h-auto min-h-1/3 bg-red-100 rounded-xl px-5 py-6 sm:px-7 sm:py-10 text-black flex flex-col gap-5 sm:gap-7">
        <div onClick={()=> setCanNotBeAdded(false)} className="absolute top-1.5 right-3 cursor-pointer"><ClearIcon fontSize="small" /></div>
          <p className="font-bold text-sm sm:text-base">You still have two ongoing Projects </p>
          <p>To start new projects first complete pending Projects</p>
        </div>
      </div>}
    </>
  );
};

export default Project;