import React from "react";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import "../src/App.css"

class App extends React.Component {
  render() {
    return (
      <div>

        <Carousel />
      </div>
    );
  }
}

export default App;
