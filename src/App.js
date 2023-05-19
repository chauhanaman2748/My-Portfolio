import React from "react";
import "./index.css"
import Home from "./routes/home"
import{Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path= "/" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
