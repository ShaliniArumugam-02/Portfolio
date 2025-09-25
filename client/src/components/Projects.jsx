import { ArrowRight, ExternalLink, Github } from "lucide-react";
const ProjectsList = [
  {
    id: 1,
    title: "Bulk Mail",
    description:
      "Built a Bulk Mail App with React, Node.js/Express, and Firebase Google Auth, enabling secure sign-ups and scalable bulk email delivery.",
    image: "/projects/bulk_mail.png",
    liveUrl: "https://bulkmail-10.onrender.com/",
    githubUrl: "https://github.com/ShaliniArumugam-02/BulkMail",
  },
  {
    id: 2,
    title: "Keep Notes",
    description:
      "Developed KeepNotes, a full-stack MERN app with Redis-based rate limiting, modular architecture, and a clean client-server code structure using React, Vite, and Tailwind CSS.",
    image: "/projects/keep_notes.png",
    liveUrl: "https://keepnotes-u63n.onrender.com/",
    githubUrl: "https://github.com/ShaliniArumugam-02/KeepNotes",
  },
  {
    id: 3,
    title: "Spotify Login Page",
    description:
      "Built a Spotify-inspired login/signup app using React, Node.js, and Express, focusing on authentication flow, API handling, and a clean UI experience",
    image: "/projects/spotify_login.png",
    liveUrl:
      "https://spotify-signup-qkx2gfxar-shalinis-projects-d3f76a58.vercel.app/",
    githubUrl: "https://github.com/ShaliniArumugam-02/Spotify-Signup",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Developed a React Weather App with Tailwind CSS and OpenWeather API, featuring live updates, temperature toggle, dynamic UI, and responsive design.",
    image: "/projects/weather.png",
    liveUrl: "https://weather-omega-rouge.vercel.app/",
    githubUrl: "https://github.com/ShaliniArumugam-02/weather",
  },
  {
    id: 5,
    title: "CineMate",
    description:
      "Built CineMate, a movie app with React, Tailwind CSS, authentication, personalized watchlist, and a smooth responsive UI using React Router, Context API, and localStorage.",
    image: "/projects/movie.png",
    liveUrl: "https://cinemate-murex.vercel.app/",
    githubUrl: "https://github.com/ShaliniArumugam-02/cinemate",
  },
  {
    id: 6,
    title: "Apple",
    description:
      "Recreated the Apple India website using React, Vite, and Tailwind CSS, focusing on responsive design, reusable components, and pixel-perfect UI details.",
    image: "/projects/apple.png",
    liveUrl: "https://apple-clone-omib.vercel.app/",
    githubUrl: "https://github.com/ShaliniArumugam-02/Apple-clone",
  },
  {
    id: 7,
    title: "Greenden",
    description:
      "Built GreenDen, a modern responsive garden-themed website using HTML and Tailwind CSS, focusing on clean semantic code, reusable components, and performance optimization.",
    image: "/projects/greenden.png",
    liveUrl: "https://shaliniarumugam-02.github.io/Greenden/",
    githubUrl: "https://github.com/ShaliniArumugam-02/Greenden",
  },
  {
    id: 8,
    title: "Trip Advisor",
    description:
      "Created a TripAdvisor homepage clone using pure HTML and CSS, featuring a responsive layout, card-style sections, and clean modern UI design.",
    image: "/projects/trip_advisor.png",
    liveUrl: "https://shaliniarumugam-02.github.io/tripadvisor/",
    githubUrl: "https://github.com/ShaliniArumugam-02/tripadvisor",
  },
  {
    id: 9,
    title: "Udemy",
    description:
      "Built a responsive Udemy homepage clone using pure HTML and CSS, featuring a sticky navbar, course grid, and clean structured UI.",
    image: "/projects/udemy.png",
    liveUrl: "https://shaliniarumugam-02.github.io/Udemy-Clone/",
    githubUrl: "https://github.com/ShaliniArumugam-02/Udemy-Clone",
  },
  {
    id: 10,
    title: "Hot & Cold",
    description:
      "Created Hot and Cold, a static drinks website using pure HTML and CSS, featuring a clean layout with separate hot and cold sections.",
    image: "/projects/hot&cold.png",
    liveUrl: "https://shaliniarumugam-02.github.io/Hot-Cold/",
    githubUrl: "https://github.com/ShaliniArumugam-02/Hot-Cold",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured
            <span className="text-primary"> Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here you’ll find a selection of my featured projects that showcase
            my skills in design and development. Each project reflects my
            journey of learning, problem-solving, and building real-world
            applications.
          </p>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-float">
            
            {ProjectsList.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className=" mt-2 text-xl font-semibold mb-1 ">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 p-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 p-4"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 py-4"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
         <div className="text-center mt-12" >
                <a href="https://github.com/ShaliniArumugam-02"
                target="_blank"
                className="cosmic-button w-fit flex items-center mx-auto"> Check My Github <ArrowRight size={16}/></a>
         </div>
      </div>
    </section>
  );
}

export default Projects;
