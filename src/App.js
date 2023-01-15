import Contactos from "./Components/Contactos";
import Curriculum from "./Components/Curriculum";
import Footer from "./Components/Footer";
import Heather from "./Components/Heather";
import Inicio from "./Components/Inicio";
import Portafolio from "./Components/Portafolio";
import Skills from "./Components/Skills";
import SobreMi from "./Components/SobreMi";


function App() {

  return (

    <div className="App">

      <Heather></Heather>
      <Inicio></Inicio>
      <SobreMi></SobreMi>
      <Skills></Skills>
      <Curriculum></Curriculum>
      <Portafolio></Portafolio>
      <Contactos></Contactos>
      <Footer></Footer>
      
    </div>

  );

};

export default App;
