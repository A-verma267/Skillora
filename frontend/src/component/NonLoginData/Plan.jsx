import React from "react";
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <section
      className="section flex items-center justify-center border-t border-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      id="pricing"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="section-heading mb-8 sm:mb-10">
          <h2 className="leading-[1.15] tracking-[-.02em] text-3xl sm:text-4xl lg:text-5xl">
            Start Free. Grow at Your Pace.
          </h2>
          <p className="text-sm sm:text-base">
            Choose the learning experience that matches your current goals.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <article className="pricing-card text-black flex flex-col">
            <h3 className="leading-[1.15] tracking-[-.02em] font-semibold">
              Free
            </h3>
            <p className="price">An accessible starting point for everyone.</p>
            <p>
              Start exploring Skillora, discover learning paths, and build your
              learning routine.
            </p>
            <ul className="checks">
              <li>Access to selected learning paths</li>
              <li>Access to designated starter projects</li>
              <li>Basic progress tracking</li>
              <li>Personal learning dashboard</li>
            </ul>
            <Link to="./plans" className="btn btn-primary mt-auto text-center">
              Get Started Free
            </Link>
          </article>
          <article className="pricing-card featured text-black flex flex-col">
            <h3 className="leading-[1.15] tracking-[-.02em] font-bold">Pro</h3>
            <p className="price">
              For learners who want to expand their practical experience.
            </p>
            <p>
              Build more projects and develop your skills with a broader
              learning experience.
            </p>
            <ul className="checks">
              <li>Expanded project access</li>
              <li>Additional learning paths</li>
              <li>Enhanced progress tracking</li>
              <li>Additional learning tools</li>
            </ul>
            <Link
              to="./plans"
              className="btn btn-secondary mt-auto text-center scale-100 hover:scale-102 duration-500"
            >
              Explore Pro
            </Link>
          </article>
          <article className="pricing-card text-black flex flex-col md:max-lg:col-span-2 md:max-lg:max-w-md md:max-lg:mx-auto md:max-lg:w-full">
            <h3 className="leading-[1.15] tracking-[-.02em] font-semibold">
              Premium
            </h3>
            <p className="price">
              For learners seeking the most comprehensive experience.
            </p>
            <p>
              Access the most complete learning experience available on
              Skillora.
            </p>
            <ul className="checks">
              <li>The broadest available project access</li>
              <li>Advanced learning resources</li>
              <li>Enhanced AI-assisted tools</li>
              <li>Additional premium learning features</li>
            </ul>
            <Link
              to="./plans"
              className="btn btn-secondary mt-auto text-center scale-100 hover:scale-102 duration-500"
            >
              Explore Premium
            </Link>
          </article>
        </div>
        <p className="note mt-6 text-sm">
          Pricing and plan details will be announced. Feature lists shown are
          placeholders.
        </p>
      </div>
    </section>
  );
};

export default Plan;