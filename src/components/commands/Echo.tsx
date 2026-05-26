import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Echo: React.FC = () => {
  const { arg } = useContext(termContext);

  const outputStr = _.trim(_.join(arg, " "), "'\"`");

  return <Wrapper>{outputStr}</Wrapper>;
};

export default Echo;
