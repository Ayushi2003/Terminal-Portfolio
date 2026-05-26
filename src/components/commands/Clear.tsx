import { useContext, useEffect } from "react";
import { UsageDiv } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Clear: React.FC = () => {
  const { arg, clearHistory } = useContext(termContext);

  useEffect(() => {
    if (!arg.length) clearHistory?.();
  }, []);

  return arg.length ? <UsageDiv>Usage: clear</UsageDiv> : null;
};

export default Clear;
