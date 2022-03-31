import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer mt-5 text-center">
          Open-sourced code by Jessica Wolski
        </footer>
      </div>
    </div>
  );
}

export default App;
