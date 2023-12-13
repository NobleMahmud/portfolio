import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [allProjects, setAllProjects] = useState([]);

   useEffect(()=>{
    fetch('projects.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setAllProjects(data)
    })
   },[])
   console.log(allProjects);
   const name = useParams();
   console.log(name);
    return (
        <div>
            <h3>project page of: {name?.name}</h3>
        </div>
    );
};

export default ProjectDetails;