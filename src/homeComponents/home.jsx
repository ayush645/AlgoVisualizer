import React from 'react';
import Navbar from "./navbar";
import Greet from "./greet";
import TypeWriterC from "./typewriter";
import Cards from "./cards";
import Footer from "./footer";

const Home = () => {
return (
<>
    <Navbar />
      <Greet />
      <TypeWriterC />
      <Cards />
      <Footer />
</>
);
}

export default Home;