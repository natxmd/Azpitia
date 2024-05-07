import BtnWhatsApp from "./components/buttons/BtnWhatsApp";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";

export default function App() {
   return (
      <div>
         <Navbar />
         <Main />
         <Footer />
         <BtnWhatsApp />
      </div>
   )
}