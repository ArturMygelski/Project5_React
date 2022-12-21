import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SectionUp from "./components/SectionUp/SectionUp";
import UsList from "./components/Us/UsList";
import Footer from "./components/Footer/Footer";
import ContainerBlueList from "./components/ContainerBlue/ContainerBlueList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SectionUp></SectionUp>
      <UsList></UsList>
      <ContainerBlueList></ContainerBlueList>
      <Footer></Footer>
    </>
  );
}

export default App;
