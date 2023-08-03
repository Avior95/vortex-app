import { useEffect, useState } from "react";
import "./App.css";
import AppNav from "./components/NavBar/AppNav";
import Router from "./routes/Router";
import useLoggedIn from "./hooks/useLoggedIn";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
