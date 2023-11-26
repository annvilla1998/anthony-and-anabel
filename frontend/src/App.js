import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import PhotoAlbum from "./components/PhotoAlbum";

import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="RSVP" element={<RSVP />} />
          <Route path="photo-album" element={<PhotoAlbum />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
