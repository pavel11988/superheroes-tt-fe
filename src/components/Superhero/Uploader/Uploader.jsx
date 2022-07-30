import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import superheroesOperations from "../../../redux/superheroes/superheroOperations";
import { ReactComponent as UploadIcon } from "../../../images/upload.svg";
import toast from "react-hot-toast";

import {
  ButtonUpload,
  ErrorContainer,
  ErrorMessage,
  InputContainer,
  Label,
  UploadContainer,
  UploadInput,
} from "./Uploader.styled";

const Uploader = ({ superhero }) => {
  const [image, setImage] = useState(null);
  const currentPage = useSelector((state) => state.superheroes.page);
  const currentLimit = useSelector((state) => state.superheroes.limit);
  const [arrayIsFull, setArrayIsFull] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  const dispatch = useDispatch();

  const notifyError = (message) => toast.error(message);

  const handleImage = async (event) => {
    event.preventDefault();
    const newImage = event.target.files[0];
    setUploadError(false);
    
    if (!newImage) {
      setImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(newImage);
    fileReader.onload = (event) => {
      let image = new Image();
      image.src = event.target.result;
      image.onload = function () {
        if (image.width < 70 || image.height < 70 || newImage.size > 5120000) {
          setUploadError(true);
          setImage(newImage);
        } else {
          setUploadError(false);
          setImage(newImage);
        }
      };
    };
  };

  const onUploadImage = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    await formdata.append("image", image);
    const data = {
      superheroId: superhero._id,
      formData: formdata,
    };

    if (superhero.images.length === 6) {
      setArrayIsFull(true);
      notifyError("Maximum 6 images");
      return;
    }

    await dispatch(superheroesOperations.addSuperheroImage(data));

    await dispatch(
      superheroesOperations.listSuperheroes(currentPage, currentLimit)
    );

    setImage(null);
  };

  const DISABLED_BUTTON_UPLOAD = !image || uploadError === true;
  const UPLOAD_ERROR = uploadError === true;

  return (
    <UploadContainer>
      <ButtonUpload
        type="submit"
        onClick={onUploadImage}
        disabled={DISABLED_BUTTON_UPLOAD}
      >
        {<UploadIcon fill={"#ede9e9"} />}
      </ButtonUpload>
      <InputContainer>
        <Label>Select a image</Label>
        <UploadInput
          name="images"
          type="file"
          accept=".png, .jpeg, .jpg"
          onChange={handleImage}
        />
      </InputContainer>
    {UPLOAD_ERROR && <ErrorContainer>
        <ErrorMessage>
          Error! The image size should be smaller 5 MB and resolution more than
          70x70 pixels
        </ErrorMessage>
      </ErrorContainer>}
      
    </UploadContainer>
  );
};

export default Uploader;
