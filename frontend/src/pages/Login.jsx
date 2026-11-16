import React, { useContext, useState } from "react";
import LoginAside from "../component/LoginAside";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("login");
  const {token , setToken} = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("called !!!");
    setToken(true);
    localStorage.setItem("token", token);
    console.log(token);
    navigate("/");
  }
  return (
    <>
      <div className="w-full flex justify-between ">
        <LoginAside />
        <main className="flex bg-white items-center justify-center flex-1 w-[70%] px-5 py-10 sm:px-8">
            <div className="w-full max-w-md">
              
              <div className="rounded-2xl border border-slate-200 text-black p-6 shadow-sm sm:p-8">
                <h1 className="text-2xl font-semibold tracking-tight">
                  {state == "login" ? "Welcome back to Skillora" : "Start learning with Skillora" }
                </h1>
                <p className="mt-1.5 text-slate-600">
                  Continue your learning journey.
                </p>
                {state == "login" ? <form onSubmit={handleSubmit} className="mt-7 space-y-5" >
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Email address
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        placeholder="name@example.com"
                        aria-describedby="email-error"
                        aria-invalid="false"
                        className=" w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30"
                      />
                    </div>
                    <p
                      id="email-error"
                      className="mt-1.5 hidden text-sm text-red-700"
                    ></p>
                  </div>
                  <div>
                    <label
                      for="password"
                      className=" text-sm font-medium text-slate-800"
                    >
                      Password
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        placeholder=""
                        aria-describedby="password-error"
                        aria-invalid="false"
                        className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 pr-16"
                      />
                      <button
                        type="button"
                        data-toggle="password"
                        aria-pressed="false"
                        aria-label="Show password"
                        className="absolute inset-y-0 right-0 rounded-r-lg px-3.5 text-sm font-medium text-slate-600 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                      >
                        Show
                      </button>
                    </div>
                    <p
                      id="password-error"
                      className="mt-1.5 hidden text-sm text-red-700"
                    ></p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <label className="flex items-center gap-2 text-sm text-slate-700">
                      <input
                        id="remember"
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      Remember me
                    </label>
                    <a
                      href="forgot-password.html"
                      className="text-sm font-medium text-indigo-700 underline-offset-2 hover:underline focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-indigo-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    onSubmit={()=> handleSubmit}
                    data-label="Log in"
                    data-loading="Logging in…"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <svg
                      data-spinner
                      className="hidden h-4 w-4 animate-spin motion-reduce:animate-none"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        stroke-opacity=".3"
                        stroke-width="3"
                      />
                      <path
                        d="M21 12a9 9 0 0 0-9-9"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span data-label>Log in</span>
                  </button>
                  
                </form> : <form onClick={handleSubmit} className="mt-7 space-y-5" >
                  <div>
                    <label
                      for="name"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Full name
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Asha Mehta"
                        className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Email address
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Password
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 pr-16"
                      />
                      <button
                        type="button"
                        data-toggle="password"
                        className="absolute inset-y-0 right-0 rounded-r-lg px-3.5 text-sm font-medium text-slate-600 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                      >
                        Show
                      </button>
                    </div>
                    <div id="password-hint" className="mt-2.5">
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        <span
                          data-bar
                          className="h-1.5 flex-1 rounded-full bg-slate-200"
                        ></span>
                        <span
                          data-bar
                          className="h-1.5 flex-1 rounded-full bg-slate-200"
                        ></span>
                        <span
                          data-bar
                          className="h-1.5 flex-1 rounded-full bg-slate-200"
                        ></span>
                        <span
                          data-bar
                          className="h-1.5 flex-1 rounded-full bg-slate-200"
                        ></span>
                      </div>
                      <p
                        id="strength-label"
                        className="mt-1 min-h-5 text-xs font-medium text-slate-700"
                        aria-live="polite"
                      ></p>
                      <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-0.5 text-xs">
                        <li
                          data-rule="len"
                          data-text="8+ characters"
                          className="text-slate-500"
                        >
                          • 8+ characters
                        </li>
                        <li
                          data-rule="upper"
                          data-text="One uppercase letter"
                          className="text-slate-500"
                        >
                          • One uppercase letter
                        </li>
                        <li
                          data-rule="lower"
                          data-text="One lowercase letter"
                          className="text-slate-500"
                        >
                          • One lowercase letter
                        </li>
                        <li
                          data-rule="num"
                          data-text="One number"
                          className="text-slate-500"
                        >
                          • One number
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <label
                      for="confirm"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Confirm password
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        id="confirm"
                        name="confirm"
                        type="password"
                        required
                        placeholder=""
                        className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 pr-16"
                      />
                      <button
                        type="button"
                        data-toggle="confirm"
                        aria-pressed="false"
                        aria-label="Show password"
                        className="absolute inset-y-0 right-0 rounded-r-lg px-3.5 text-sm font-medium text-slate-600 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                      >
                        Show
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="flex items-start gap-2.5 text-sm text-slate-700">
                      <input
                        id="terms"
                        type="checkbox"
                        required
                        aria-describedby="terms-error"
                        aria-invalid="false"
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <span>
                        I agree to the &nbsp;
                        <a
                          className="font-medium text-indigo-700 underline-offset-2 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-indigo-600"
                        >
                          Terms of Service
                        </a>&nbsp;
                        and&nbsp;
                        <a
                          className="font-medium text-indigo-700 underline-offset-2 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-indigo-600"
                        >
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 "
                  >
                    <span data-label>Create account</span>
                  </button>
                </form>
                }

                <p className="mt-6 text-center text-sm text-slate-600">
                  {state == "login" ? "Don't have an account? " :  "Already have an account? "}
                  <button onClick={()=> setState((state) => state == "login" ? "signup" : "login")}
                    className="font-medium text-indigo-700 underline-offset-2 hover:underline focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-indigo-600"
                  >
                    {state == "login" ? "Sign up" : "Login"}
                  </button>
                </p>
              </div>
            </div>
        </main>
      </div>
    </>
  );
};

export default Login;
