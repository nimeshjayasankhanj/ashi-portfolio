import Image from "next/image";
// Using Feather Icons set from react-icons for a clean, professional look
import { FiMail, FiLinkedin, FiExternalLink, FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 relative overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      {/* Main Container */}
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pt-12 pb-16 md:flex-row md:items-start md:justify-between md:pt-20 md:pb-24">

        {/* Hero / Intro */}
        <section className="max-w-xl space-y-6 md:pt-2">
          <p className="inline-flex rounded-full border border-slate-700/70 bg-slate-900/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-300 backdrop-blur-md shadow-sm">
            Business Analyst · Portfolio
          </p>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Ashika Kannangara
              </span>
              , a Business Analyst turning data into decisions.
            </h1>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              I am a passionate and results-driven Business Analyst with a keen
              eye for detail and a strong focus on data-driven decision making.
              I enjoy uncovering insights that drive business growth and
              operational efficiency.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:ash.kannangara@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:scale-105"
            >
              <FiMail className="text-lg" />
              Let&apos;s work together
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/40 px-6 py-2.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-emerald-300 hover:text-emerald-200 hover:scale-105"
            >
              View projects
              <FiArrowRight />
            </a>
          </div>
        </section>

        {/* Right Card */}
        <section className="w-full max-w-sm">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-2xl backdrop-blur-xl">

            {/* Image Header */}
            <div className="relative h-80 w-full transition-all duration-500">
              <Image
                src='/ashi.jpeg'
                alt="Ashika Kannangara"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            <div className="p-6 relative space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                    Snapshot
                  </p>
                  <p className="text-sm leading-relaxed text-slate-200">
                    I transform data into actionable insights to support informed decision making.
                  </p>
                </div>
                {/* Social Quick Links */}
                <div className="flex gap-3">
                  <a href="mailto:ash.kannangara@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    <FiMail size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/ashika-kannangara-425aa0260/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400 mb-2">
                  Focus Areas
                </dt>
                <dd className="flex flex-wrap gap-2 text-slate-100">
                  {[
                    "Requirements",
                    "Process Optimization",
                    "Supply Chain",
                    "Finance & Costing",
                    "Data & Reporting",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-[10px] backdrop-blur transition hover:border-emerald-400 hover:text-emerald-300"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>

              <div className="space-y-4">
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Top Tools
                </dt>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <p className="text-emerald-400 font-bold mb-1 italic">Analytics</p>
                    <p>Power BI / Tableau</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <p className="text-sky-400 font-bold mb-1 italic">Enterprise</p>
                    <p>SAP / Jira</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20 scroll-mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 mb-8">
          Featured projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Real-Time Delivery Insights Dashboard",
              location: "MAS-Bodyline, Sri Lanka",
              desc: "Developed an interactive dashboard using Microsoft Power BI to monitor production and delivery performance. Integrated multiple data points to enable real-time tracking and decision-making."
            },
            {
              title: "PED Performance Analytics Dashboard",
              location: "MAS-Bodyline, Sri Lanka",
              desc: "Designed an interactive dashboard using heatmaps to highlight bottlenecks across production modules, driving data-driven improvements in delivery timelines."
            },
            {
              title: "PO Completion VSM Insights",
              location: "MAS-Bodyline, Sri Lanka",
              desc: "Analytics dashboard to monitor purchase order completion across value streams, identifying departmental bottlenecks in Production, MQA, and RMW."
            },
            {
              title: "Customer Complaint Analysis",
              location: "Hayleys Fabric, Sri Lanka",
              desc: "Identified root causes of customer complaints using structured reporting to support process improvements and better decision-making."
            }
          ].map((project, i) => (
            <div key={i} className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur hover:border-emerald-400/40 transition-all duration-300 shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">{project.title}</p>
                <FiExternalLink className="text-slate-500 group-hover:text-emerald-300" />
              </div>
              <p className="text-[10px] uppercase tracking-wider text-emerald-500/80 mb-3">{project.location}</p>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-10 text-center backdrop-blur-xl shadow-xl">
          <h2 className="text-2xl font-semibold text-slate-100 mb-2">Let&apos;s Connect</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Currently open to new opportunities and collaborations in Business Analysis and Data Strategy.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ash.kannangara@gmail.com"
              className="group flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400 hover:scale-105"
            >
              <FiMail className="text-lg transition-transform group-hover:-rotate-12" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ashika-kannangara-425aa0260/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-sky-400 hover:text-sky-300 hover:scale-105"
            >
              <FiLinkedin className="text-lg" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Ashika Kannangara. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}