import { createFileRoute } from "@tanstack/react-router";

import { Toaster } from "@/components/ui/sonner";
import { About } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Development } from "@/components/portfolio/Development";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Journey } from "@/components/portfolio/Journey";
import { Leadership } from "@/components/portfolio/Leadership";
import { Projects } from "@/components/portfolio/Projects";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Skills } from "@/components/portfolio/Skills";
import { StillBuilding } from "@/components/portfolio/StillBuilding";

const title = "Md. Imran Hossain | EEE CUET";
const description =
  "Portfolio of Md. Imran Hossain, Electrical & Electronic Engineering student at CUET (Batch 2023): engineering projects, leadership roles, achievements and professional development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Education />
        <Journey />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Development />
        <Achievements />
        <StillBuilding />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
