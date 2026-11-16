
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedPlan = location.state?.plan;

  if (!selectedPlan) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#16052F] px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">
            No plan selected
          </h1>

          <button
            onClick={() => navigate("/plans")}
            className="mt-6 rounded-full bg-[#A78BFA] px-7 py-3 font-semibold text-white"
          >
            Choose a Plan
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#16052F] px-4 py-12">

      <div className="w-full max-w-lg rounded-[28px] bg-white p-8 shadow-2xl sm:p-10">

        <p className="text-sm font-semibold uppercase tracking-widest text-[#A78BFA]">
          Skillora Checkout
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[#17082F]">
          Review your plan
        </h1>

        <div className="mt-8 rounded-2xl border border-purple-100 bg-purple-50/50 p-6">

          <p className="text-sm text-gray-500">
            Selected subscription
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#17082F]">
            {selectedPlan.name}
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            {selectedPlan.description}
          </p>

          <p className="mt-5 text-xl font-bold text-[#A78BFA]">
            {selectedPlan.price}
          </p>

        </div>

        <button
          onClick={() => navigate("/plans")}
          className="mt-8 w-full rounded-full border border-[#A78BFA] py-3 font-semibold text-[#7951D6] hover:bg-purple-50"
        >
          Change Plan
        </button>

        <button
          disabled
          className="mt-3 w-full cursor-not-allowed rounded-full bg-[#A78BFA] py-3 font-bold text-white opacity-50"
        >
          Payment integration coming soon
        </button>

      </div>
    </main>
  );
}
