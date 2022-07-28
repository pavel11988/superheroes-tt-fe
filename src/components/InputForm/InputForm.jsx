// import React from 'react';
// import { useForm } from "react-hook-form";

import { useState } from "react";
import { useDispatch } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";

 
const InputForm = ({ superhero, handleInput }) => {
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
      catch_phrase: catchPhrase
    }

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
    <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
      <input name="nickname" value={nickname} onChange={handleChange} placeholder="Nickname"/>
      <input name="realName" value={realName} onChange={handleChange} placeholder="Real name"/>
      <textarea name="originDescription" value={originDescription} onChange={handleChange} placeholder="Description"/>
      <input name="superpowers" value={superpowers} onChange={handleChange} placeholder="Superpowers" />
      <input name="catchPhrase" value={catchPhrase} onChange={handleChange} placeholder="Catch phrase"/>
      <button type="submit">Add</button>
    </form>
    )
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("nickname")} />
    
    //   <input {...register("real_name", { required: true })} />
    //   {errors.exampleRequired && <span>This field is required</span>}
      
    //   <input type="submit" />
    // </form>)
};
 
export default InputForm;
 