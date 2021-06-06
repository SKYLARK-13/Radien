import "./App.css";
import Banner from "./components/Banner/Banner";
import Download from "./components/Download/Download";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Health from "./components/Health/Health";
 import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Header />
       
      <Banner />
      <Work />
      <Features />
      <Health />
      <Faq />
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
