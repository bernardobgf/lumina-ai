import { motion } from "framer-motion";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <motion.div
      className="bg-linear-to-r from-slate-950 to-purple-800"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      style={{ backgroundSize: "200% 200%" }}
    >
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </motion.div>
  );
}
