import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section
      className="section flex items-center justify-center border-t border-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      id="paths"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="section-heading mb-8 sm:mb-10">
          <h2 className="leading-[1.15] tracking-[-.02em] text-3xl sm:text-4xl lg:text-5xl">
            Find Your Next Challenge
          </h2>
          <p className="text-sm sm:text-base">
            Explore practical projects and learning paths across the
            technologies you want to master.
          </p>
        </div>
        <div
          className="grid-learn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          id="projects"
        >
          <Link to="./login" className="learning-card block" href="#">
            <span className="level">Beginner</span>
            <h3 className="leading-[1.15] tracking-[-.02em]">HTML and CSS</h3>
            <p>Structure pages and style layouts that work on every screen.</p>
            <span className="more">Explore Projects{" ->"}</span>
          </Link>
          <Link to="./login" className="learning-card block" href="#">
            <span className="level">Beginner</span>
            <h3 className="leading-[1.15] tracking-[-.02em]">JavaScript</h3>
            <p>Add logic and interactivity to the things you build.</p>
            <span className="more">Explore Projects{" ->"}</span>
          </Link>
          <Link
            to="./login"
            className="learning-card block md:max-lg:col-span-2"
            href="#"
          >
            <span className="level">Intermediate</span>
            <h3 className="leading-[1.15] tracking-[-.02em]">React.js</h3>
            <p>Compose reusable components and manage application state.</p>
            <span className="more">
              Explore Projects{" "}
              <svg aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;