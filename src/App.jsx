import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoseBouquet from "./pages/RoseBouquet/RoseBouquet";
import OurStory from "./pages/OurStory/OurStory";
import Contact from "./pages/Contact/Contact";
import DecoreHire from "./pages/DecorHire/DecoreHire";
import WeddingAndEvents from "./pages/WeddingsAndEvents/WeddingsAndEvents";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import CheckOut from "./pages/CheckOut/CheckOut";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service-package" element={<RoseBouquet />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/photo-gallery" element={<OurStory />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/decor-hire" element={<DecoreHire />} />
              <Route path="/services" element={<WeddingAndEvents />} />
              <Route path="/cart-page" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
