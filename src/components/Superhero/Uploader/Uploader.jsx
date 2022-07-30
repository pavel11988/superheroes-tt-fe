import { useState } from "react";
import { useDispatch } from "react-redux";
import superheroesOperations from "../../../redux/superheroes/superheroOperations";
import { ReactComponent as UploadIcon } from "../../../images/upload.svg";

import { ButtonUpload, InputContainer, Label, UploadContainer, UploadInput } from "./Uploader.styled";

const Uploader = ({ superhero }) => {
  const [image, setImage] = useState(null);

  const dispacth = useDispatch();

  const handleImage = async (event) => {
    event.preventDefault();
    const image = event.target.files[0];
    setImage(image);
  };

  const onUploadImage = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("image", image);;
    // for(var pair of formdata.entries()){
    //   console.log(pair[0]+', '+ pair[1]);
    // }
    await dispacth(
      superheroesOperations.addSuperheroImage(superhero._id, formdata)
    );
  };

  const DISABLED_BUTTON_UPLOAD = !image; 

  return (
    <UploadContainer>
    <ButtonUpload type="submit"  onClick={onUploadImage} disabled={DISABLED_BUTTON_UPLOAD}>
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
      
    </UploadContainer>
  );
};

export default Uploader;
