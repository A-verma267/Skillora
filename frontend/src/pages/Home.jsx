import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import "../css/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [popup , setPopup] = useState(true);
  return (
    <>
    
    {popup ? 
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* <!-- homeHERO --> */}
      <section className="homeHero py-10 sm:py-14 lg:py-20">
        <div className="homeHero-inner max-w-full">
          <p className="eyebrow text-xs sm:text-sm tracking-wide">YOUR JOURNEY. YOUR SKILLS. YOUR FUTURE.</p>
          <h1 id="homeHero-title" className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight wrap-break-word">
            Become a <span className="hl">Monster</span> in &nbsp;
            <span className="hl">Frontend Development.</span>
          </h1>
          <p className="lead text-base sm:text-lg max-w-3xl">
            Stop jumping between random tutorials. Follow structured learning
            paths that take you from the fundamentals to advanced development.
            Learn by topic, strengthen your concepts, and build the skills that
            matter in the real world.
          </p>
          <div className="homecta-row flex flex-col sm:flex-row gap-3 sm:gap-4">
            <NavLink to={"./project/1"} className="Homebtn Homebtn-primary w-full sm:w-auto text-center">
              Explore Learning Paths
            </NavLink>
          </div>
          <p className="note text-sm sm:text-base">
            Learn at your own pace. Build real skills. Grow with confidence.
          </p>
        </div>
      </section>

      {/* <!-- FEATURED LEARNING PATHS --> */}
      <section className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl mb-2 font-semibold">Choose Your Learning Path</h2>
          <p className="text-sm sm:text-base">
            Start with the fundamentals or dive into a complete development
            journey.
          </p>
        </div>
        <div className="homegrid-2 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <article className="homecard homepath w-full min-w-0 p-4 sm:p-6">
            <span className="deco"></span>
            <p className="label">CAREER PATH</p>
            <h3 className="text-xl sm:text-2xl">Full Stack Web Development</h3>
            <p>
              Master frontend and backend development, connect databases, build
              APIs, implement authentication, and deploy complete web
              applications.
            </p>
            <ul className="hometags flex flex-wrap gap-2" >
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
            <p className="homelevel">
              Level: <b>Beginner to Advanced</b>
            </p>
            {/* <!-- TODO: replace with the Full Stack path page --> */}
            <NavLink
              to={"./project/0"}
              className="Homebtn Homebtn-primary w-full sm:w-auto text-center"
            >
              Explore Path
            </NavLink>
          </article>
          <article className="homecard homepath w-full min-w-0 p-4 sm:p-6">
            <span className="deco"></span>
            <p className="label">FRONTEND DEVELOPMENT</p>
            <h3 className="text-xl sm:text-2xl">React.js Mastery</h3>
            <p>
              Learn components, props, state, hooks, routing, API integration,
              performance optimization, and modern React application
              architecture.
            </p>
            <ul className="hometags flex flex-wrap gap-2">
              <li>JSX</li>
              <li>Components</li>
              <li>Hooks</li>
              <li>Routing</li>
              <li>API Integration</li>
            </ul>
            <p className="homelevel">
              Level: <b>Beginner to Advanced</b>
            </p>
            {/* <!-- TODO: replace with the React path page --> */}
            <NavLink
              to={"./project/6"}
              className="Homebtn Homebtn-primary w-full sm:w-auto text-center"
            >
              Explore Path
            </NavLink>
          </article>
        </div>
      </section>

      {/* <!-- FUNDAMENTALS --> */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl mb-2 font-semibold">Master the Fundamentals</h2>
          <p className="text-sm sm:text-base">
            Build a strong foundation before moving into advanced frameworks and
            tools.
          </p>
        </div>
        <div className="homegrid-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <article className="homecard w-full min-w-0 p-4 sm:p-6">
            <div className="hometech-mark">
              &lt;/&gt;
            </div>
            <p className="label">HTML</p>
            <h3>HTML</h3>
            <p>
              Understand semantic markup, document structure, forms,
              accessibility, and the building blocks of every web page.
            </p>
            <p className="homedots">
              <i className="on"></i>
              <i></i>
              <i></i>
              <span>Beginner</span>
            </p>
            {/* <!-- TODO: replace with the HTML course page --> */}
            <Link
              onClick={() => navigate("./project/3")}
              className="Homebtn Homebtn-ghost Homebtn-sm inline-block text-center"
            >
              Explore HTML
            </Link>
          </article>
          <article className="homecard w-full min-w-0 p-4 sm:p-6">
            <div className="hometech-mark">
              {}
            </div>
            <p className="label">CSS</p>
            <h3>CSS</h3>
            <p>
              Learn selectors, the box model, Flexbox, homeGrid, responsive layouts,
              animations, and modern visual design.
            </p>
            <p className="homedots">
              <i className="on"></i>
              <i className="on"></i>
              <i></i>
              <span>Beginner to Intermediate</span>
            </p>
            {/* <!-- TODO: replace with the CSS course page --> */}
            <Link
              onClick={() => navigate("./project/4")}
              className="Homebtn Homebtn-ghost Homebtn-sm inline-block text-center"
            >
              Explore CSS
            </Link>
          </article>
          <article className="homecard w-full min-w-0 p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
            <div className="hometech-mark">
              JS
            </div>
            <p className="label">JAVASCRIPT</p>
            <h3>JavaScript</h3>
            <p>
              Master variables, functions, arrays, objects, DOM manipulation,
              asynchronous programming, and modern JavaScript.
            </p>
            <p className="homedots">
              <i className="on"></i>
              <i className="on"></i>
              <i className="on"></i>
              <span>Beginner to Advanced</span>
            </p>
            {/* <!-- TODO: replace with the JavaScript course page --> */}
            <Link
              onClick={() => navigate("./project/5")}
              className="Homebtn Homebtn-ghost Homebtn-sm inline-block text-center"
            >
              Explore JavaScript
            </Link>
          </article>
        </div>
      </section>

      {/* <!-- TESTIMONIALS --> */}
      <section
        className="py-10 sm:py-12 lg:py-16"
      >
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl mb-2 font-semibold">What Learners Say About Skillora</h2>
          <p className="text-sm sm:text-base">Every skill mastered is a step toward something bigger.</p>
        </div>
        <div
          className="hometrack flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          tabIndex="0"
          role="region"
          aria-label="Learner testimonials, scroll horizontally"
        >
          <figure className="w-full homecard homequote snap-start shrink-0 p-4 sm:p-6">
            <div className="homestars" aria-hidden="true">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <blockquote>
              Skillora helped me organize my learning instead of jumping between
              random tutorials. The structured topics made it easier to
              understand what I needed to learn next.
            </blockquote>
            <figcaption className="homeperson">
              <span className="homeavatar" aria-hidden="true">
                AS
              </span>
              <span>
                <b>Aarav Sharma</b>
                <span>Frontend Development Learner</span>
              </span>
            </figcaption>
          </figure>
          <figure className="w-full homecard homequote snap-start shrink-0 p-4 sm:p-6">
            <div className="homestars" aria-hidden="true">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <blockquote>
              Having the fundamentals and advanced concepts organized in one
              place made my learning journey much more focused. I can track what
              I have covered and what remains.
            </blockquote>
            <figcaption className="homeperson">
              <span className="homeavatar" aria-hidden="true">
                PM
              </span>
              <span>
                <b>Priya Mehta</b>
                <span>Computer Science Student</span>
              </span>
            </figcaption>
          </figure>
          <figure className="w-full homecard homequote snap-start shrink-0 p-4 sm:p-6">
            <div className="homestars" aria-hidden="true">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <blockquote>
              The learning paths give me a clear direction. I can move from
              individual concepts to complete development skills without feeling
              overwhelmed.
            </blockquote>
            <figcaption className="homeperson">
              <span className="homeavatar" aria-hidden="true">
                RV
              </span>
              <span>
                <b>Rohan Verma</b>
                <span>Full Stack Development Learner</span>
              </span>
            </figcaption>
          </figure>
        </div>
        <p className="homedisclaimer text-xs sm:text-sm">
          Placeholder demonstration content. Replace with genuine learner
          testimonials before launch.
        </p>
      </section>

      {/* <!-- PROGRAMS --> */}
      <section className="py-10 sm:py-12 lg:py-16 relative">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl mb-2 font-semibold">Explore More Ways to Learn</h2>
          <p className="text-sm sm:text-base">
            Choose a learning format that fits your goals, schedule, and
            experience.
          </p>
        </div>
        <div className="homegrid-3 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <article onClick={()=> setPopup(false)} className="homecard homeprogram w-full min-w-0 p-4 sm:p-6 cursor-pointer">
            <p className="label">SOFTWARE DESIGN</p>
            <h3>Low-Level Design (LLD)</h3>
            <p>
              Learn object-oriented design, className relationships, design
              patterns, and maintainable software architecture through practical
              examples.
            </p>
            {/* <!-- TODO: replace with the LLD page --> */}
            <a className="homelink-arrow">
              Explore LLD
            </a>
          </article>
          <article onClick={()=> setPopup(false)} className="homecard homeprogram w-full min-w-0 p-4 sm:p-6 cursor-pointer">
            <p className="label">PROBLEM SOLVING</p>
            <h3>DSA and Problem Solving</h3>
            <p>
              Strengthen your algorithmic thinking through data structures,
              complexity analysis, recursion, trees, graphs, and dynamic
              programming.
            </p>
            {/* <!-- TODO: replace with the DSA page --> */}
            <a className="homelink-arrow" >
              Explore DSA
            </a>
          </article>
        </div>
      </section>
    </main> : 
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/50 p-4">
        <div className="w-full max-w-3xl h-2/3 md:h-1/2 bg-black text-white flex items-center justify-center rounded-xl relative text-center text-lg sm:text-2xl">
        <div onClick={()=> setPopup(true)} className="absolute top-2.5 right-2.5 cursor-pointer "> <CloseIcon /> </div>
          Comming Soon.... 

        </div>

      </div> }
    </>
  );
};

export default Home;