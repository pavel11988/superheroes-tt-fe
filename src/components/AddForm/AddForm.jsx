// import React from 'react';
// import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useDispatch } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";
import { Area, ButtonAdd, ButtonClose, Field, Form, FormContainer, Title } from "./AddForm.styled";

import { ReactComponent as CloseIcon } from "../../images/cross.svg"


const InputForm = ({ setViewAddForm }) => {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState(''); 
  const [realName, setRealName] = useState(''); 
  const [originDescription, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');


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

  // const handleAvatar = (event) => {
  //   const uploadImage = event.target.files[0];
  //   if (!uploadImage) {
  //     setAvatar(null);
  //     return;
  //   }
  //   const oFReader = new FileReader();
  //   oFReader.readAsDataURL(uploadImage);
  //   oFReader.onload = (event) => {
  //     var image = new Image();
  //     image.src = event.target.result;
  //     image.onload = function () {
  //       if (
  //         image.width < 100 ||
  //         image.height < 100 ||
  //         uploadImage.size > 5120000
  //       ) {
  //         setAvatar(uploadImage);
  //       } else {
  //         setAvatar(uploadImage);
  //       }
  //     };
  //   };
  // };

  const handleSubmit = async(event) => {
    event.preventDefault();
     if (!nickname.trim() || !realName.trim() || !originDescription.trim() || !superpowers.trim() || !catchPhrase.trim()) {
      alert('Missing required fileds.');
      return;
     } 
  
    const superhero = {
      nickname:nickname,
      real_name: realName,
      origin_description: originDescription,
      superpowers:superpowers,
      catch_phrase: catchPhrase,
    }

    console.log(superhero);

    await dispatch(superheroesOperations.addSuperhero(superhero)); // add new super hero
    await dispatch(superheroesOperations.listSuperheroes()); // refresh list hero

    // clear internal  component state
    setNickname(''); 
    setRealName('');
    setOriginDescription(''); 
    setSuperpowers('');
    setCatchPhrase('');
  }


  return (
    <FormContainer>
      <ButtonClose
          type="button"
          onClick={() => {
            setViewAddForm(false);
          }}
        >
           {<CloseIcon fill={"#ffffff"}/>}
      </ButtonClose>
      <Title>Add new Superhero</Title>
      <Form onSubmit={handleSubmit}>
        <Field name="nickname" value={nickname} onChange={handleChange} placeholder="Nickname"/>
        <Field name="realName" value={realName} onChange={handleChange} placeholder="Real name"/>
        <Area name="originDescription" value={originDescription} onChange={handleChange} placeholder="Description"/>
        <Field name="superpowers" value={superpowers} onChange={handleChange} placeholder="Superpowers" />
        <Field name="catchPhrase" value={catchPhrase} onChange={handleChange} placeholder="Catch phrase"/>
        <ButtonAdd type="submit">Add</ButtonAdd>
      </Form>
    </FormContainer>
    )
};
 
export default InputForm;
 