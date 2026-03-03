import User from "./components/Child";
import { State } from "./hooks/state";
import Form from "./hooks/form";
import Conditional from "./components/Conditional";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Navbar from "./components/Navbar";
import ProductDetails from "./Pages/ProductDetails";
const App = () => {
  return (
    <>
      {/* <User
        name="Yasaswini"
        age={22}
        skills={["React", "JavaScript", "Node.js"]}
      />
      <hr />
      <State />
      <hr />
      <Form />
      <Conditional/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/services/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </>
  );
};

export default App;