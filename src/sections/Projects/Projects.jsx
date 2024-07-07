import React from "react";
import styles from "./ProjectsStyles.module.css";
import RufusMusic from "../../assets/rufusMusic.png";
import ProjectCard from "../../common/ProjectCard";
import GamePulse from "../../assets/GamePulse.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projectos</h1>
      <div className={styles.projectsContainer}></div>
      <ProjectCard
      //aca se cambia todo sobre los proyectos
        src={RufusMusic}
        link={
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
        h3="RufusMusic" 
        p='Streaming de musica con react.'
      />
            <ProjectCard
      //aca se cambia todo sobre los proyectos
        src={GamePulser}
        link={
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
        h3="GamePulse" 
        p='Informacion sobre tus videojuegos favoritos.'
      />
    </section>
  );
}

export default Projects;
