import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Info from "./Pages/Informacoes";
import Projetos from "./Pages/Projetos";
import SobreMim from "./Pages/SobreMim";
import Contact from "./Pages/Contato";
import Footer from "./Pages/Footer";

export default function Body() {

  return (
    <div>
      <Header />
      <Home />
      <Info />
      <Projetos />
      <SobreMim />
      <Contact />
      <Footer />
    </div>
  )
}
