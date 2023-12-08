import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import PhotoAlbum from "./components/PhotoAlbum";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  return (
    <div data-theme="retro" className="App">
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
