import React from "react";

const ProjectSection = ({ darkMode, setDarkMode, ref }) => {
  return (
    <section ref={ref} className="max-w-screen w-[80%] mx-auto px-4 relative">
      <h2 className="max-[475px]:text-[30px] text-[40px] px-4 py-2 w-max mx-auto text-center text-[#1788ae] border-[#1788ae] border-b-2 font-bold ">
        LATEST WORKS
      </h2>
      <div className="flex flex-col min-[820px]:flex-row gap-[80px] items-center mt-20 relative">
        {/* Center Line */}
        <div className="hidden min-[820px]:block h-[1px] right-1/2 left-1/4 bg-[#1788ae] absolute top-1/2 "></div>
        {/* Circle at end of line */}
        <div className="hidden min-[820px]:block background-color-of-website w-4 h-4 rounded-full border-[3px] bg-inherit z-10 border-[#fc815c] absolute right-0 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-120 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-200"></div>
        <a href="#" className="w-full flex relative">
          <div className="relative max-[475px]:mx-auto group hover:scale-105 transition-transform duration-200">
            <span className="text-white absolute group-hover:-top-15 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-300 top-5 left-1/2 -translate-x-1/2 flex bg-[#fc815c] px-4 py-2 w-fit rounded items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ">
              Code-Live
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              src="src/assets/Code_Live_Screenshot.png"
              className="drop-shadow-[0px_0px_50px_#fc815c80] dark:drop-shadow-[0px_0px_40px_#fc815c4d] rounded-[45px] border-4 border-[#fc815c] max-[475px]:max-w-[300px] max-[820px]:max-w-[400px] max-[950px]:max-w-[300px] max-w-[350px]  mr-auto relative"
              alt=""
            />
          </div>
        </a>
        <div className="w-full ">
          <h3 className="text-[#fc815c] font-bold text-4xl">Code-Live</h3>
          <span className="text-[#fc815c] text-lg ">
            (A Full Stack Code Editor)
          </span>
          <p className="text-justify mt-2">
            Developed a web-based code editor with secure user authentication,
            allowing users to sign up, log in, and save their code snippets.
            Integrated Monaco Editor for real-time code execution, syntax
            highlighting, and formatting, offering a VS Code-like experience.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2 text-sm">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #monaco-editor
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #express
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoDB
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #node.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoose
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #authentication
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #REST
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col min-[820px]:flex-row gap-[80px] items-center mt-20 relative">
        <div className="w-full">
          <h3 className="text-[#663399] font-bold text-4xl">Own-A-Land</h3>
          <span className="text-[#663399] text-lg ">
            (Real Estate Platform)
          </span>
          <p className="text-justify mt-2">
            Built a responsive real estate platform using the MERN stack.
            Implemented JWT-based authentication for secure user access and
            personalized data. Developed RESTful APIs for managing property
            listings and user data. Optimized performance with lazy loading and
            efficient rendering for a smooth, fast user experience.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2 text-sm">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoDB
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #node.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #express.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #mongoose
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #jwt
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #rest
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #cloudinary
            </li>
          </ul>
        </div>
        {/* Center Line */}
        <div className="hidden min-[820px]:block h-[1px] right-1/4 left-1/2 bg-[#1788ae] absolute top-1/2 "></div>
        {/* Circle at end of line */}
        <div className="hidden min-[820px]:block background-color-of-website w-4 h-4 rounded-full border-[3px] bg-inherit z-10 border-[#663399] absolute right-0 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-120 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-200"></div>
        <a href="#" className="w-full flex relative">
          <div className="relative max-[475px]:mx-auto group hover:scale-105 transition-transform duration-200 ml-auto">
            <span className="text-white absolute group-hover:-top-15 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-300 top-5 left-1/2 -translate-x-1/2 flex bg-[#663399] px-4 py-2 w-fit rounded items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ">
              Own-A-Land
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              src="src/assets/RealEstate_Screenshot.png"
              className="drop-shadow-[0px_0px_50px_#66339980] dark:drop-shadow-[0px_0px_40px_#6633994d] rounded-[45px] border-4 border-[#663399] max-[475px]:max-w-[300px] max-[820px]:max-w-[400px] max-[950px]:max-w-[300px] max-w-[350px] relative"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className="flex flex-col min-[820px]:flex-row gap-[80px] items-center mt-20 relative">
        {/* Center Line */}
        <div className="hidden min-[820px]:block h-[1px] right-1/2 left-1/4 bg-[#1788ae] absolute top-1/2 "></div>
        {/* Circle at end of line */}
        <div className="hidden min-[820px]:block background-color-of-website w-4 h-4 rounded-full border-[3px] bg-inherit z-10 border-[#4bb1a3] absolute right-0 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-120 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-200"></div>
        <a href="#" className="w-full flex relative">
          <div className="relative max-[475px]:mx-auto group hover:scale-105 transition-transform duration-200">
            <span className="text-white absolute group-hover:-top-15 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-300 top-5 left-1/2 -translate-x-1/2 flex bg-[#4bb1a3] px-4 py-2 w-fit rounded items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ">
              Portfolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              src={`src/assets/${
                !darkMode
                  ? "Portfolio_Screenshot_Light.png"
                  : "Portfolio_Screenshot_Dark.png"
              }`}
              className="drop-shadow-[0px_0px_50px_#4bb1a380] dark:drop-shadow-[0px_0px_40px_#4bb1a34d] rounded-[45px] border-4 border-[#4bb1a3] max-[475px]:max-w-[300px] max-[820px]:max-w-[400px] max-[950px]:max-w-[300px] max-w-[350px]  mr-auto relative"
              alt=""
            />
          </div>
        </a>
        <div className="w-full ">
          <h3 className="text-[#4bb1a3] font-bold text-4xl">
            Portfolio Website
          </h3>
          <span className="text-[#4bb1a3] text-lg ">(Personal Portfolio)</span>
          <p className="text-justify mt-2">
            Created a dynamic personal portfolio using React to showcase
            projects, skills, and experience. Designed a responsive,
            user-friendly layout with smooth navigation and modern UI elements.
            Integrated interactive components to enhance and ensure an optimal
            experience across devices..
          </p>
          <ul className="flex flex-wrap gap-2 mt-2 text-sm">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #redux
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #refs
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #router
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react19
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col min-[820px]:flex-row gap-[80px] items-center mt-20 relative">
        <div className="w-full">
          <h3 className="text-[#2694d4] font-bold text-4xl">
            NEWS Web Scraper Tool
          </h3>
          <span className="text-[#2694d4] text-lg ">
            (News Website Scraper)
          </span>
          <p className="text-justify mt-2">
            Developed a web scraper using JavaScript and Puppeteer to automate
            data extraction from websites. Implemented functionality to navigate
            pages, capture dynamic content, and store data in a structured
            format. Optimized for efficiency and accuracy in gathering real-time
            information.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2 text-sm">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #puppeteer.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #node.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #ejs
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #TOI
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #ET
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #HT
            </li>
          </ul>
        </div>
        {/* Center Line */}
        <div className="hidden min-[820px]:block h-[1px] right-1/4 left-1/2 bg-[#1788ae] absolute top-1/2 "></div>
        {/* Circle at end of line */}
        <div className="hidden min-[820px]:block background-color-of-website w-4 h-4 rounded-full border-[3px] bg-inherit z-10 border-[#2694d4] absolute right-0 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-120 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-200"></div>
        <a href="#" className="w-full flex relative">
          <div className="relative max-[475px]:mx-auto group hover:scale-105 transition-transform duration-200 ml-auto">
            <span className="text-white absolute group-hover:-top-15 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-300 top-5 left-1/2 -translate-x-1/2 flex bg-[#2694d4] px-4 py-2 w-fit rounded items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ">
              Web Scraper
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              src="src/assets/NewsScraperScreenshot.png"
              className="drop-shadow-[0px_0px_50px_#2694d480] dark:drop-shadow-[0px_0px_50px_#2694d44d] rounded-[45px] border-4 border-[#2694d4] max-[475px]:max-w-[300px] max-[820px]:max-w-[400px] max-[950px]:max-w-[300px] max-w-[350px] relative"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className="flex flex-col min-[820px]:flex-row gap-[80px] items-center mt-20 relative">
        {/* Center Line */}
        <div className="hidden min-[820px]:block h-[1px] right-1/2 left-1/4 bg-[#1788ae] absolute top-1/2 "></div>
        {/* Circle at end of line */}
        <div className="hidden min-[820px]:block background-color-of-website w-4 h-4 rounded-full border-[3px] bg-inherit z-10 border-[#fc815c] absolute right-0 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-120 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-200"></div>
        <a href="#" className="w-full flex relative">
          <div className="relative max-[475px]:mx-auto group hover:scale-105 transition-transform duration-200">
            <span className="text-white absolute group-hover:-top-15 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-300 top-5 left-1/2 -translate-x-1/2 flex bg-[#fc815c] px-4 py-2 w-fit rounded items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ">
              Pokedex
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              src="src/assets/Pokemon_Pokedex_Screenshot.png"
              className="drop-shadow-[0px_0px_50px_#fc815c80] dark:drop-shadow-[0px_0px_40px_#fc815c4d] rounded-[45px] border-4 border-[#fc815c] max-[475px]:max-w-[300px] max-[820px]:max-w-[400px] max-[950px]:max-w-[300px] max-w-[350px]  mr-auto relative"
              alt=""
            />
          </div>
        </a>
        <div className="w-full ">
          <h3 className="text-[#fc815c] font-bold text-4xl">Pokemon Pokedex</h3>
          <span className="text-[#fc815c] text-lg ">
            (A Simple Pokemon Species Catalogue)
          </span>
          <p className="text-justify mt-2">
            Developed a React-based Pokedex project that fetches data using the
            PokeAPI to display first-generation Pokémon (Gen 1, Pokémon #1–151)
            in a responsive grid. Utilized useState and useEffect hooks for
            managing state and fetching data, ensuring smooth asynchronous
            operations.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2 text-sm">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #fetch
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #hooks
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #useeffect
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #react19
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col min-[820px]:flex-row gap-[80px] items-center mt-20 relative">
        <div className="w-full">
          <h3 className="text-[#7ae714] font-bold text-4xl">A Weather App</h3>
          <span className="text-[#7ae714] text-lg ">
            (Weather Checking App)
          </span>
          <p className="text-justify mt-2">
            The weather app is built using with the Fetch API to make requests
            to OpenWeatherMap. Fetches weather data and uses DOM manipulation to
            display the data. Includes error handling to manage invalid city
            names and loading states.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2 text-sm">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
              #OpenWeatherMap
            </li>
          </ul>
        </div>
        {/* Center Line */}
        <div className="hidden min-[820px]:block h-[1px] right-1/4 left-1/2 bg-[#1788ae] absolute top-1/2 "></div>
        {/* Circle at end of line */}
        <div className="hidden min-[820px]:block background-color-of-website w-4 h-4 rounded-full border-[3px] bg-inherit z-10 border-[#7ae714] absolute right-0 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-120 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-200"></div>
        <a href="#" className="w-full flex relative">
          <div className="relative max-[475px]:mx-auto group hover:scale-105 transition-transform duration-200 ml-auto">
            <span className="text-white absolute group-hover:-top-15 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] duration-300 top-5 left-1/2 -translate-x-1/2 flex bg-[#7ae714] px-4 py-2 w-fit rounded items-center gap-1 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ">
              Weather App
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              src="src/assets/WeatherAppScreenshot.png"
              className="drop-shadow-[0px_0px_50px_#7ae71480] dark:drop-shadow-[0px_0px_40px_#7ae714b3] rounded-[45px] border-4 border-[#7ae714] max-[475px]:max-w-[300px] max-[820px]:max-w-[400px] max-[950px]:max-w-[300px] max-w-[350px] relative"
              alt=""
            />
          </div>
        </a>
      </div>
      {/* Vertical Center Line */}
      <div className="max-[820px]:hidden w-0.5 bg-[#1788ae]  absolute top-19 -bottom-15 left-1/2 -translate-x-1/2  "></div>
    </section>
  );
};

export default ProjectSection;
