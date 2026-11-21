import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="hero flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
      id="home"
    >
      <div className="w-full max-w-7xl mx-auto hero-grid grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">
        <div className="hero-copy text-center lg:text-left">
          <p className="eyebrow text-xs sm:text-sm">
            Your journey. Your skills. Your future.
          </p>
          <h1 className="leading-[1.15] tracking-[-.02em] text-4xl sm:text-5xl lg:text-6xl">
            Turn What You Learn Into{" "}
            <span className="grad">What You Build.</span>
          </h1>
          <p className="lead text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Master in-demand tech skills through structured learning paths,
            hands-on projects, and guided practice. Build your skills one
            project at a time.
          </p>
          <div className="btn-row flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <Link
              to="./login"
              className="btn bg-brown-container btn-lg text-center"
            >
              Get Started
            </Link>
            <Link
              to="./plans"
              className="btn btn-secondary bg-transparent hover:bg-brown-secondary duration-300 ease-in-out btn-lg text-center"
              href="#pricing"
            >
              Explore Plans
            </Link>
          </div>
          <p className="muted">Start learning at your own pace.</p>
        </div>

        <div
          className="hidden showcase lg:flex lg:flex-col gap-4 w-full max-w-md sm:max-w-none lg:max-w-none mx-auto"
          aria-label="Sample projects"
        >
          <article
            className="project-card max-lg:static! max-lg:transform-none! max-lg:w-full!"
            data-pos="0"
          >
            <div className="pc-top">
              <span className="chip chip-ind bg-brown-container/30 text-brown-primary/80">FRONTEND</span>
              <span className="level">Beginner</span>
            </div>
            <h3 className="leading-[1.15] tracking-[-.02em]">
              Responsive Portfolio Website
            </h3>
            <p>
              Build polished interfaces with HTML, CSS, JavaScript, and
              responsive design.
            </p>
            <ul className="tags flex flex-wrap gap-2">
              <li className="text-black">HTML</li>
              <li className="text-black">CSS</li>
              <li className="text-black">JavaScript</li>
            </ul>
          </article>
          <article
            className="project-card max-lg:static! max-lg:transform-none! max-lg:w-full!"
            data-pos="1"
          >
            <div className="pc-top">
              <span className="chip chip-mint">FULL STACK</span>
              <span className="level">Advanced</span>
            </div>
            <h3 className="leading-[1.15] tracking-[-.02em]">
              Full-Stack E-commerce
            </h3>
            <p>
              Connect a modern interface to APIs, authentication, and a
              database.
            </p>
            <ul className="tags flex flex-wrap gap-2">
              <li className="text-black">React</li>
              <li className="text-black">Node.js</li>
              <li className="text-black">MongoDB</li>
            </ul>
          </article>
          <article
            className="project-card max-lg:static! max-lg:transform-none! max-lg:w-full! sm:max-lg:col-span-2"
            data-pos="2"
          >
            <div className="pc-top">
              <span className="chip chip-blue">REACT</span>
              <span className="level">Intermediate</span>
            </div>
            <h3 className="leading-[1.15] tracking-[-.02em]">
              Interactive React Dashboard
            </h3>
            <p>
              Create reusable components, manage application state, and
              visualize data.
            </p>
            <ul className="tags flex flex-wrap gap-2">
              <li className="text-black">React</li>
              <li className="text-black">Hooks</li>
              <li className="text-black">API</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;