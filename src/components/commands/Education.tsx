import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => (
  <Wrapper data-testid="education">
    {/* CHANGED: Exact matching text phrasing from your request */}
    <EduIntro>Highest Academic qualification and relevant coursework overview.</EduIntro>
    {eduBg.map(({ title, desc }) => (
      <EduList key={title}>
        <div className="title" style={{ fontWeight: "bold", color: "#61afef", marginBottom: "6px" }}>
          {title}
        </div>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {desc.map((line, index) => (
            <li key={index} style={{ color: "#abb2bf", marginBottom: "4px" }}>
              {line}
            </li>
          ))}
        </ul>
      </EduList>
    ))}
  </Wrapper>
);

const eduBg = [
  {
    title: "Highest Education — Bachelor's Degree",
    desc: [
      "University: Chitkara University",
      "Course Name: Bachelor of Engineering in Computer Science",
      "Year of Passing: 2024",
      "CGPA Obtained: 9.75/10",
      "Relevant Subjects: Object-Oriented Programming (Java), Data Structures, Algorithms, Python, Full Stack Development, IoT, Cybersecurity, Artificial Intelligence, and Machine Learning.",
    ],
  },
];

export default Education;