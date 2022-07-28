import { useSelector } from "react-redux"
import Superhero from "../Superhero/Superhero"

const SuperheroList = ({setViewEditor}) => {
    const superheroes = useSelector(state => state.superheroes.superheroes)
    return (
        <ul>
            {superheroes.map((superhero) => (
                <Superhero key={superhero._id} superhero={superhero} setViewEditor={setViewEditor}/>
            ))}
        </ul>
    )
}

export default SuperheroList;