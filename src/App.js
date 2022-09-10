import "./App.css"
import Home from "./home";
import Login from "./login";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </div>

  );
}

export default App;
