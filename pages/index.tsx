import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Satish Kumar — AI/ML Engineer</title>
        <meta
          name="description"
          content="Portfolio of Satish Kumar, AI/ML Engineer specializing in Machine Learning, Generative AI, LLM/RAG architectures, and Computer Vision systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative min-h-screen bg-background">
        <InteractiveBackground />
        <div className="relative z-10">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Achievements />
          <GithubStats />
          <Contact />
        </div>
      </main>
    </>
  );
}
