import React from "react";
import Header from "./components/Header";
import Subjects from "./components/Subjects";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="overflow-hidden bg-[#cebed9]">
      <div className="fixed w-full h-[13vh] bg-[#332d60] flex items-center justify-center z-10">
        <p className="text-[#dadcdc] text-4xl font-impact">PHYSICS SEM 2023</p>
      </div>
      <Header />
      <Subjects />
      <Footer />
    </div>
  );
}

export default App;
