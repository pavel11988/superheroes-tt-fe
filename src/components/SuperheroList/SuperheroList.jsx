import { useSelector } from "react-redux";
import Superhero from "../Superhero/Superhero";
import { List } from "./SuperheroList.styled";

const SuperheroList = ({ setViewEditForm, setViewImageModal, setImageToImageModal }) => {
  const superheroes = useSelector((state) => state.superheroes.superheroes);
  return (
    <List>
      {superheroes.map((superhero) => (
        <Superhero
          key={superhero._id}
          superhero={superhero}
          setViewEditForm={setViewEditForm}
          setViewImageModal={setViewImageModal}
          setImageToImageModal={setImageToImageModal}
        />
      ))}
    </List>
  );
};

export default SuperheroList;
