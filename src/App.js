import NavBar from "./Components/NavBar";
import AddBooks from "./Pages/AddBooks";
import AudioBooks from "./Pages/AudioBooks";
import Dashboard from "./Pages/Dashboard";
import FeedBack from "./Pages/FeedBack";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextBooks from "./Pages/TextBooks";

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-books" element={<AddBooks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/audio-books" element={<AudioBooks />} />
          <Route path="/text-books" element={<TextBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
