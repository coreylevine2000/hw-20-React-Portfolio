import React from 'react';
import AMDB from '../images/AMDB.png';


export default function Project() {
  
  const projectList = [
    {
      name: "Actor Movie Database",
      webpage: "https://vi3t4lov3.github.io/GRP12-The-Movie-Finder/",
      repo: "https://github.com/vi3t4lov3/GRP12-The-Movie-Finder",
      screenshot: AMDB
    },
  ]

  const ProjectItem = ({list}) => (
    <ul className="repolist">
      {list.map(item =>
        <li>
            <p>{item.name}</p>
            <a
              target="_blank"
              href={item.webpage}
              >Webpage</a>
            <a
              target="_blank"
              href={item.repo}
              >Git Repo</a>
            <a target="_blank" href={item.screenshot}
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
