import Counter from "./components/Counter";
import Form from "./components/Form";

const { Component } = require("react");
const { Routes, Route } = require("react-router-dom");
const { default: Home } = require("./components/Home");

class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    );
  }
}

export default Routing;
