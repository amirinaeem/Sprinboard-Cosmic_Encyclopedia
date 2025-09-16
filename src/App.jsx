import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ContentPage from "./components/ContentPage";
import { celestialObjects } from "./data.js";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {celestialObjects.map((obj) => (
          <Route
            key={obj.id}
            path={`/${obj.id}`}
            element={<ContentPage object={obj} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
