// libs
import PropTypes from "prop-types";

// styled components
import {
  CatchPhrase,
  CharacteristicContainer,
  Superpowers,
  Descriprion,
} from "./Characteristic.styled";

const Characteristic = ({ superhero }) => {
  const { origin_description, superpowers, catch_phrase } = superhero;
  return (
    <CharacteristicContainer>
      <Descriprion>
        <span>Description</span>: {origin_description}
      </Descriprion>
      <Superpowers>
        <span>Superpowers:</span> {superpowers}
      </Superpowers>
      <CatchPhrase>
        <span>Catch phrase:</span> {catch_phrase}
      </CatchPhrase>
    </CharacteristicContainer>
  );
};

Characteristic.propTypes = {
  superhero: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    real_name: PropTypes.string.isRequired,
    origin_description: PropTypes.string.isRequired,
    superpowers: PropTypes.string.isRequired,
    catch_phrase: PropTypes.string.isRequired,
  }),
};

export default Characteristic;
