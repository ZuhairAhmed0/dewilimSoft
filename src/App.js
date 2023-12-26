import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import OrderService from "./components/OrderService";
import Projects from "./components/Projects";
// import About from "./components/About";
// import Services from "./components/Services";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} /> */}
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order-service" element={<OrderService />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
