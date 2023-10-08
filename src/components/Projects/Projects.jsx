import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";
import iosSolutionImage from "../../images/iosSolutionProject.png"
import TailorAppUser from "../../images/tailorProject.png"
import openInApp from "../../images/open-in-app.png";
import seclanceProject from "../../images/seclanceProject.png";
import webLancer from "../../images/webLancer.png";
import toDoList from "../../images/to-do-list.png";
import teslaClone from "../../images/teslaClone.png";
import Vulnbounty from "../../images/vulnbounty.png";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" style={{
            height:"100%",
            width:"100%"
          }} />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      url: "https://iossolution.vercel.app/",
      projectImage: iosSolutionImage,
      projectTitle: "IosSolution",
      description:
        "A single page application built to display info about a repairing center. ",
      technologies: "Next JS, Tailwind Css Javascript",
      isAdmin: false,
      id: 1,
    },
    {
      url: "https://seclance.vercel.app/",
      projectImage: seclanceProject,
      projectTitle: "Seclance",
      description:
        "A single page application built to display info about a repairing center.",
      technologies: "Next JS, Tailwind Css Javascript",
      isAdmin: false,
      id: 2,
    },
    {
      url: "https://tailor-user-app.netlify.app/",
      projectImage: TailorAppUser,
      projectTitle: "Tailor App User",
      description:
        "A multi page application built for ordering products from tailors.",
      technologies: "Next JS, Tailwind Css Javascript Typescript",
      isAdmin: false,
      id: 3,
    },
    {
      url: "https://teslaclone-xi.vercel.app/",
      projectImage: teslaClone,
      projectTitle: "TeslaClone",
      description:
        "A tesla clone static site to display the information of tesla cars.",
      technologies: "Firebase ReactJs MaterialUI",
      isAdmin: false,
      id: 4,
    },
    {
      url: "https://to-do-list-a64ea.web.app/",
      projectImage: toDoList,
      projectTitle: "To Do List",
      description:
        "A ToDo List application built to add our daily life todos saved over the database.",
      technologies: "Firebase ReactJs MaterialUI",
      isAdmin: false,
      id: 5,
    },
    {
      url: "https://weblancer.vercel.app/",
      projectImage: webLancer,
      projectTitle: "WebLancer",
      description:
        "A platform to demonstrate different freelancers. Its a static site.",
      technologies: "NextJs TailwindCSS",
      isAdmin: false,
      id: 6,
    },
    {
      url: "https://open-in-app-tau.vercel.app/",
      projectImage: openInApp,
      projectTitle: "Dashboard",
      description:
        "A google authenticated dashboard integrated with live apis and charts to display data.",
      technologies: "NextJs TailwindCSS chartJs APIs NEXT Auth",
      isAdmin: false,
      id: 7,
    },
    {
      url: "https://vulbounty-latest.vercel.app/",
      projectImage: Vulnbounty,
      projectTitle: "Vulnbounty (Worked under Seclance)",
      description:
        "A bounty application having authentication and dashboard with payment integration.",
      technologies: "React Js, Tailwind CSS, Axios",
      isAdmin: false,
      id: 7,
    },
  ];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item.id}
            key={item.id}
            url={item.url}
            projectImage={item.projectImage}
            projectTitle={item.projectTitle}
            description={item.description}
            technologies={item.technologies}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
