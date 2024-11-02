import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Fetch from "../components/Fetch";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  // console.log(fetchStatus.currentlyFetching);

  return (
    <>
      <Header />
      <Fetch />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
