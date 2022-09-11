import "./App.css"
import Home from "./home";
import Login from "./login";
import { Routes, Route } from 'react-router-dom'
import { ChatProvider } from './contexts/chatContext';

function App() {
  return (
    <div className="App">
      <Routes path="/">
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={
          <ChatProvider>
            <Home />
          </ChatProvider>}>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
