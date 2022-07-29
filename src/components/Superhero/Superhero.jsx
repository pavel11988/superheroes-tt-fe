import { useDispatch } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";

import defaultAvatar from "../../images/default_superhero.jpg";
import { ReactComponent as DeleteIcon } from "../../images/delete.svg";
import { ReactComponent as ZoomIcon } from "../../images/zoom-in.svg";

import { ReactComponent as EditIcon } from "../../images/edit.svg";
import { ReactComponent as UploadIcon } from "../../images/upload.svg";

import { BASE_URL, IMAGES } from "../../config";
import {
  Card,
  Avatar,
  Nickname,
  RealName,
  Descriprion,
  Superpowers,
  CatchPhrase,
  ButtonDelete,
  ButtonChange,
  Gallery,
  ButtonsContainer,
  Characteristic,
  ButtonUpload,
  GalleryList,
  GalleryItem,
  GalleryImage,
  ImageButtonsContainer,
  ImageButton,
} from "./Superhero.styled";
import { useState } from "react";

const Superhero = ({
  superhero,
  setViewEditForm,
  setViewImageModal,
  setImageToImageModal,
}) => {
  const dispacth = useDispatch();

  const [image, setImage] = useState(null);

  const {
    images,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
  } = superhero;

  const onDelete = async () => {
    await dispacth(superheroesOperations.deleteSuperhero(superhero._id));
    dispacth(superheroesOperations.listSuperheroes());
  };

  const onEdit = async (event) => {
    event.preventDefault();
    await dispacth(superheroesOperations.getSuperheroById(superhero._id));
    setViewEditForm(true);
  };

  const handleImage = async (event) => {
    event.preventDefault();
    const image = event.target.files[0];
    setImage(image);
  };

  const onUploadImage = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("image", image);
    await dispacth(
      superheroesOperations.addSuperheroImage(superhero._id, formdata)
    );
  };

  const openImage = (image) => {
    setImageToImageModal(image);
    setViewImageModal(true);
  };

  const deleteImage = async (data) => {
    await dispacth(
      superheroesOperations.deleteSuperheroImage(data)
    );
    await dispacth(superheroesOperations.listSuperheroes());
  };

  const DEFAULT_IMAGE = images.length === 0;
  const AVATAR_USER = images.length !== 0;
  const GALLERY_CLEAR = images.length <= 1;
  const GALLERY_USER = images.length >= 1;

  return (
    <Card>
      {DEFAULT_IMAGE && (
        <Avatar
          src={`${defaultAvatar}`}
          alt={`${superhero.nickname}_default`}
        />
      )}
      {AVATAR_USER && (
        <Avatar
          src={`${BASE_URL}/${IMAGES}/${images[0].id}.${images[0].extension}`}
          alt={superhero.nickname}
        />
      )}
      <Nickname>{nickname}</Nickname>
      <RealName>{real_name}</RealName>
      <Characteristic>
        <Descriprion>
          <span>Description</span>: {origin_description}
        </Descriprion>
        <Superpowers>
          <span>Superpowers:</span> {superpowers}
        </Superpowers>
        <CatchPhrase>
          <span>Catch phrase:</span> {catch_phrase}
        </CatchPhrase>
      </Characteristic>
      <Gallery>
        Gallery:
        {GALLERY_CLEAR && <span> Gallery clear...</span>}
      </Gallery>
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
                    deleteImage({superhero, image});
                  }}
                >
                  {<DeleteIcon fill={"#ff5959"} width={"23"} height={"23"} />}
                </ImageButton>
              </ImageButtonsContainer>
            </GalleryItem>
          ))}
        </GalleryList>
      )}

      <div>
        <div>
          <label>Select a image</label>
          <input
            name="images"
            type="file"
            accept=".png, .jpeg, .jpg"
            onChange={handleImage}
          />
        </div>
      </div>

      <ButtonUpload type="submit" onClick={onUploadImage}>
        {<UploadIcon fill={"#ede9e9"} />}
      </ButtonUpload>

      <ButtonsContainer>
        <ButtonDelete type="submit" onClick={onDelete}>
          {<DeleteIcon fill={"#ede9e9"} />}
        </ButtonDelete>
        <ButtonChange type="submit" onClick={onEdit}>
          {<EditIcon fill={"#ede9e9"} />}
        </ButtonChange>
      </ButtonsContainer>
    </Card>
  );
};

export default Superhero;
