"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaXTwitter, FaGithub, FaEnvelope } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/avinaash",
    icon: <FaLinkedin className="h-5 w-5" />
  },
  {
    label: "Twitter",
    href: "https://x.com/avinaash",
    icon: <FaXTwitter className="h-5 w-5" />
  },
  {
    label: "GitHub",
    href: "https://github.com/avinaash",
    icon: <FaGithub className="h-5 w-5" />
  },
  {
    label: "Email",
    href: "mailto:hello@avinaash.com",
    icon: <FaEnvelope className="h-5 w-5" />
  }
];

const experience = [
  {
    role: "Founder & CEO",
    org: "Nimble Systems",
    period: "2022 → Present",
    description:
      "Building autonomous product copilots that help PLG teams ship experiments 5× faster by pairing AI-led prioritization with rapid iteration tooling."
  },
  {
    role: "Head of Product",
    org: "Trailblaze",
    period: "2019 → 2022",
    description:
      "Scaled product org from 4 to 40 while growing ARR from $2.3M to $31M. Launched experimentation platform adopted across 1K+ enterprise teams."
  },
  {
    role: "Product Engineer",
    org: "Stripe",
    period: "2016 → 2019",
    description:
      "Led engineering on Stripe Billing Insights. Introduced ML-driven revenue recovery that unlocked additional $120M GMV for early customers."
  }
];

const projects = [
  {
    name: "Velocity OS",
    tagline: "AI-native workspace for high-tempo builders",
    description:
      "Opinionated operating system that combines daily planning, async status, and live metrics. Designed for hybrid squads who ship continuously.",
    link: "https://velocityos.dev"
  },
  {
    name: "Signal North",
    tagline: "Narratives from the frontier of product & AI",
    description:
      "A weekly research letter read by 12k operators exploring the intersections of applied AI, product strategy, and market entry.",
    link: "https://signalnorth.substack.com"
  },
  {
    name: "Builder Circles",
    tagline: "Peer advisory for product leaders",
    description:
      "Curated mastermind groups that pair product leads with fractional mentors. Currently running 18 circles across San Francisco, New York, and Bengaluru.",
    link: "https://buildercircles.co"
  }
];

const principles = [
  "Relentlessly pursue clarity—strategy, narrative, and metrics must cohere.",
  "Default to shipping the slice that teaches the most.",
  "Tools should amplify human creativity and decision making."
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 pb-24 pt-20 md:px-10">
      <section className="glass relative overflow-hidden rounded-3xl p-10 shadow-glow md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-9"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for founder • operator • investor collabs
          </div>
          <h1 className="text-4xl font-display tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Avinaash</span>. I craft
            products and companies that help people build faster.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
            Product leader and engineer obsessed with compounding learning loops.
            Currently building Nimble Systems—an AI-native copilot for product-led
            teams—and partnering with early-stage founders investing in
            experimentation-heavy spaces.
          </p>
          <div className="flex flex-wrap gap-4">
            {socials.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand/60 hover:bg-brand/10"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-slate-200">{item.icon}</span>
                {item.label}
                <BsArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </motion.div>
        <div className="pointer-events-none absolute -top-48 right-10 h-64 w-64 rounded-full bg-brand/40 blur-[120px]" />
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass rounded-3xl p-10"
        >
          <h2 className="text-2xl font-display text-slate-100">Field Notes</h2>
          <p className="mt-4 text-slate-300">
            My work lives at the intersection of product experience, systems design,
            and AI-assisted workflows. I thrive in messy zero-to-one cycles with
            high velocity teams. Here&apos;s how that has unfolded so far.
          </p>
          <div className="mt-8 space-y-8">
            {experience.map((item) => (
              <article key={item.org} className="rounded-2xl border border-white/5 bg-white/2 p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {item.role} · {item.org}
                  </h3>
                  <span className="text-sm uppercase tracking-wide text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="glass flex flex-col gap-8 rounded-3xl p-10"
        >
          <div>
            <h2 className="text-2xl font-display text-slate-100">Now</h2>
            <p className="mt-3 text-slate-300">
              Shipping Nimble Systems with an ambitious crew of engineers, designers, and
              researchers—building an AI copilot that turns product signals into clear
              action. Advising early-stage founders on product velocity. Hosting builder
              salons between San Francisco and Bengaluru.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-display text-white">Principles</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {principles.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-display text-white">Investments & Advising</h3>
            <p className="mt-3 text-sm text-slate-300">
              I back founders building infrastructure, AI tooling, and workflow
              products. Portfolio includes Depthline, Swiftlane Robotics, and
              Lattice Labs. If you&apos;re crafting something remarkable, I&apos;d
              love to meet.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mt-20 glass rounded-3xl p-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-display text-slate-100"
        >
          Selected Work
        </motion.h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="group flex flex-col rounded-3xl border border-white/5 bg-white/3 p-6 transition hover:border-brand/40 hover:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <BsArrowUpRight className="h-5 w-5 translate-x-0 translate-y-0 text-slate-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                {project.tagline}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-200 transition hover:text-brand-100"
              >
                Explore
                <BsArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="glass overflow-hidden rounded-3xl p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 md:grid-cols-[1.2fr,0.8fr]"
          >
            <div>
              <h2 className="text-2xl font-display text-slate-100">Get in touch</h2>
              <p className="mt-4 max-w-xl text-slate-300">
                I love collaborating with founders, product leaders, and investors who
                care about pace and craft. Whether you&apos;re exploring a build,
                navigating a product inflection point, or want a sparring partner,
                reach out.
              </p>
            </div>
            <div className="glass rounded-2xl border border-brand/20 bg-brand/10 p-6 text-sm text-slate-200">
              <p>Drop a note at</p>
              <a
                className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-brand-100"
                href="mailto:hello@avinaash.com"
              >
                hello@avinaash.com
              </a>
              <p className="mt-4 text-slate-300">
                I respond within 48 hours and can loop in the right collaborator if it
                aligns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
