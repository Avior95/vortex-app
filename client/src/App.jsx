import { useEffect, useState } from "react";
import "./App.css";
import AppNav from "./components/NavBar/AppNav";
// import FooterComponent from "./components/Footer/Footer";
import Router from "./routes/Router";
import useLoggedIn from "./hooks/useLoggedIn";
import { useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loggedIn = useLoggedIn();
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  useEffect(() => {
    (async () => {
      await loggedIn();
      setIsLoading(false);
    })();
  }, []);
  return (
    <div className="App">
      <header>
        <AppNav canEdit={payload && payload.isAdmin} />
      </header>
      <main>
        <Router />
      </main>
      <footer>{/* <FooterComponent /> */}</footer>
    </div>
  );
}

export default App;
