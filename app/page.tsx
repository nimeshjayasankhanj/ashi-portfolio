export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-24">
        {/* Hero / Intro */}
        <section className="max-w-xl space-y-6">
          <p className="inline-flex rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 shadow-sm backdrop-blur">
            Business Analyst · Portfolio
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                Ashika Kannangara
              </span>
              , a business analyst turning data into decisions.
            </h1>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              I am a passionate and results-driven Business Analyst with a keen
              eye for detail and a deep understanding of data-driven
              decision-making. I love uncovering insights that drive business
              growth and operational efficiency.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              Let&apos;s work together
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-slate-600 px-6 py-2.5 text-sm font-medium text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              View projects
            </a>
          </div>
        </section>

        {/* Right column card */}
        <section className="mt-10 w-full max-w-sm md:mt-0">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/70 backdrop-blur">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="relative space-y-5">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                  Snapshot
                </p>
                <p className="text-lg font-semibold text-slate-50">
                  Business Analyst · 4+ years of experience
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    Focus areas
                  </dt>
                  <dd className="text-slate-100">
                    Requirements, process optimization, data-driven decision-making
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    Experience
                  </dt>
                  <dd className="text-slate-100">4+ years</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    Industries
                  </dt>
                  <dd className="text-slate-100">
                    Apparel · Manufacturing · Technology
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    Tools
                  </dt>
                  <dd className="text-slate-100">
                    Excel · SQL · Tableau · Power BI · Jira
                  </dd>
                </div>
              </dl>

              <div className="mt-4 border-t border-slate-800 pt-4 text-xs text-slate-300">
                Worked with: MAS · IFS · Hayleys Fabric PLC
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Skills & Projects preview */}
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pb-20 md:flex-row">
        <div className="w-full space-y-4 md:w-1/2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Summary & skills
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            I specialize in gathering and analyzing requirements, bridging the
            gap between stakeholders and technical teams, and delivering
            solutions aligned with organizational goals. I enjoy collaborating
            with diverse teams to solve complex challenges and turn insights
            into action.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-100">
            {[
              "Stakeholder communication",
              "Requirements gathering",
              "Process mapping & PFDs",
              "Dashboards & KPIs",
              "Data analysis & reporting",
              "Agile & Waterfall",
              "Customer relations",
              "Problem solving",
              "Documentation",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div id="projects" className="w-full space-y-4 md:w-1/2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Featured projects
          </h2>
          <div className="space-y-3 text-sm text-slate-200">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="font-semibold text-slate-50">
                Real-time PO Completion Tracking Dashboard · MAS Bodyline 2
              </p>
              <p className="mt-1 text-slate-300">
                Developed a real-time Power BI dashboard to track Production
                Order completion and delivery status across VSM-01 and VSM-02.
                Transformed an Excel-based PO Completion sheet into a dynamic,
                automated view, improving visibility of delays, responsible
                departments, and delivery-affected percentages to support
                faster, data-driven decision-making.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="font-semibold text-slate-50">
                FTT Calculation · Hayleys Fabric PLC
              </p>
              <p className="mt-1 text-slate-300">
                Calculated First Time Through (FTT) rates for Nike production,
                analyzing efficiency and output quality in the initial cycle.
                Prepared and distributed detailed FTT reports to Heads of
                Departments, enabling informed decisions and continuous
                improvement initiatives.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="font-semibold text-slate-50">
                A New Concept for Ceylon Tea Growers
              </p>
              <p className="mt-1 text-slate-300">
                Coordinated and helped build a digital tea management system
                using Node.js, MySQL, React, and Flutter to modernize Sri
                Lanka&apos;s tea supply chain. Introduced admin dashboards and
                mobile/web apps for collectors, growers, and factories,
                reducing data entry time and errors while improving transparency
                and decision-making.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="font-semibold text-slate-50">
                Customer Complaint Analysis · Hayleys Fabric PLC
              </p>
              <p className="mt-1 text-slate-300">
                Collected and documented customer complaints in a structured
                log, analyzed patterns and root causes, and presented insights
                to senior stakeholders. Supported corrective actions with clear
                reports and dashboards to improve customer satisfaction and
                process reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
