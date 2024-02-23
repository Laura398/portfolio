import React from 'react';
import './Projects.scss';
import { Project } from '../../../interfaces/types';
import OneProject from './OneProject';
import { PROJECTS } from '../../../interfaces/constants';

export default function Projects() {
    const projects = PROJECTS;
    
    const [alignment, setAlignment] = React.useState<number>(projects.sort((a, b) => a.id - b.id)[0].id);
    const [project, setProject] = React.useState<Project>(projects.sort((a, b) => a.id - b.id)[0]);

    const changeSelect = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;        
        const id = target.classList[1].split('-')[2];
        setAlignment(parseInt(id));
        setProject(projects.find((character) => character.id === parseInt(id)) as any);
        [...document.getElementsByClassName('projects-icons')].forEach((element: Element) => {
            element.classList.remove('selected');
        });
        target.classList.add('selected');
    };

    return (
        <section id="projects">
            <div id="projects-list-phone">
                {projects.map((project, index) => (
                    <div className="project-phone" key={index} onClick={changeSelect}>
                        <img
                            key={index}
                            src={project.icon}
                            alt={project.name}
                            loading="lazy"
                            className={`projects-icons toggle-img-${project.id} ${project.id === alignment ? "selected" : ""}`}
                            style={{border: "1px solid white"}}
                        />
                    </div>
                ))}
            </div>

            <OneProject project={project} />
        </section>
    );
}