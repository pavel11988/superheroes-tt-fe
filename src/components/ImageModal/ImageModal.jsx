// libs
import PropTypes from "prop-types";

// config
import { BASE_URL, IMAGES } from "../../config";

//components
import { ReactComponent as CloseIcon } from "../../images/cross.svg";

// styled components
import { Button, ModalContainer } from "./ImageModal.styled";

const ImageModal = ({
  setImageToImageModal,
  imageToImageModal,
  setViewImageModal,
}) => {
  const handleClose = () => {
    setViewImageModal(false);
    setImageToImageModal(null);
  };

  return (
    <ModalContainer>
      <Button type="submit" onClick={handleClose}>
        {<CloseIcon fill={"#ffffff"} width={"20"} height={"20"} />}
      </Button>

      <img
        src={`${BASE_URL}/${IMAGES}/${imageToImageModal.id}.${imageToImageModal.extension}`}
        alt={`${imageToImageModal.id}`}
      />
    </ModalContainer>
  );
};

ImageModal.propTypes = {
  setImageToImageModal: PropTypes.func.isRequired,
  imageToImageModal: PropTypes.object.isRequired,
  setViewImageModal: PropTypes.func.isRequired,
};

export default ImageModal;
