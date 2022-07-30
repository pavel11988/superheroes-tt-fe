import { SpinnerContainer } from "./Loader.styled";
import { ReactComponent as SpinnerIcon } from "./spinners/spinner9.svg";

function Loader({ color }) {
  return (
    <SpinnerContainer>
      <SpinnerIcon fill={color} />
    </SpinnerContainer>
  );
}

export default Loader;
