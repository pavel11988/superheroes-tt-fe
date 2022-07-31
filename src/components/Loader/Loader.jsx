// libs
import PropTypes from "prop-types";

// components
import { ReactComponent as SpinnerIcon } from "./spinner9.svg";

// styled components
import { SpinnerContainer } from "./Loader.styled";

function Loader({ color }) {
  return (
    <SpinnerContainer>
      <SpinnerIcon fill={color} />
    </SpinnerContainer>
  );
}

Loader.propTypes = {
  color: PropTypes.string,
};

export default Loader;
