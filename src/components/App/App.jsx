//libs
import Modal from "react-modal";
import { Toaster } from 'react-hot-toast';


// hooks:
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//
import superheroesOperations from "../../redux/superheroes/superheroOperations";

// components:
import AddForm from "../AddForm/AddForm";
import EditForm from "../EditForm/EditForm";
import Pagination from "../Pagination/Pagination";
import SuperheroList from "../SuperheroList/SuperheroList";
import { ReactComponent as AddIcon } from "../../images/add.svg";

// styled components
import { AddButton, AppContainer, ListContainer, Title } from "./App.styled";
import ImageModal from "../ImageModal/ImageModal";


const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  overlay: {
    backgroundColor: "#0404015a",
  },
};

Modal.setAppElement("#root");

function App() {
  const [viewAddForm, setViewAddForm] = useState(false);
  const [viewEditForm, setViewEditForm] = useState(false);
  const [viewImageModal, setViewImageModal] = useState(false);
  const [imageToImageModal, setImageToImageModal] = useState(null);

  const dispatch = useDispatch();

  const totalPages = useSelector((state) => state.superheroes.totalPages);
  const page = useSelector((state) => state.superheroes.page);

  useEffect(() => {
    dispatch(superheroesOperations.listSuperheroes());
  }, [dispatch]);


  const VIEW_MODAL_IMAGE =
    viewImageModal === true && imageToImageModal !== null;
  const VIEW_ADD_FORM = viewAddForm === true;
  const VIEW_EDIT_FORM = viewEditForm === true;

  return (
    <AppContainer>
      <Title>Create your own superhero squad!</Title>
      
     
        <ListContainer>
          {page === 1 && (
            <AddButton
              type="button"
              onClick={() => {
                setViewAddForm(true);
              }}
            >
              {<AddIcon fill={"#f9f9f9"} />}
            </AddButton>
          )}

          <SuperheroList
            setViewEditForm={setViewEditForm}
            setViewImageModal={setViewImageModal}
            setImageToImageModal={setImageToImageModal}
          />
        </ListContainer>
     

      {totalPages > 1 && <Pagination totalPages={totalPages} />}

      <Modal isOpen={VIEW_EDIT_FORM} style={modalStyles}>
        {viewEditForm && <EditForm setViewEditor={setViewEditForm} />}
      </Modal>

      <Modal isOpen={VIEW_ADD_FORM} style={modalStyles}>
        {viewAddForm && <AddForm setViewAddForm={setViewAddForm} />}
      </Modal>

      <Modal isOpen={VIEW_MODAL_IMAGE} style={modalStyles}>
        {viewImageModal && imageToImageModal && (
          <ImageModal
            setImageToImageModal={setImageToImageModal}
            setViewImageModal={setImageToImageModal}
            imageToImageModal={imageToImageModal}
          />
        )}
      </Modal>

      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </AppContainer>
  );
}

export default App;
