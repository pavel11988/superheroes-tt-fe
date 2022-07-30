import { useDispatch } from "react-redux";


import { ReactComponent as DeleteIcon } from "../../../images/delete.svg";
import { ReactComponent as ZoomIcon } from "../../../images/zoom-in.svg";

import { BASE_URL, IMAGES } from "../../../config";

import { GalleryContainer,
    GalleryList,
    GalleryItem,
    GalleryImage,
    ImageButtonsContainer,
    ImageButton, } from "./Gallery.styled";
import superheroesOperations from "../../../redux/superheroes/superheroOperations";

const Gallery = ({superhero, setImageToImageModal, setViewImageModal}) => {
    const dispacth = useDispatch();
    const {images} = superhero;

    const openImage = (image) => {
        setImageToImageModal(image);
        setViewImageModal(true);
      };
    
      const deleteImage = async (data) => {
        await dispacth(superheroesOperations.deleteSuperheroImage(data));
        await dispacth(superheroesOperations.listSuperheroes());
      };

    const GALLERY_CLEAR = images.length <= 1;
    const GALLERY_USER = images.length >= 1;

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
    )
}

export default Gallery;