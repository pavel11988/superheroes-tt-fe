import { useDispatch } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";

import { ReactComponent as DeleteIcon } from "../../images/delete.svg";
import { ReactComponent as EditIcon } from "../../images/edit.svg";

import {
  Card,
  Nickname,
  RealName,
  ButtonDelete,
  ButtonChange,
  ButtonsContainer,

} from "./Superhero.styled";

import Characteristic from "./Characteristic/Characteristic";
import Avatar from "./Avatar/Avatar";
import Gallery from "./Gallery/Gallery";
import Uploader from "./Uploader/Uploader";

const Superhero = ({
  superhero,
  setViewEditForm,
  setViewImageModal,
  setImageToImageModal,
}) => {
  const dispacth = useDispatch();

  const { nickname, real_name } = superhero;

  const onDelete = async () => {
    await dispacth(superheroesOperations.deleteSuperhero(superhero._id));
    dispacth(superheroesOperations.listSuperheroes());
  };

  const onEdit = async (event) => {
    event.preventDefault();
    await dispacth(superheroesOperations.getSuperheroById(superhero._id));
    setViewEditForm(true);
  };

  return (
    <Card>
      <Avatar superhero={superhero} />
      <Nickname>{nickname}</Nickname>
      <RealName>{real_name}</RealName>
      <Characteristic superhero={superhero} />
      <Gallery superhero={superhero}  setViewImageModal={setViewImageModal} setImageToImageModal={setImageToImageModal}/>
      <Uploader superhero={superhero}/>
      
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
