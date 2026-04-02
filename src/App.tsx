import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Team from "./pages/Team";
import Career from "./pages/Career";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import PrivacyPage from "./pages/privacy";
// ... (your other imports)

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Place it here */}
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/career" element={<Career />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
