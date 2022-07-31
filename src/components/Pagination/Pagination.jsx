// libs
import PropTypes from "prop-types";

// redux
import { useDispatch, useSelector } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";

// styled components
import {
  ListNumbers,
  PageButton,
  PageNumber,
  PaginationContainer,
  CurrentPageButton,
} from "./Pagination.styled";

const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.superheroes.limit);
  const currentPage = useSelector((state) => state.superheroes.page);

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i);
  }

  const handleClick = async (event) => {
    event.preventDefault();
    const page = event.target.name;
    const numberPage = Number(page);
    await dispatch(superheroesOperations.listSuperheroes(numberPage, limit));
  };

  return (
    <PaginationContainer>
      <ListNumbers>
        {pageNumbers.map((pageNumber) => (
          <PageNumber key={pageNumber}>
            {currentPage === pageNumber && (
              <CurrentPageButton
                type="button"
                name={pageNumber}
                onClick={handleClick}
              >
                {pageNumber}
              </CurrentPageButton>
            )}
            {currentPage !== pageNumber && (
              <PageButton type="button" name={pageNumber} onClick={handleClick}>
                {pageNumber}
              </PageButton>
            )}
          </PageNumber>
        ))}
      </ListNumbers>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
