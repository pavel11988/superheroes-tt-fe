// libs
import PropTypes from "prop-types";

// config
import { BASE_URL, IMAGES } from "../../../config";

// redux
import { useDispatch, useSelector } from "react-redux";
import superheroesOperations from "../../../redux/superheroes/superheroOperations";

// components
import { ReactComponent as DeleteIcon } from "../../../images/delete.svg";
import { ReactComponent as ZoomIcon } from "../../../images/zoom-in.svg";

// styled components
import {
  GalleryContainer,
  GalleryList,
  GalleryItem,
  GalleryImage,
  ImageButtonsContainer,
  ImageButton,
} from "./Gallery.styled";

const Gallery = ({ superhero, setImageToImageModal, setViewImageModal }) => {
  const dispacth = useDispatch();
  const currentPage = useSelector((state) => state.superheroes.page);
  const currentLimit = useSelector((state) => state.superheroes.limit);

  const { images } = superhero;

  const openImage = (image) => {
    setImageToImageModal(image);
    setViewImageModal(true);
  };

  const deleteImage = async (data) => {
    await dispacth(superheroesOperations.deleteSuperheroImage(data));
    await dispacth(
      superheroesOperations.listSuperheroes(currentPage, currentLimit)
    );
  };

  const GALLERY_CLEAR = images.length === 0;
  const GALLERY_USER = images.length > 0;

  return (
    <GalleryContainer>
      <p>Gallery:</p>

      {GALLERY_CLEAR && <span> Gallery clear...</span>}

      {GALLERY_USER && (
        <GalleryList>
          {images.map((image) => (
            <GalleryItem key={image.id}>
              <GalleryImage
                src={`${BASE_URL}/${IMAGES}/${image.id}.${image.extension}`}
                alt={`${superhero.id}_${image.id}`}
              />
              <ImageButtonsContainer>
                <ImageButton
                  type="submit"
                  name="zoom"
                  onClick={() => {
                    openImage(image);
                  }}
                >
                  {<ZoomIcon fill={"#ecffac"} width={"23"} height={"23"} />}
                </ImageButton>

                <ImageButton
                  type="submit"
                  name="delete"
                  onClick={() => {
                    deleteImage({ superhero, image });
                  }}
                >
                  {<DeleteIcon fill={"#ff5959"} width={"23"} height={"23"} />}
                </ImageButton>
              </ImageButtonsContainer>
            </GalleryItem>
          ))}
        </GalleryList>
      )}
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  superhero: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    real_name: PropTypes.string.isRequired,
    origin_description: PropTypes.string.isRequired,
    superpowers: PropTypes.string.isRequired,
    catch_phrase: PropTypes.string.isRequired,
  }),
  setImageToImageModal: PropTypes.func.isRequired,
  setViewImageModal: PropTypes.func.isRequired,
};

export default Gallery;
