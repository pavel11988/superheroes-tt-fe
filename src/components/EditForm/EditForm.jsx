// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import superheroesOperations from "../../redux/superheroes/superheroOperations";
import { ButtonClose, ButtonUpdate, EditorContainer, ErrorMessage, Field, FieldContainer, Form, Label, Title } from "./EditForm.styled";

import { ReactComponent as CloseIcon } from "../../images/cross.svg"


const Editor = ({ setViewEditor }) => {
  const currentSuperhero = useSelector(state => state.superheroes.currentSuperhero)
  const {nickname, real_name, origin_description, superpowers, catch_phrase} = currentSuperhero;
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });


  // const [nickname, setNickname] = useState(currentSuperhero.nickname); 
  // const [realName, setRealName] = useState(currentSuperhero.real_name); 
  // const [originDescription, setOriginDescription] = useState(currentSuperhero.origin_description);
  // const [superpowers, setSuperpowers] = useState(currentSuperhero.superpowers);
  // const [catchPhrase, setCatchPhrase] = useState(currentSuperhero.catch_phrase);

  // const handleChange = event => {
  //   const { name, value } = event.target;
    
  //   switch (name) {
  //     case 'nickname': 
  //       setNickname(value); 
  //       break;
  //     case 'realName':
  //       setRealName(value);
  //       break;
  //      case 'originDescription': 
  //       setOriginDescription(value); 
  //       break;
  //     case 'superpowers':
  //       setSuperpowers(value);
  //       break;
  //      case 'catchPhrase':
  //       setCatchPhrase(value);
  //       break;
  //     default:
  //       return;
  //   }
  // }

  // const handleSubmit = async(event) => {
  //   event.preventDefault();

  //   const updatedSuperhero = {
  //       nickname: nickname,
  //       real_name: realName,
  //       origin_description: originDescription,
  //       superpowers: superpowers,
  //       catch_phrase: catchPhrase,
  //   } 

  //   const superheroId = currentSuperhero._id;
  //   // console.log(updatedSuperhero);

  //   await dispatch(superheroesOperations.updateSuperhero({superheroId, updatedSuperhero}));
  //   await dispatch(superheroesOperations.listSuperheroes());
  //   setViewEditor(false);
  // };

  const onSubmit = async(data) => {
    const {nickname, realName, originDescription, superpowers, catchPhrase} = data;
      const updatedSuperhero = {
      nickname,
      real_name: realName,
      origin_description: originDescription,
      superpowers: superpowers,
      catch_phrase: catchPhrase,
    }
    const superheroId = currentSuperhero._id;

    await dispatch(superheroesOperations.updateSuperhero({superheroId, updatedSuperhero}));
    await dispatch(superheroesOperations.listSuperheroes());
    setViewEditor(false);

    // clear internal component state
    
  }

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

      {/* <Form onSubmit={handleSubmit} style={{textAlign: "center"}}>
        <Field name="nickname" value={nickname} onChange={handleChange} placeholder="Nickname"/>
        <Field name="realName" value={realName} onChange={handleChange} placeholder="Real name"/>
        <Area name="originDescription" value={originDescription} onChange={handleChange} placeholder="Description"/>
        <Field name="superpowers" value={superpowers} onChange={handleChange} placeholder="Superpowers" />
        <Field name="catchPhrase" value={catchPhrase} onChange={handleChange} placeholder="Catch phrase"/>
        <ButtonUpdate type="submit" onClick={handleSubmit}>Update</ButtonUpdate>
        </Form> */}
            <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldContainer>
        <Label>
          Nickname:
          <Field {...register("nickname", {
            required: "Field is required.",
            minLength: {
              value: 3,
              message: "Minimum length 3 characters"
            },
            maxLength: {
              value: 15,
              message: "Maximum length 15 characters"
            },
            value: nickname
          })} />
        </Label>
        <ErrorMessage>
          {errors?.nickname && <p>{errors?.nickname?.message || "Error!"}</p>}
        </ErrorMessage>
        </FieldContainer>

        <FieldContainer>
        <Label>
         Real Name:
          <Field {...register("realName", {
            required: "Field is required.",
            minLength: {
              value: 3,
              message: "Minimum length 3 characters"
            },
            maxLength: {
              value: 15,
              message: "Maximum length 15 characters"
            },
            value: real_name
          })} />
        </Label>
        <ErrorMessage>
          {errors?.realName && <p>{errors?.realName?.message || "Error!"}</p>}
        </ErrorMessage>
        </FieldContainer>

        <FieldContainer>
        <Label>
         Description:
          <Field {...register("originDescription", {
            required: "Field is required.",
            minLength: {
              value: 10,
              message: "Minimum length 10 characters"
            },
            maxLength: {
              value: 50,
              message: "Maximum length 50 characters"
            },
            value: origin_description
          })} />
        </Label>
        <ErrorMessage>
          {errors?.originDescription && <p>{errors?.originDescription?.message || "Error!"}</p>}
        </ErrorMessage>
        </FieldContainer>
          <FieldContainer>
        <Label>
          Superpowers:
          <Field {...register("superpowers", {
            required: "Field is required.",
            minLength: {
              value: 3,
              message: "Minimum length 3 characters"
            },
            maxLength: {
              value: 25,
              message: "Maximum length 25 characters"
            },
            value: superpowers,
          })} />
        </Label>
        <ErrorMessage>
          {errors?.superpowers && <p>{errors?.superpowers?.message || "Error!"}</p>}
        </ErrorMessage>
        </FieldContainer>

        <FieldContainer>
          <Label>
          Catch phrase:
            <Field {...register("catchPhrase", {
              required: "Field is required.",
              minLength: {
                value: 3,
                message: "Minimum length 3 characters"
              },
              maxLength: {
                value: 15,
                message: "Maximum length 15 characters"
              },
              value: catch_phrase
            })} />
          </Label>
          <ErrorMessage>
            {errors?.catchPhrase && <p>{errors?.catchPhrase?.message || "Error!"}</p>}
          </ErrorMessage>
        </FieldContainer>

        <ButtonUpdate type="submit" value="Update" disabled={!isValid}/>

      </Form>


    </EditorContainer>
  );
};

export default Editor;
