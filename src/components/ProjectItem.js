import React from "react";
let count = 0;

function ProjectItem({ name, about, technologies }) {
 
const counter = () => {
  return count++}
  
const tech = technologies.map((el)=>{
  return (
    
    <span key={counter()}>{el}</span>
    
  )
})

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
