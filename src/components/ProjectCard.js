import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = React.memo(({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = useCallback(() => {
    setIsExpanded(prevState => !prevState);
  }, []);

  return (
    <div className="flex justify-center">
      <div id={project.id} className="flex text-left flex-col justify-between h-96 w-72 shadow-lg hover:scale-105 transition-transform mx-auto my-10 rounded-3xl border p-5 bg-[#141515a4]">
        <img className="rounded-3xl object-cover shadow-lg w-full h-40 transition-transform hover:scale-110" src={project.image} alt={project.title} />
        <div id="text" className="text-[#807e81e0] mx-2 my-4 flex-grow overflow-hidden">
          <h3 className="px-2 bg-[#00000041] text-white rounded-lg p-1 text-sm">{project.title}</h3>
          <p className={`my-3 text-sm px-1 leading-4`}>{project.description}</p>
          <button className="text-blue-500 text-sm" onClick={toggleExpansion}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <Link className="bg-black inline mr-auto text-white text-sm ml-2 px-6 py-1 rounded-lg" to={project.link}>Open</Link>
      </div>
    </div>
  );
});

export default ProjectCard;
