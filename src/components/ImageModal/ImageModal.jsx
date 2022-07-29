import { BASE_URL, IMAGES } from "../../config";
import { Button, ModalContainer } from "./ImageModal.styled";
import { ReactComponent as CloseIcon } from "../../images/cross.svg";

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
        {<CloseIcon fill={"#ffffff"} width={"20"} height={"20"}/>}
      </Button>

      <img
        src={`${BASE_URL}/${IMAGES}/${imageToImageModal.id}.${imageToImageModal.extension}`}
        alt={`${imageToImageModal.id}`}
      />
    </ModalContainer>
  );
};

export default ImageModal;
