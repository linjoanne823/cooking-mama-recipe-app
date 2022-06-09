import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import "../src/App.css";
import SignUpPage from "./pages/SignUpPage";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetails from "./pages/RecipeDetails";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
