
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    id: "free",
    name: "Free",
    tagline: "An accessible starting point for everyone.",
    description:
      "Start exploring Skillora, discover learning paths, and build your learning routine.",
    features: [
      "Access to selected learning paths",
      "Access to designated starter projects",
      "Basic progress tracking",
      "Personal learning dashboard",
    ],
    price: "Free",
    period: "Forever",
    recommended: false,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For learners who want to expand their practical experience.",
    description:
      "Build more projects and develop your skills with a broader learning experience.",
    features: [
      "Expanded project access",
      "Additional learning paths",
      "Enhanced progress tracking",
      "Additional learning tools",
    ],
    price: "Coming soon",
    period: "",
    recommended: true,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "For learners seeking the most comprehensive experience.",
    description:
      "Access the most complete learning experience available on Skillora.",
    features: [
      "The broadest available project access",
      "Advanced learning resources",
      "Enhanced AI-assisted tools",
      "Additional premium learning features",
    ],
    price: "Coming soon",
    period: "",
    recommended: false,
  },
];

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (!selectedPlan) return;

    navigate("/checkout", {
      state: { plan: selectedPlan },
    });
  };

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-10">

      {/* Header */}
      <section className="mx-auto mb-12 max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-muted">
          Skillora Membership
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Choose your learning journey
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Select a plan that matches your learning goals.
          Unlock new opportunities, build projects, and
          accelerate your growth with Skillora.
        </p>
      </section>

      {/* Plans */}
      <section
        className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
        aria-label="Available subscription plans"
      >
        {plans.map((plan) => {
          const isSelected = selectedPlan?.id === plan.id;

          return (
            <button
              key={plan.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => setSelectedPlan(plan)}
              className={`relative flex w-full flex-col rounded-[28px] border-2 p-6 text-left transition-all duration-300 sm:p-8 ${
                isSelected
                  ? "border-brown-container bg-white shadow-[0_0_30px_rgba(167,139,250,0.2)]"
                  : "border-transparent bg-white hover:border-brown-secondary/60 hover:-translate-y-1"
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <span className="absolute -top-3 right-6 rounded-full bg-brown-primary px-4 py-1.5 text-xs font-bold tracking-wide text-white">
                  RECOMMENDED
                </span>
              )}

              {/* Plan Header */}
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-bold text-brown-primary">
                  {plan.name}
                </h2>

                {isSelected && (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brown-primary text-sm text-white">
                    ✓
                  </span>
                )}
              </div>

              <h3 className="mt-5 min-h-13 text-base font-bold leading-7 text-brown-secondary">
                {plan.tagline}
              </h3>

              <p className="mt-3 min-h-18 text-sm leading-6 text-muted">
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="my-7 border-y border-purple-100 py-5">
                <p className="text-2xl font-bold text-brown-primary">
                  {plan.price}
                </p>

                {plan.period && (
                  <p className="mt-1 text-sm text-[#9A91AC]">
                    {plan.period}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="flex-1">
                <p className="mb-5 text-sm font-bold uppercase tracking-wider text-brown-secondary">
                  What's included
                </p>

                <ul className="space-y-5">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-brown-secondary"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D8F5E9] text-xs font-bold text-[#07845D]">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Selection Footer */}
              <div
                className={`mt-9 rounded-full border py-3 text-center text-sm font-semibold transition-all ${
                  isSelected
                    ? "border-brown-secondary bg-[#A78BFA]/10 text-brown-secondary"
                    : "border-purple-100 text-brown-secondary"
                }`}
              >
                {isSelected ? "Selected Plan" : "Select this plan"}
              </div>
            </button>
          );
        })}
      </section>

      {/* Bottom Proceed Section */}
      <section className="mx-auto mt-12 max-w-3xl text-center">

        <p className="mb-5 text-sm text-muted">
          {selectedPlan
            ? `You've selected the ${selectedPlan.name} plan. Continue to review your selection.`
            : "Select a subscription plan to continue."}
        </p>

        <button
          type="button"
          onClick={handleProceed}
          disabled={!selectedPlan}
          className="w-full rounded-full bg-brown-container px-8 py-4 text-base font-bold text-white shadow-lg shadow-brown-primary/30 transition-all duration-300 hover:bg-brown-primary hover:shadow-brown-primary/20 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:min-w-75"
        >
          {selectedPlan
            ? `Proceed with ${selectedPlan.name}`
            : "Select a plan to proceed"}
          <span className="ml-2">→</span>
        </button>

        <p className="mt-6 text-xs leading-6 text-muted">
          Pricing and plan details will be announced.
          Feature lists shown are placeholders.
        </p>
      </section>

    </main>
  );
}
