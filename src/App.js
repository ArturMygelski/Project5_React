import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SectionUp from "./components/SectionUp/SectionUp";
import UsList from "./components/Us/UsList";
import Footer from "./components/Footer/Footer";
import OffersList from "./components/OffersList/OffersList";

function App() {
  return (
    <>
      <Navbar />
      <SectionUp />
      <UsList />
      <OffersList />
      <Footer />
    </>
  );
}

export default App;
