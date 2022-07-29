import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";
import { Area, ButtonClose, ButtonUpdate, EditorContainer, Field, Form, FormContainer, Title } from "./EditForm.styled";

import { ReactComponent as CloseIcon } from "../../images/cross.svg"


const Editor = ({ setViewEditor }) => {
  const currentSuperhero = useSelector(state => state.superheroes.currentSuperhero)
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState(currentSuperhero.nickname); 
  const [realName, setRealName] = useState(currentSuperhero.real_name); 
  const [originDescription, setOriginDescription] = useState(currentSuperhero.origin_description);
  const [superpowers, setSuperpowers] = useState(currentSuperhero.superpowers);
  const [catchPhrase, setCatchPhrase] = useState(currentSuperhero.catch_phrase);

  const handleChange = event => {
    const { name, value } = event.target;
    
    switch (name) {
      case 'nickname': 
        setNickname(value); 
        break;
      case 'realName':
        setRealName(value);
        break;
       case 'originDescription': 
        setOriginDescription(value); 
        break;
      case 'superpowers':
        setSuperpowers(value);
        break;
       case 'catchPhrase':
        setCatchPhrase(value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = async(event) => {
    event.preventDefault();

    const updatedSuperhero = {
        nickname: nickname,
        real_name: realName,
        origin_description: originDescription,
        superpowers: superpowers,
        catch_phrase: catchPhrase,
    } 

    const superheroId = currentSuperhero._id;
    // console.log(updatedSuperhero);

    await dispatch(superheroesOperations.updateSuperhero({superheroId, updatedSuperhero}));
    await dispatch(superheroesOperations.listSuperheroes());
    setViewEditor(false);
  };
  return (
    <EditorContainer>
      <ButtonClose
          type="button"
          onClick={() => {
            setViewEditor(false);
          }}
        >
           {<CloseIcon fill={"#ffffff"}/>}
      </ButtonClose>

      <Title>Change Superhero</Title>

      <Form onSubmit={handleSubmit} style={{textAlign: "center"}}>
        <Field name="nickname" value={nickname} onChange={handleChange} placeholder="Nickname"/>
        <Field name="realName" value={realName} onChange={handleChange} placeholder="Real name"/>
        <Area name="originDescription" value={originDescription} onChange={handleChange} placeholder="Description"/>
        <Field name="superpowers" value={superpowers} onChange={handleChange} placeholder="Superpowers" />
        <Field name="catchPhrase" value={catchPhrase} onChange={handleChange} placeholder="Catch phrase"/>
        <ButtonUpdate type="submit" onClick={handleSubmit}>Update</ButtonUpdate>
        </Form>
    </EditorContainer>
  );
};

export default Editor;
