import { useDispatch, useSelector } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";
import { ListNumbers, PageButton, PageNumber, PaginationContainer } from "./Pagination.styled";

const Pagination = ({ totalPages }) => {
    const dispatch = useDispatch();
    const limit = useSelector(state => state.superheroes.limit)
    const currentPage = useSelector(state => state.superheroes.page)


    const pageNumbers = [];

    for(let i = 1; i <= totalPages; i+=1){
        pageNumbers.push(i);
    }

    const handleSumbit = async (event) =>{
        event.preventDefault();
        const page = event.target.name;
        const numberPage = Number(page);
        console.log("numberPage:", numberPage)
        await dispatch(superheroesOperations.listSuperheroes(numberPage, limit));
    }

    return(
        <PaginationContainer>
            <ListNumbers>
                {
                    pageNumbers.map(pageNumber => (
                        <PageNumber key={pageNumber}>
                            <PageButton type="submit" name={pageNumber} onClick={handleSumbit}>{pageNumber}</PageButton>
                        </PageNumber>
                    ))
                }
            </ListNumbers>
        </PaginationContainer>
    )
}

export default Pagination 