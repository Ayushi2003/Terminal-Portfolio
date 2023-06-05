import { AboutWrapper, HighlightAlt, HighlightSpan } from "../styles/About.styled";

const About = () => (
  <AboutWrapper data-testid="about">
    <p>
      Hi, my name is <HighlightSpan>Ayushi Bansal</HighlightSpan>!
    </p>
    <p>
      I was born and raised in <HighlightAlt>Suratgarh, Rajasthan.</HighlightAlt> Currently, I am a <HighlightAlt>pre-final year CSE student at Chitkara University.</HighlightAlt> I am a passionate learner with an outgoing personality and a tech enthusiast. My interests lie in <HighlightAlt>web development, algorithm design, and programming.</HighlightAlt> I believe my strong work ethic, attention to detail, and excellent communication skills make me a valuable asset to any team or organization.
    </p>
  </AboutWrapper>
);

export default About;
