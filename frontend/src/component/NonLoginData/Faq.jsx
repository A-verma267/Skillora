import React, { useState } from "react";

const faqs = [
  {
    q: "What is Skillora?",
    a: "Skillora is a project-based learning platform designed to help learners develop technical skills through structured learning paths, practical projects, and progress tracking.",
  },
  {
    q: "Is Skillora suitable for beginners?",
    a: "Yes. Learners can start with foundational topics and beginner-friendly projects before progressing to more advanced challenges.",
  },
  {
    q: "How do I start learning?",
    a: "Create an account, explore the available learning paths, choose a project, and add it to your dashboard.",
  },
  {
    q: "Why do I need to complete two starter projects?",
    a: "The two-project requirement is designed to help learners establish a foundation before accessing additional projects. The specific starter projects can be defined by the platform.",
  },
  {
    q: "What is the difference between Free, Pro, and Premium?",
    a: "Skillora offers three plans for different learning needs. The exact feature differences and pricing will be displayed in the final plan comparison.",
  },
  {
    q: "Does Skillora offer AI tools?",
    a: "Skillora is designed to include AI-assisted learning tools. The available tools and their plan eligibility will be specified once finalized.",
  },
  {
    q: "Can I use Skillora to improve my portfolio?",
    a: "Yes. Completing practical projects can help you develop work samples that demonstrate your technical skills.",
  },
  {
    q: "Can Skillora help me earn money?",
    a: "Skillora can help you develop skills relevant to freelancing and other professional opportunities. Earnings are not guaranteed and depend on your skills, execution, and market conditions.",
  },
  {
    q: "Can I track my learning progress?",
    a: "The platform is designed to let learners organize their selected projects and monitor their progress through a personal dashboard.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "The platform may support plan upgrades depending on the final subscription implementation. Billing options will be confirmed before launch.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="section flex items-center justify-center border-t border-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      id="faq"
    >
      <div className="w-full max-w-3xl lg:max-w-4xl mx-auto narrow">
        <div className="section-heading mb-8 sm:mb-10">
          <h2 className="leading-[1.15] tracking-[-.02em] text-3xl sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base">
            Everything you need to know before starting your Skillora journey.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
                <h3 className="leading-[1.15] tracking-[-.02em]">
                  <button
                    className="w-full text-left text-sm sm:text-base wrap-break-word"
                    onClick={() => handleToggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`a${i + 1}`}
                    id={`q${i + 1}`}
                  >
                    {item.q}
                  </button>
                </h3>
                <div
                  className="pt-0.5 px-4 pb-3.25 text-sm sm:text-base text-[#cccccc] transition-all duration-150"
                  id={`a${i + 1}`}
                  role="region"
                  aria-labelledby={`q${i + 1}`}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;