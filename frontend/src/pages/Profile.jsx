
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

// Sample student data
const student = {
  username: "Anshika Verma",
  email: "anshika@example.com",
  streak: 12,
  totalDays: 45,
};

// Sample certificates
const certificates = [
  {
    id: 1,
    title: "Frontend Development",
    category: "Web Development",
    issuedOn: "12 October 2026",
    credentialId: "SK-FE-001",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    category: "Programming",
    issuedOn: "28 October 2026",
    credentialId: "SK-JS-002",
  },
];

// Sample weekly activity
const weeklyActivity = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 3 },
  { day: "Wed", hours: 1 },
  { day: "Thu", hours: 4 },
  { day: "Fri", hours: 2 },
  { day: "Sat", hours: 5 },
  { day: "Sun", hours: 3 },
];

// Reusable statistic card
function StatCard({ icon, label, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-[#A78BFA]">
          {icon}
        </div>
      </div>

      <h3 className="mt-5 text-3xl font-bold text-[#17082F]">
        {value}
      </h3>

      <p className="mt-1 text-sm font-semibold text-[#17082F]">
        {label}
      </p>

      <p className="mt-1 text-xs text-[#9A91AC]">
        {subtitle}
      </p>
    </div>
  );
}

// Weekly activity component
function ActivityChart() {
  const maxHours = Math.max(...weeklyActivity.map((item) => item.hours));

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-7">
        <h3 className="text-lg font-bold text-[#17082F]">
          Learning activity
        </h3>
        <p className="mt-1 text-sm text-[#9A91AC]">
          Your learning consistency over the last 7 days
        </p>
      </div>

      <div className="flex h-40 items-end justify-between gap-3">
        {weeklyActivity.map((item) => (
          <div
            key={item.day}
            className="flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <span className="text-xs font-semibold text-[#9A91AC]">
              {item.hours}h
            </span>

            <div className="flex h-28 w-full items-end justify-center">
              <div
                className="w-full max-w-10 rounded-t-lg bg-[#A78BFA] transition-all duration-300 hover:bg-[#8B65E8]"
                style={{
                  height: `${(item.hours / maxHours) * 100}%`,
                  minHeight: "8px",
                }}
              />
            </div>

            <span className="text-xs text-[#9A91AC]">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 border-t border-purple-100 pt-4 text-sm text-[#9A91AC]">
        Total learning time:{" "}
        <span className="font-bold text-[#17082F]">
          {weeklyActivity.reduce((sum, item) => sum + item.hours, 0)} hours
        </span>
        {" "}this week
      </p>
    </div>
  );
}

// Certificate component
function CertificateCard({ certificate }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-purple-100 bg-white p-5 transition hover:shadow-lg sm:flex-row sm:items-center">

      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
        🏆
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-[#17082F]">
          {certificate.title}
        </h3>

        <p className="mt-1 text-sm text-[#9A91AC]">
          {certificate.category}
        </p>

        <p className="mt-2 text-xs text-[#9A91AC]">
          Issued: {certificate.issuedOn}
        </p>

        <p className="mt-1 break-all text-xs text-[#9A91AC]">
          ID: {certificate.credentialId}
        </p>
      </div>

      <span className="w-fit rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
        Completed
      </span>
    </div>
  );
}

// Main Profile Page
export default function ProfilePage() {
  const {plan} = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="min-h-screen bg-[#16052F] px-4 py-8 sm:px-6 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* Profile Header */}
        <section className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

            {/* Avatar */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#A78BFA] text-3xl font-bold text-white sm:h-24 sm:w-24">
              {student.username
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>

            {/* User Information */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-[#17082F]">
                  {student.username}
                </h2>

                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#7951D6]">
                  {plan}
                </span>
              </div>

              <p className="mt-2 break-all text-sm text-[#9A91AC]">
                {student.email}
              </p>

            </div>

            {/* Profile Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => alert("Connect your profile edit page here.")}
                className="rounded-full border border-[#A78BFA] px-5 py-2.5 text-sm font-semibold text-[#7951D6] transition hover:bg-purple-50"
              >
                Edit Profile
              </button>
            </div>

          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="mt-8 flex gap-7 overflow-x-auto border-b border-purple-300/20">
          <button
              key={"Overview"}
              type="button"
              className={`shrink-0 pb-4 text-sm font-semibold capitalize transition ${
                "border-[#A78BFA] text-[#A78BFA]"
                  
              }`}
            >
              Overview
              
            </button>
        </div>

          <div className="mt-8 space-y-8">

            {/* Statistics */}
            <section>
              <div className="mb-5">
                <h2 className="text-xl font-bold text-white">
                  Your learning at a glance
                </h2>

                <p className="mt-1 text-sm text-purple-200/60">
                  Here's how far you've come.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                

                <StatCard
                  icon="🔥"
                  label="Current Streak"
                  value={`${student.streak} Days`}
                  subtitle="Keep your streak alive"
                />
              </div>
              <section className="mt-8">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-white">
                My Certificates
              </h2>

              <p className="mt-1 text-sm text-purple-200/60">
                Your achievements and completed learning paths.
              </p>
            </div>

            {certificates.length > 0 ? (
              <div className="space-y-4">
                {certificates.map((certificate) => (
                  <CertificateCard
                    key={certificate.id}
                    certificate={certificate}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-white px-6 py-16 text-center">
                <div className="text-5xl">🏆</div>

                <h3 className="mt-5 text-lg font-bold text-[#17082F]">
                  No certificates yet
                </h3>

                <p className="mt-2 text-sm text-[#9A91AC]">
                  Complete your learning paths to earn your first certificate.
                </p>
              </div>
            )}

          </section>
            </section>

        

          </div>

       

        

      </div>
    </main>
  );
}
