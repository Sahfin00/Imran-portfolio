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

const SITE_URL = "https://imrans-evolving-journey.lovable.app";
const ogImage = `${SITE_URL}/profile.webp`;

const title = "Md. Imran Hossain — EEE Student at CUET | Engineering Portfolio";
const description =
  "Engineering portfolio of Md. Imran Hossain (Sahfin Amin Imran), Electrical & Electronic Engineering student at CUET: PIR Sensor Security Alarm, 63 kVA Transformer Design, industrial tours at GEMCO and Transcom Beverages, Aspire Leaders Program and campus leadership.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Md. Imran Hossain, Imran Hossain, Sahfin Amin Imran, EEE, CUET, Chittagong University of Engineering and Technology, Electrical and Electronic Engineering, EEE student, engineering portfolio, engineering projects, PIR Sensor Security Alarm, 63 kVA Transformer Design, industrial tour, GEMCO, Transcom Beverages, Aspire Leaders Program, Campus Ambassador, Career Club, student leadership",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: "Md. Imran Hossain, EEE student at CUET" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "preload", as: "image", href: "/profile.webp", fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Md. Imran Hossain",
          alternateName: ["Sahfin Amin Imran", "Imran Hossain"],
          url: SITE_URL + "/",
          image: ogImage,
          jobTitle: "Electrical & Electronic Engineering Student",
          email: "mailto:u2302131@student.cuet.ac.bd",
          sameAs: ["https://www.linkedin.com/in/imrancueteee/"],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Chittagong University of Engineering and Technology (CUET)",
          },
          knowsAbout: [
            "Electrical and Electronic Engineering",
            "Embedded electronics",
            "Transformer design",
            "Student leadership",
          ],
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
