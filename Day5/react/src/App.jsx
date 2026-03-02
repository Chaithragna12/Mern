import User from "./components/Child";
import { State } from "./hooks/state";
import Form from "./hooks/form";
const App = () => {
  return (
    <>
      <User
        name="Yasaswini"
        age={22}
        skills={["React", "JavaScript", "Node.js"]}
      />
      <hr />
      <State />
      <hr />
      <Form />
    </>
  );
};

export default App;