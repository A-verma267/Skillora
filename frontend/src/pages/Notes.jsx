import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import projects from "../projectData.json";

const Notes = () => {
    // const {projects} = useContext(UserContext);
    const {projectId , notesId} = useParams();
    const ids = notesId.split("-");
    const topicId = ids[1];
    const subTopicId = ids[3];
    const content = projects[projectId].topics[topicId-1].subTopic[subTopicId];
    console.log(content);

    
  return (
    <>
        <div className='px-4 py-8'>
            <div className='text-2xl font-semibold pb-10 underline underline-offset-6'>{content.name} ?</div>
            <p className='text-md tracking-wide'>{content.notes}</p>

        </div>
    </>
  )
}

export default Notes