import React from "react";
import { Link } from "react-router-dom";

const LoginAside = () => {
  return (
    <aside
      className=" w-[30%]  relative hidden overflow-hidden p-12 text-white lg:flex lg:w-[46%] lg:flex-col lg:justify-between"
      aria-label="About Skillora"
    >
      <div>
        <h2 className="max-w-md text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
          Your next skill starts here.
        </h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-indigo-100/80">
          Learn HTML, CSS, JavaScript, React, and the MERN stack through
          structured courses that build on each other, one project at a time.
        </p>
        <svg
          viewBox="0 0 420 200"
          className="mt-10 w-full max-w-md"
          role="img"
          aria-label="A ladder of courses growing from HTML to Full-Stack"
        >
          <g
            font-family="system-ui,sans-serif"
            font-size="13"
            font-weight="600"
          >
            <rect x="0" y="0" width="150" height="30" rx="8" fill="#a5b4fc" />
            <text x="14" y="20" fill="#1e1b4b">
              HTML &amp; CSS
            </text>
            <rect x="60" y="42" width="190" height="30" rx="8" fill="#818cf8" />
            <text x="74" y="62" fill="#1e1b4b">
              JavaScript
            </text>
            <rect
              x="120"
              y="84"
              width="200"
              height="30"
              rx="8"
              fill="#6366f1"
            />
            <text x="134" y="104" fill="#fff">
              React.js
            </text>
            <rect
              x="180"
              y="126"
              width="210"
              height="30"
              rx="8"
              fill="#4f46e5"
              stroke="#a5b4fc"
              stroke-opacity=".5"
            />
            <text x="194" y="146" fill="#fff">
              MERN Stack
            </text>
            <rect
              x="230"
              y="168"
              width="190"
              height="30"
              rx="8"
              fill="#312e81"
              stroke="#818cf8"
            />
            <text x="244" y="188" fill="#e0e7ff">
              Full-Stack
            </text>
          </g>
        </svg>
      </div>
      <p className="text-sm text-indigo-200/70">
        Structured courses. Real projects. Skills employers ask for.
      </p>
    </aside>
  );
};

export default LoginAside;
