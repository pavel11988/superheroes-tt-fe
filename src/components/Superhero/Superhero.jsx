// import libs
import toast from 'react-hot-toast';

//redux
import { useDispatch, useSelector } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";

//components
import { ReactComponent as DeleteIcon } from "../../images/delete.svg";
import { ReactComponent as EditIcon } from "../../images/edit.svg";

import Characteristic from "./Characteristic/Characteristic";
import Avatar from "./Avatar/Avatar";
import Gallery from "./Gallery/Gallery";
import Uploader from "./Uploader/Uploader";
import Loader from "../Loader/Loader";
import { useState } from "react";

//styled components
import {
  Card,
  Nickname,
  RealName,
  ButtonDelete,
  ButtonChange,
  ButtonsContainer,
  ButtonWrapper,
} from "./Superhero.styled";

const Superhero = ({
  superhero,
  setViewEditForm,
  setViewImageModal,
  setImageToImageModal,
}) => {
  const dispacth = useDispatch();

  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);

  const status = useSelector((state) => state.superheroes.status);
  const notify = (message) => toast.success(message);

  const { nickname, real_name } = superhero;

  const onDelete = async (event) => {
    event.preventDefault();
    setLoadingDelete(true);
    await dispacth(superheroesOperations.deleteSuperhero(superhero._id));
    dispacth(superheroesOperations.listSuperheroes());
    notify("Superhero removed")
    setLoadingDelete(false);
  };

  const onEdit = async (event) => {
    event.preventDefault();
    setLoadingEdit(true);
    await dispacth(superheroesOperations.getSuperheroById(superhero._id));
    setViewEditForm(true);
    setLoadingEdit(false);
  };

  // const status = useSelector(state => state.superheroes.status);
  const PENDING_DELETE = status === "pending" && loadingDelete === true;
  const PENDING_EDIT = status === "pending" && loadingEdit === true;
  const RESOLVED_DELETE = status === "resolved" || loadingDelete === false;
  const RESOLVED_EDIT = status === "resolved" || loadingEdit === false;

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

      <ButtonsContainer>
        <ButtonWrapper>
          {PENDING_DELETE && <Loader color={"white"} />}
          {RESOLVED_DELETE && (
            <ButtonDelete type="submit" onClick={onDelete}>
              {<DeleteIcon fill={"#ede9e9"} />}
            </ButtonDelete>
          )}
        </ButtonWrapper>

        <ButtonWrapper>
          {PENDING_EDIT && <Loader color={"white"} />}
          {RESOLVED_EDIT && (
            <ButtonChange type="submit" onClick={onEdit}>
              {<EditIcon fill={"#ede9e9"} />}
            </ButtonChange>
          )}
        </ButtonWrapper>
      </ButtonsContainer>
    </Card>
  );
};

export default Superhero;
