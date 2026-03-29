import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 relative overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      {/* Main Container - Aligned to top with md:items-start */}
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
              , a business analyst turning data into decisions.
            </h1>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              I am a passionate and results-driven Business Analyst with a keen
              eye for detail and a strong focus on data-driven decision-making.
              I enjoy uncovering insights that drive business growth and
              operational efficiency.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:ash.kannangara@gmail.com"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:scale-105"
            >
              Let&apos;s work together
            </a>

            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/40 px-6 py-2.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-emerald-300 hover:text-emerald-200 hover:scale-105"
            >
              View projects
            </a>
          </div>
        </section>

        {/* Right Card */}
        <section className="w-full max-w-sm">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-2xl backdrop-blur-xl">

            {/* Image Header - High visibility */}
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
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                  Snapshot
                </p>
                <p className="text-sm leading-relaxed text-slate-200">
                  I am a Business Analyst who transforms data into actionable
                  insights to support informed decision-making. I analyze
                  business processes and deliver practical, data-driven
                  solutions that drive efficiency and growth.
                </p>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400 mb-2">
                  Focus Areas
                </dt>
                <dd className="flex flex-wrap gap-2 text-slate-100">
                  {[
                    "Requirements",
                    "Process Optimization",
                    "Data-driven Decision Making",
                    "Production & Operations",
                    "Supply Chain & Planning",
                    "Finance & Costing",
                    "Quality & Compliance",
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

      {/* Projects - Restored Original Detailed Text */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20 scroll-mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 mb-8">
          Featured projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Real-Time Delivery Insights Dashboard MAS-Bodyline,Sri Lanka",
              desc: "Developed an interactive dashboard using Microsoft Power BI to monitor production and delivery performance based on purchase order completion. The solution provides visibility into key metrics such as order quantity, finished goods, and work-in-progress (WIP), along with closure status and department-wise responsibility. Integrated multiple data points (VSM, modules, timelines, and operational KPIs) to enable real-time tracking and decision-making. The dashboard helps stakeholders identify production bottlenecks, monitor open vs closed orders, and improve operational efficiency through actionable insights and data-driven analysis."
            },
            {
              title: "PED Performance Analytics Dashboard MAS-Bodyline,Sri Lanka",
              desc: "Designed and developed an interactive performance monitoring dashboard using Microsoft Power BI to track PED (Planned vs Execution Delivery) performance across multiple production modules and weeks. The dashboard utilizes a heatmap visualization to highlight open and closed statuses, enabling quick identification of delays, bottlenecks, and high-risk modules. Integrated filters such as value stream, closure status, and PED categories to allow dynamic data exploration and drill-down analysis. This solution supports operational teams in monitoring weekly performance trends, improving delivery timelines, and driving data-driven decision-making through clear visual insights."
            },
            {
              title: "PO Completion VSM Insights Dashboard MAS-Bodyline,Sri Lanka",
              desc: "Developed an interactive analytics dashboard using Microsoft Power BI to monitor purchase order (PO) completion performance across value streams and production modules. The dashboard provides visibility into order-wise completion percentages, highlighting gaps across multiple operational stages and identifying responsible departments such as Production, MQA, and RMW. Incorporated detailed metrics including order quantity, finished goods, WIP, and off-percentage (OFF%), along with department-wise WIP analysis to track bottlenecks. Enabled users to drill down into order-level data with actionable insights, supporting performance monitoring, delay analysis, and continuous process improvement."
            },
            {
              title: "Customer Complaint Analysis Hayleys Fabric,Sri Lanka",
              desc: "Identified root causes of customer complaints and improved processes using structured reporting and data analysis. Delivered insights that supported better decision-making and process improvements."
            }
          ].map((project, i) => (
            <div key={i} className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur hover:border-emerald-400/40 transition-all duration-300 shadow-lg">
              <p className="font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">{project.title}</p>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center backdrop-blur-xl shadow-xl">
          <h2 className="text-lg font-semibold text-slate-200 mb-4">Get in touch</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:ash.kannangara@gmail.com" className="rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-105">Email Me</a>
            <a href="https://www.linkedin.com/in/ashika-kannangara-425aa0260/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-600 bg-slate-900/40 px-6 py-2.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-sky-400 hover:text-sky-300 hover:scale-105">LinkedIn Profile</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Ashika Kannangara. All rights reserved.
      </footer>
    </div>
  );
}