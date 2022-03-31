import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer mt-5 text-center">
          <a href="https://github.com/Jessw1988/dictionary-app">
            Open-sourced code{" "}
          </a>{" "}
          by Jessica Wolski
        </footer>
      </div>
    </div>
  );
}

export default App;
