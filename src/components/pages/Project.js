import React from 'react';
import AMDB from '../images/AMDB.png';
import NoteTaker from '../images/NoteTaker.PNG';
import ReadMe from '../images/ReadMe.PNG';
import TaleSpinner from '../images/TaleSpinner.PNG';


export default function Project() {
  
  const projectList = [
    {
      name: "Actor Movie Database",
      description: "A friendly and easy to use website to find information on movies and actors.",
      webpage: "https://vi3t4lov3.github.io/GRP12-The-Movie-Finder/",
      repo: "https://github.com/vi3t4lov3/GRP12-The-Movie-Finder",
      preview: AMDB
    },
    {
      name: "Note Taker",
      description: "A note taking application to add, edit, and delete notes.",
      webpage: "https://damp-retreat-85246.herokuapp.com/ ",
      repo: "https://github.com/coreylevine2000/hw-11-Note-Taker",
      preview: NoteTaker
    },
    {
      name: "ReadMe Generator",
      description: "A time saving application which generates ReadMes after a few prompted questions.",
      webpage: "https://github.com/coreylevine2000/hw-9-ReadMe-Generator",
      repo: "https://github.com/coreylevine2000/hw-9-ReadMe-Generator",
      preview: ReadMe
    },
    {
      name: "Talespinner",
      description: "A story telling game, fun for your family and friends!",
      webpage: "talespinner.herokuapp.com/",
      repo: "https://github.com/Abrock3/Talespinner",
      preview: TaleSpinner
    },
  ]

  const ProjectItem = ({list}) => (
    <ul>
      {list.map(item =>
        <li>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <a
              target="_blank"
              href={item.webpage}
              >Webpage</a>
            <a
              target="_blank"
              href={item.repo}
              >Git Repo</a>
            <a target="_blank" href={item.preview}
              >Preview</a>
          </li>
      )}
    </ul>  
  );

  return (
    <div>
      <h1>Current and Previous projects</h1>
      <p>
      Enjoy
      </p>
      <ProjectItem list={projectList}/>
    </div>
  );
}
