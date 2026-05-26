import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:bansalayushi2003@gmail.com", "_self");
  }

  return (
    <Wrapper>
      <span>bansalayushi2003@gmail.com</span>
    </Wrapper>
  );
};

export default Email;
