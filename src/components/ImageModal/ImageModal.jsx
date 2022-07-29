import { BASE_URL, IMAGES } from "../../config";

const ImageModal = ({setImageToImageModal, imageToImageModal, setViewImageModal}) => {

    const handleClose = () =>{
        setViewImageModal(false)
        setImageToImageModal(null);
    }

  return (
    <div>
        <button type="submit" onClick={handleClose}>Close</button>
      <img
        src={`${BASE_URL}/${IMAGES}/${imageToImageModal.id}.${imageToImageModal.extension}`}
        alt={`${imageToImageModal.id}`}
      />
    </div>
  );
};

export default ImageModal;
