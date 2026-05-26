import { AboutWrapper, HighlightAlt, HighlightSpan } from "../styles/About.styled";

const About = () => (
  <AboutWrapper data-testid="about">
    <p>
      Hi, my name is <HighlightSpan>Ayushi Bansal</HighlightSpan>!
    </p>
    <p>
      I was born and raised in <HighlightAlt>Suratgarh, Rajasthan.</HighlightAlt> Currently, I am an <HighlightAlt>Associate Support Engineer at Edifecs Technologies (A Cotiviti Business)</HighlightAlt> and a Computer Science engineering graduate from <HighlightAlt>Chitkara University</HighlightAlt>. I am a customer-centric Support Engineer with a strong foundation in enterprise software support, technical troubleshooting, log analysis, and solution development. My core professional interests lie in <HighlightAlt>full-stack web development, application debugging, database optimization, and scalable coding.</HighlightAlt>
    </p>
  </AboutWrapper>
);

export default About;
