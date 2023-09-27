import Offer from "./components/offer section/Offer";
import NavBar from "./components/navBar/Navbar";
import Trending from "./components/trending/Trending";
import Footer from "./components/footer/Footer";
import Hero from "./components/Heropage/Hero";
import Newsletter from "./components/news-letter/News-letter";
import {useState} from "react";

function App() {
    const [show, setShow] = useState(true)
  return (
    <div className="App">
        {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
        <Offer/>
        <NavBar/>
          <Hero />
          <Trending/>
          <Newsletter />
          <Footer />
    </div>
  );
}

export default App;
