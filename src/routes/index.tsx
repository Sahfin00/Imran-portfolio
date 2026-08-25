import { createFileRoute } from "@tanstack/react-router";

import { Toaster } from "@/components/ui/sonner";
import { About } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Journey } from "@/components/portfolio/Journey";
import { Leadership } from "@/components/portfolio/Leadership";
import { Projects } from "@/components/portfolio/Projects";
import { Programs } from "@/components/portfolio/Programs";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Skills } from "@/components/portfolio/Skills";
import { StillBuilding } from "@/components/portfolio/StillBuilding";
import { profile } from "@/data/portfolio";

const title = "Md. Imran Hossain — EEE Student at CUET | Portfolio";
const description =
  "Portfolio of Md. Imran Hossain (Sahfin Amin Imran), Electrical & Electronic Engineering student at CUET, Chattogram, Bangladesh — electronics and power systems projects including a PIR sensor security alarm and 63 kVA transformer design, plus leadership and campus activities.";
const previewImage = "/profile.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:image", content: previewImage },
      { property: "og:image:alt", content: "Md. Imran Hossain, EEE student at CUET" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: previewImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Md. Imran Hossain",
          alternateName: ["Sahfin Amin Imran", "Sahfin Imran", "Imran"],
          jobTitle: "Electrical & Electronic Engineering Student",
          description:
            "Electrical & Electronic Engineering (EEE) undergraduate student at Chittagong University of Engineering and Technology (CUET), interested in electronics, embedded systems, electrical machines and power systems.",
          image: previewImage,
          email: `mailto:${profile.email}`,
          sameAs: [profile.linkedin],
          knowsAbout: [
            "Electrical Engineering",
            "Electronics",
            "Embedded Systems",
            "Electrical Machines",
            "Power Systems",
            "Transformer Design",
          ],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Chittagong University of Engineering and Technology (CUET)",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chattogram",
            addressCountry: "Bangladesh",
          },
        }),
      },
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
        <Programs />
        <Leadership />
        <Skills />
        <Achievements />
        <StillBuilding />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
