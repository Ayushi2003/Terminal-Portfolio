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

  /* ===== check arg is valid (Updated to allow 6 projects) ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss:
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
    title: "Terminal Based Portfolio",
    desc: "Engineered an interactive, terminal-like web interface utilizing modern client-side web technologies (Next.js, TypeScript, React.js, Tailwind CSS) complete with advanced command matching and modular styling architecture.",
    url: "https://github.com/Ayushi2003",
  },
  {
    id: 2,
    title: "Replica",
    desc: "Architected an iOS 14 simulator web application modeled after the iPhone 12 Pro Max, heavily relying on HTML, CSS, JavaScript, and jQuery to replicate real-time application functionality and complex gesture recognition.",
    url: "https://ayushi2003.github.io/iPhone-Simulator-Replica/",
  },
  {
    id: 3,
    title: "Planetary Pounds",
    desc: "Built a client-facing utility tool utilizing client-side technologies (JavaScript, HTML, CSS) to calculate dynamic gravitational mass weight data adjustments across the Solar System.",
    url: "https://ayushi2003.github.io/PlanetaryPounds/",
  },
  {
    id: 4,
    title: "Tasty Treat",
    desc: "The Tasty Treat is a modern food ordering system with features such as add-to-cart, product filtering, and checkout pages, along with a minimalist UI.",
    url: "https://tasty-treat-ayushi2003.vercel.app/home",
  },
  {
    id: 5,
    title: "VS Code Portfolio",
    desc: "This is my personal portfolio which is designed with the theme of VS Code, utilizing Next.js and CSS.",
    url: "https://astro-paper.pages.dev/",
  },
  {
    id: 6,
    title: "ToDo-List",
    desc: "This is a simple yet useful todo-list application that allows users to manage their tasks and keep track of their progress.",
    url: "https://to-do-list-nine-omega.vercel.app/",
  },
];

export default Projects;
