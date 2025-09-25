import React from "react";
import heroimg from "../assets/profile-img.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 mt-3"
    >
      <div className="continer max-w-6xl mx-auto text-center z-10">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-10 space-y-6 md:space-y-0 ">
          <div>
             <h1 className="text-xl md:text-6xl text-center md:text-left font-bold md:w-1/2 tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi!, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Shalini
            </span>
            <span className="opacity-0 animate-fade-in-delay-2 text-gradient ml-2">Arumugam</span>
          </h1>
          <p className="mt-6 text-center md:text-left text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a passionate MERN Stack Developer who enjoys building full-stack applications from concept to deployment. With expertise in MongoDB, Express.js, React, and Node.js.
          </p>
          </div>
         
          <div className="md:w-1/2 flex justify-center md:justify-end animate-float">
            <img
              className="w-70 h-96 rounded-2xl transition-transform duration-500 hover:scale-105 animate-fade-in-delay-4 opacity-0"
              src={heroimg}
              alt="shalini"
            />
          </div>
        </div>
        <div className="p-4 mt-6  opacity-0 animate-fade-in-delay-5">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
  
      </div>   
    </section>
  );
};

export default HeroSection;
