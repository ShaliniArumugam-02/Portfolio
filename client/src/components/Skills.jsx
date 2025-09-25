import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import {cn} from "../lib/utils"


const skills = [
  //frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  {name:"Redux",level:70,category:"Frontend"},

  //backend
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "MongoDB", level: 90, category: "Backend" },
  { name: "SQL", level: 30, category: "Backend" },

  //tools
  { name: "Git", level: 85, category: "Tools" },
  { name: "GitHub", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Postman", level: 95, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];



const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteresSkills = skills.filter((skill)=>activeCategory === "All" ||skill.category=== activeCategory);

  return (
    <section id="skills" className="py-20 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My
          <span className="text-primary"> Skills</span>
        </h2>
        <FadeInSection delayClass={"fade-in-delay-1"}>
          {/* category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button key={key}
              onClick={()=> setActiveCategory(category)}
              className={cn ("px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              >{category}</button>
            ))}
          </div>

          {/* skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteresSkills.map((skill, key) => (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-md card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name} </h3>
                </div>
                <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Skills;
