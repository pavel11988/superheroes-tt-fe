//import libs
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';

// redux
import superheroesOperations from "../../redux/superheroes/superheroOperations";

// components
import Loader from "../Loader/Loader";

// styled components
import {
  ButtonClose,
  ButtonUpdate,
  EditorContainer,
  ErrorMessage,
  Field,
  FieldContainer,
  Form,
  Label,
  Title,
} from "./EditForm.styled";

import { ReactComponent as CloseIcon } from "../../images/cross.svg";

const EditForm = ({ setViewEditor }) => {

  const currentSuperhero = useSelector(
    (state) => state.superheroes.currentSuperhero
  );

  const status = useSelector(state => state.superheroes.status);

  const notify = (message) => toast.success(message);

  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    currentSuperhero;
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const { nickname, realName, originDescription, superpowers, catchPhrase } =
      data;
    const updatedSuperhero = {
      nickname,
      real_name: realName,
      origin_description: originDescription,
      superpowers: superpowers,
      catch_phrase: catchPhrase,
    };
    const superheroId = currentSuperhero._id;

    await dispatch(
      superheroesOperations.updateSuperhero({ superheroId, updatedSuperhero })
    );
    await dispatch(superheroesOperations.listSuperheroes());

    notify("Superhero changed");
    setViewEditor(false);
  };

  const PENDING = status === 'pending';
  const RESOLVED = status === 'resolved';

  return (
    <EditorContainer>
      <ButtonClose
        type="button"
        onClick={() => {
          setViewEditor(false);
        }}
      >
        {<CloseIcon fill={"#ffffff"} />}
      </ButtonClose>

      <Title>Change Superhero</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldContainer>
          <Label>
            Nickname:
            <Field
              {...register("nickname", {
                required: "Field is required.",
                minLength: {
                  value: 3,
                  message: "Minimum length 3 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum length 15 characters",
                },
                value: nickname,
              })}
            />
          </Label>
          <ErrorMessage>
            {errors?.nickname && <p>{errors?.nickname?.message || "Error!"}</p>}
          </ErrorMessage>
        </FieldContainer>

        <FieldContainer>
          <Label>
            Real Name:
            <Field
              {...register("realName", {
                required: "Field is required.",
                minLength: {
                  value: 3,
                  message: "Minimum length 3 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum length 15 characters",
                },
                value: real_name,
              })}
            />
          </Label>
          <ErrorMessage>
            {errors?.realName && <p>{errors?.realName?.message || "Error!"}</p>}
          </ErrorMessage>
        </FieldContainer>

        <FieldContainer>
          <Label>
            Description:
            <Field
              {...register("originDescription", {
                required: "Field is required.",
                minLength: {
                  value: 10,
                  message: "Minimum length 10 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum length 50 characters",
                },
                value: origin_description,
              })}
            />
          </Label>
          <ErrorMessage>
            {errors?.originDescription && (
              <p>{errors?.originDescription?.message || "Error!"}</p>
            )}
          </ErrorMessage>
        </FieldContainer>
        <FieldContainer>
          <Label>
            Superpowers:
            <Field
              {...register("superpowers", {
                required: "Field is required.",
                minLength: {
                  value: 3,
                  message: "Minimum length 3 characters",
                },
                maxLength: {
                  value: 25,
                  message: "Maximum length 25 characters",
                },
                value: superpowers,
              })}
            />
          </Label>
          <ErrorMessage>
            {errors?.superpowers && (
              <p>{errors?.superpowers?.message || "Error!"}</p>
            )}
          </ErrorMessage>
        </FieldContainer>

        <FieldContainer>
          <Label>
            Catch phrase:
            <Field
              {...register("catchPhrase", {
                required: "Field is required.",
                minLength: {
                  value: 3,
                  message: "Minimum length 3 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum length 15 characters",
                },
                value: catch_phrase,
              })}
            />
          </Label>
          <ErrorMessage>
            {errors?.catchPhrase && (
              <p>{errors?.catchPhrase?.message || "Error!"}</p>
            )}
          </ErrorMessage>
        </FieldContainer>
        <div>
          {PENDING && <Loader color={"white"}/>}
          {RESOLVED && <ButtonUpdate type="submit" value="Update" disabled={!isValid} />}
        </div>
      </Form>
    </EditorContainer>
  );
};

export default EditForm;
