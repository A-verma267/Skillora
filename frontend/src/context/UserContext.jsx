import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) =>{
    const [token , setToken] = useState(false);
    const [plan , setPlan] = useState("Free");
    const [projects , setProjects] = useState(()=>{
        try {
            return JSON.parse(localStorage.getItem("projects")) || [];
        } catch {
            return [];
        }
    });
    const [wishlist , setWishlist] = useState(()=>{
        try {
            return JSON.parse(localStorage.getItem("wishlist")) || [];
        } catch {
            return [];
        }
    })
    const [done , setDone] = useState(()=>{
        try {
            return JSON.parse(localStorage.getItem("done")) || {};
        } catch (error) {
            return {};
        }
    })
    const [projectProgress , setProjectProgress] = useState(()=>{
        try {
            return JSON.parse(localStorage.getItem("progProject")) || {};
        } catch  {
            return {}
        }
    })
    
  const completed = Object.entries(projectProgress).filter(([id , progress]) => progress == 100).map(([id]) => Number(id));
  const pending = Object.entries(projectProgress).filter(([id , progress]) => progress != 100).map(([id]) => Number(id));
//   localStorage.removeItem("projects");
//   localStorage.removeItem("wishlist");
//   localStorage.removeItem("progProject");
//   localStorage.removeItem("done");
  localStorage.removeItem("token");
    useEffect(()=>{
        localStorage.setItem("done", JSON.stringify(done));
    },[done]);
    useEffect(()=>{
        localStorage.setItem("projects", JSON.stringify(projects));
    },[projects]);
    useEffect(()=>{
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    },[wishlist])
    useEffect(()=>{
        localStorage.setItem("progProject" , JSON.stringify(projectProgress));
    },[projectProgress])

    console.log(done);
    console.log(projects);
    console.log(wishlist);
    console.log(projectProgress);

    const toggleDone = (projectId , key) =>{
        setDone((prev) =>{
            const current = prev[projectId] || [];
            return {
                ...prev , [projectId] : current.includes(key) ? current.filter((k)=> k != key) : [...current , key],
            }
        })
    }
    const toggleWishlist = (projectId) =>{
        setWishlist((prev) => prev.includes(projectId) ? prev.filter((id) => id != projectId) : [...prev , projectId])
    }
    const toggleProjProgress = (projectId , progress) =>{
        console.trace("toggleProjProgress called with:", projectId, progress);
        setProjectProgress((prev) => {
            if(JSON.stringify(prev[projectId]) == JSON.stringify(progress) ) return prev;
            return {...prev , [projectId] : progress};
        })
    }
    useEffect(()=>{
      completed , pending
    },[toggleProjProgress])
    const value = {token , setToken , projects , setProjects , done , setDone , toggleDone , wishlist , setWishlist , toggleWishlist , projectProgress , setProjectProgress , toggleProjProgress , completed , pending , plan , setPlan}
    
    return (
        
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;