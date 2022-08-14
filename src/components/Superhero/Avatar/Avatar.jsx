// libs
import PropTypes from "prop-types";

// config
import { BASE_URL, IMAGES } from "../../../config";

// components
import defaultAvatar from "../../../images/default_superhero.jpg";

// styled components
import { AvatarContainer, AvatarImage } from "./Avatar.styled";

const Avatar = ({ superhero }) => {
  const { images, nickname } = superhero;
  const DEFAULT_IMAGE = images.length === 0;
  const AVATAR_USER = images.length !== 0;

  return (
    <AvatarContainer>
      {DEFAULT_IMAGE && (
        <AvatarImage src={`${defaultAvatar}`} alt={`${nickname}_default`} />
      )}
      {AVATAR_USER && (
        <AvatarImage
          src={`${BASE_URL}/${IMAGES}/${images[0].id}.${images[0].extension}`}
          alt={nickname}
        />
      )}
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  superhero: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    real_name: PropTypes.string.isRequired,
    origin_description: PropTypes.string.isRequired,
    superpowers: PropTypes.string.isRequired,
    catch_phrase: PropTypes.string.isRequired,
  }),
};

export default Avatar;
