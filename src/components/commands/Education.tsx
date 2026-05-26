import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => (
  <Wrapper data-testid="education">
    <EduIntro>Here is my education background!</EduIntro>
    {eduBg.map(({ title, desc }) => (
      <EduList key={title}>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
      </EduList>
    ))}
  </Wrapper>
);

const eduBg = [
  {
    title: "Bachelor's Degree",
    desc: [
      'Name of the university: Chitkara University',
      'Course name: Bachelor of Engineering in Computer Science',
      'Year of passing: 2024',
      'CGPA obtained: 9.75/10',
      'Relevant subjects: Object-Oriented Programming (Java), Data Structures, Algorithms, Python, Full Stack Development, IoT, Cybersecurity, Artificial Intelligence, and Machine Learning.',
    ]
  },
  {
    title: "XII",
    desc: [
      'Name of the school: Sacred Heart Senior Secondary School',
      'Name of the board: CBSE (Central Board of Secondary Education)',
      'Percentage obtained: 73.2%',
      'Relevant subjects: Mathematics, Physics, Chemistry, English, etc.',
    ],
  },
];

export default Education;
