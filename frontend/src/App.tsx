import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Circles from "./components/Circles";
import Hackathon from "./components/Hackathon";
import Mentor from "./components/Mentor";
import Roadmap from "./components/Roadmap";
import Tracker from "./components/Tracker";
import StudentWall from "./components/Student";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    
   <div className="bg-[#0f172a] text-white min-h-screen">
  <Navbar />
 
  <main>
    {/* <section id="home">
      
    </section> */}
    <section id="home" className="py-24"><Home /></section>
     
        <section id="circles" className="py-24"><Circles/></section>
        <section id="hackathons" className="py-24"><Hackathon/></section>
        <section id="mentors" className="py-24"><Mentor/></section>
        <section id="roadmap" className="py-24"><Roadmap/></section>
        <section id="tracker" className="py-24"><Tracker/></section>
        <section id="wall" className="py-24"><StudentWall/></section>
    {/* Other sections would go here */}
  </main>
  <Footer/>
  {/* Footer would go here if you have one */}
</div>


 
   
  );
};

export default App;
