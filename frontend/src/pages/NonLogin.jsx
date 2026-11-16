import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroSection from "../component/NonLoginData/HeroSection";
import Explore from "../component/NonLoginData/Explore";
import Faq from "../component/NonLoginData/Faq";
import Plan from "../component/NonLoginData/Plan";
import Project from "../component/NonLoginData/Project";
import PersonIcon from "@mui/icons-material/Person";
import NetworkPingIcon from "@mui/icons-material/NetworkPing";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import VerifiedIcon from "@mui/icons-material/Verified";
import LockIcon from "@mui/icons-material/Lock";

const NonLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <main id="main" className="overflow-x-hidden">
        <HeroSection />

        <Explore />

        <section
          className="section flex items-center justify-center border-t border-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
          id="how"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="section-heading mb-8 sm:mb-10">
              <h2 className="leading-[1.15] tracking-[-.02em] text-3xl sm:text-4xl lg:text-5xl">
                Your Learning Journey, Simplified
              </h2>
              <p className="text-sm sm:text-base">
                Choose your direction, build your workspace, and make consistent
                progress.
              </p>
            </div>
            <ol className="steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              <li>
                <span className="step-ico">
                  <PersonIcon />
                </span>
                <span className="step-num">Step 01</span>
                <h3 className="leading-[1.15] tracking-[-.02em]">
                  Create Your Account
                </h3>
                <p>
                  Sign up for Skillora and set up your personal learning space.
                </p>
              </li>
              <li>
                <span className="step-ico">
                  <NetworkPingIcon />
                </span>
                <span className="step-num">Step 02</span>
                <h3 className="leading-[1.15] tracking-[-.02em]">
                  Choose Your Project
                </h3>
                <p>
                  Explore available learning paths and select a project aligned
                  with your goals.
                </p>
              </li>
              <li>
                <span className="step-ico">
                  <BackupTableIcon />
                </span>
                <span className="step-num">Step 03</span>
                <h3 className="leading-[1.15] tracking-[-.02em]">
                  Add It to Your Dashboard
                </h3>
                <p>
                  Add the selected project to your personal dashboard so you can
                  organize and track your work.
                </p>
              </li>
              <li>
                <span className="step-ico">
                  <VerifiedIcon />
                </span>
                <span className="step-num">Step 04</span>
                <h3 className="leading-[1.15] tracking-[-.02em]">
                  Learn, Build, and Complete
                </h3>
                <p>
                  Follow the project tasks, practice the required concepts, and
                  mark your progress as you work toward completion.
                </p>
              </li>
            </ol>
            <aside className="callout flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-8">
              <LockIcon />
              <p>
                <strong>Starter milestone.</strong> Complete your first two
                starter projects to unlock your next learning opportunities.
              </p>
            </aside>
          </div>
        </section>

        <Project />

        <Plan />

        <Faq />
      </main>
    </>
  );
};

export default NonLogin;