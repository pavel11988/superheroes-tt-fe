// hooks:
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// 
import superheroesOperations from "../../redux/superheroes/superheroOperations";
import Editor from "../Editor/Editor";

// components:
import InputForm from "../InputForm/InputForm";
import SuperheroList from "../SuperheroList/SuperheroList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(superheroesOperations.listSuperheroes());
  },[dispatch])

  const [viewEditor, setViewEditor] = useState(false);

  useEffect(() => {
    console.log('viewEditor:', viewEditor);
  }, [viewEditor])

  return (
    <div>
      <InputForm/>
      <SuperheroList setViewEditor={setViewEditor}/>
      {viewEditor && <Editor setViewEditor={setViewEditor}/>}
    </div>
  )
}

export default App;
