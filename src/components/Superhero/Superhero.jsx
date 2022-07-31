// libs
import PropTypes from "prop-types";

// components
import Characteristic from "./Characteristic/Characteristic";
import Avatar from "./Avatar/Avatar";
import Gallery from "./Gallery/Gallery";
import Uploader from "./Uploader/Uploader";
import Controllers from "./Controllers/Controllers";

//styled components
import { Card, Nickname, RealName } from "./Superhero.styled";

const Superhero = ({
  superhero,
  setViewEditForm,
  setViewImageModal,
  setImageToImageModal,
}) => {
  const { nickname, real_name } = superhero;
  return (
    <Card>
      <Avatar superhero={superhero} />
      <Nickname>{nickname}</Nickname>
      <RealName>{real_name}</RealName>
      <Characteristic superhero={superhero} />
      <Gallery
        superhero={superhero}
        setViewImageModal={setViewImageModal}
        setImageToImageModal={setImageToImageModal}
      />
      <Uploader superhero={superhero} />
      <Controllers superhero={superhero} setViewEditForm={setViewEditForm} />
    </Card>
  );
};

Superhero.propTypes = {
  superhero: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    real_name: PropTypes.string.isRequired,
    origin_description: PropTypes.string.isRequired,
    superpowers: PropTypes.string.isRequired,
    catch_phrase: PropTypes.string.isRequired,
  }),
  setViewEditForm: PropTypes.func.isRequired,
  setViewImageModal: PropTypes.func.isRequired,
  setImageToImageModal: PropTypes.func.isRequired,
};

export default Superhero;
