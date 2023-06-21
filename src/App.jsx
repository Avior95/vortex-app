import "./App.css";
import AppNav from "./components/NavBar/AppNav";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <header>
        <AppNav />
      </header>
      <main>
        <Router />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
