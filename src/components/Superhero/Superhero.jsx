import { useDispatch } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";


const Superhero = ({ superhero, setViewEditor }) => {

    const dispacth = useDispatch();

    const {images, nickname, real_name, origin_description, superpowers, catch_phrase } = superhero;
 
    const onDelete = async () => {
        console.log("delete", );
        await dispacth(superheroesOperations.deleteSuperhero(superhero._id))
        dispacth(superheroesOperations.listSuperheroes())
    }

    return (
        <li>
            <h3>{nickname}</h3>
            <h4>{real_name}</h4>
            <p>Description: {origin_description}</p>
            <p>Superpowers: {superpowers}</p>
            <p>Catch phrase: {catch_phrase}</p>
            <button type="submit" onClick={onDelete}>Delete</button>
            <button type="button" onClick={() => {setViewEditor(true)}}>Change</button>
        </li>
    )
}

export default Superhero;