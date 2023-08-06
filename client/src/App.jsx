import { useEffect, useState } from "react";
import "./App.css";
import AppNav from "./components/NavBar/AppNav";
import FooterComponent from "./components/Footer/Footer";
import Router from "./routes/Router";
import useLoggedIn from "./hooks/useLoggedIn";
// import { ToastContainer } from "react-toastify";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loggedIn = useLoggedIn();
  useEffect(() => {
    (async () => {
      await loggedIn();
      setIsLoading(false);
    })();
  }, []);
  return (
    <div className="App">
      <header>
        <AppNav />
      </header>
      <main>
        <Router />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
