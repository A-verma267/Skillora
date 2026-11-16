import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Explore = () => {
  return (
    <section
      className="section flex items-center justify-center border-t border-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      id="explore"
    >
      <div className="w-full max-w-7xl mx-auto min-w-0">
        <div className="section-heading mb-8 sm:mb-10">
          <h2 className="leading-[1.15] tracking-[-.02em] text-3xl sm:text-4xl lg:text-5xl">
            Everything You Need to Grow{" "}
          </h2>
          <p className="text-sm sm:text-base">
            From your first learning path to your next portfolio project,
            Skillora helps you move forward with purpose.
          </p>
        </div>
        <div className="slider-ctrl flex justify-end gap-2 mb-4">
          <button className="arrow" aria-label="Previous features">
            <ArrowBackIosIcon />
          </button>
          <button className="arrow -scale-x-100" aria-label="Next features">
            <ArrowBackIosIcon />
          </button>
        </div>
        <ul
          className="slider flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          tabIndex="0"
          aria-label="Skillora features, scroll horizontally"
        >
          <li className="feature-card shrink-0 snap-start basis-[85%] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)]">
            <h3 className="leading-[1.15] tracking-[-.02em]">
              Structured Learning Paths
            </h3>
            <p>
              Follow organized topic-by-topic roadmaps that take you from
              fundamentals to advanced concepts.
            </p>
          </li>
          <li className="feature-card shrink-0 snap-start basis-[85%] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)]">
            <h3 className="leading-[1.15] tracking-[-.02em]">
              Hands-On Projects
            </h3>
            <p>
              Practice your skills by building portfolio-worthy projects with
              clearly defined objectives.
            </p>
          </li>
          <li className="feature-card shrink-0 snap-start basis-[85%] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)]">
            <h3 className="leading-[1.15] tracking-[-.02em]">
              Personal Learning Dashboard
            </h3>
            <p>
              Organize selected projects, monitor progress, and keep track of
              what you have completed.
            </p>
          </li>
          <li className="feature-card shrink-0 snap-start basis-[85%] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)]">
            <h3 className="leading-[1.15] tracking-[-.02em]">
              AI-Powered Learning Tools
            </h3>
            <p>
              Use AI-assisted tools to support learning, explore ideas, and work
              through development challenges.
            </p>
          </li>
          <li className="feature-card shrink-0 snap-start basis-[85%] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)]">
            <h3 className="leading-[1.15] tracking-[-.02em]">
              Career and Portfolio Growth
            </h3>
            <p>
              Develop practical experience and create projects that demonstrate
              your capabilities to recruiters and clients.
            </p>
          </li>
          <li className="feature-card shrink-0 snap-start basis-[85%] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)]">
            <h3 className="leading-[1.15] tracking-[-.02em]">
              Freelancing and Monetization
            </h3>
            <p>
              Explore how practical skills can support freelance work, digital
              products, and other income opportunities.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Explore;