import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <h1>Ayushi Bansal</h1>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {` 
                    _,,,_
                  .'     \`.
                 /     ____ \\
                |    .'_  _\\/
                /    ) a  a|
               /    (    > |
              (      ) ._  /
              )    _/-.__.'\`\\
             (  .-'\`-.   \\__ )
              \`/      \`-./  \`.
               |    \\      \\  \\
               |     \\   \\  \\  \\
               |\\     \`. /  /   \\
          `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
