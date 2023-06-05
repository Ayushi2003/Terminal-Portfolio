import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Replica",
    desc: "Replica is a simulator of iOS 14, modeled after the iPhone 12 Pro Max, offering users a realistic iOS experience with functional apps.",
    url: "https://ayushi2003.github.io/iPhone-Simulator-Replica/",
  },
  {
    id: 2,
    title: "Planetary Pounds",
    desc: "PlanetaryPounds is used for the calculation of weight on different planets. It has a wide range of applications in various scientific domains, including astronomy, physics, space travel, and education.",
    url: "https://ayushi2003.github.io/PlanetaryPounds/",
  },
  {
    id: 3,
    title: "Tasty Treat",
    desc: "The Tasty Treat is a modern food ordering system with features such as add-to-cart, product filtering, and checkout pages, along with a minimalist UI.",
    url: "https://tasty-treat-ayushi2003.vercel.app/home",
  },
  {
    id: 4,
    title: "VS Code Portfolio",
    desc: "This is my personal portfolio which is designed with the theme of VS Code, utilizing Next.js and CSS.",
    url: "https://astro-paper.pages.dev/",
  },
  {
    id: 5,
    title: "ToDo-List",
    desc: "This is a simple yet useful todo-list application that allows users to manage their tasks and keep track of their progress.",
    url: "https://to-do-list-nine-omega.vercel.app/",
  },
];

export default Projects;
