import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Testimonial from "./Components/Testimonial/Testimonial";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
