import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div id='projects' className='mx-auto'>
            
<div className="relative overflow-hidden">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative flex flex-col md:flex-col lg:flex-row px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="font px-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Check Out My Projects</h1>
          <p className="mt-4 text-xl p-4 text-gray-500">Here are some of my recent projects. Click on a project to know more!</p>
        </div>
        <div className=' grid grid-cols-1 mt-8 md:mt-4 lg:mt-0 md:grid-cols-2 gap-6'>
         <ProjectCard image="https://i.ibb.co/PwxnxGh/home-Banner-I.png" name="Innovation X" detail="Innovation X is a Tech Solution website offering multiple amenities to the users with various features "></ProjectCard>
         <ProjectCard image="https://i.ibb.co/RgD85xd/homeC.png" name="Career-Hub" detail="Career-Hub is a job posting and applying platform with multiple features"></ProjectCard>
         <ProjectCard image="https://i.ibb.co/xJ7NNJ5/homeH.png" name="Hungry Hall" detail="Hungry Hall is a meal management website offering both user and admin side control along with integrated payment technology"></ProjectCard>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Projects;