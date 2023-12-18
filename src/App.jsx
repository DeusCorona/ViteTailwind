import CallToAction from "./components/CallToAction/CallToAction";
import About from "./components/About/About";
import Certified from "./components/Cerftified/Certified";
import Contact from "./components/Contact/Contact";

function App() {

  return (
    <>
      <CallToAction/>
      <About title="Unikatnost nas razlikuje" text="Inovacija u svakom osmehu. - nije samo slogan, 
      već način na koji pristupamo stomatologiji. Naša ordinacija je posebna jer koristimo najnovije 
      tehnologije i inovacije u stomatologiji kako bismo pružili najbolju moguću negu našim pacijentima. 
      Naš stručni tim je posvećen pružanju personalizovane usluge koja će zadovoljiti sve vaše dentalne potrebe. 
      Naš cilj je da svaki pacijent napusti našu ordinaciju sa osmehom koji je rezultat vrhunske dentalne nege 
      i inovativnih tretmana."/>
      <Certified title="Sertifikovan" text="U Lazarević Dental, naš tim sertifikovanih doktora stomatologije ne samo 
      da pruža usluge - oni kreiraju iskustva. Svaki pacijent je za nas jedinstven, a naša posvećenost personalizovanoj 
      usluzi znači da svaki osmeh koji napusti našu ordinaciju odražava individualnost onoga ko ga nosi."/>
    </>
  );
}

export default App
