import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div id='projects' className='mx-auto'>
            
<div className="relative overflow-hidden bg-white">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative flex flex-col md:flex-col lg:flex-row px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Checkout my projects</h1>
          <p className="mt-4 text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, id expedita odio enim totam reprehenderit quis eius animi doloremque eveniet nostrum magnam ipsam consequatur maiores molestias in. Rem, dignissimos soluta!</p>
        </div>
        <div className=' grid grid-cols-1 mt-8 md:mt-4 lg:mt-0 md:grid-cols-2 gap-6'>
         <ProjectCard name="Innovation X" detail="Innovation X is project 1 "></ProjectCard>
         <ProjectCard name="Career-Hub" detail="Innovation X is project 2"></ProjectCard>
         <ProjectCard name="Hungry Hall" detail="Innovation X is project 3"></ProjectCard>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Projects;