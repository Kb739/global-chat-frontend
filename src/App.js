import "./App.css"
import Chat from "./chat";
import Input from "./input";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Chat />
      </main>
      <footer>
        <Input />
      </footer>
    </div>
  );
}

export default App;
