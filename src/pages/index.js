import * as React from "react";
import Seo from "../components/seo";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits"
import PestCards from "../components/PestCards";
import ServiceSection from "../components/ServiceSection";
import ServiceSection2 from "../components/ServiceSection2";
import ServicesList from "../components/ServicesList";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Testimonial from "../components/TestimonialsShortList";
import BenefitsMain from "../components/BenefitsMain";
import Features from "../components/Features";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage = () => {
  return (
    <>
      <Hero />
      {/* <ServiceSection/> */}
      <ServiceSection2 />
      {/* <PestCards/> */}
      <BenefitsMain/>
      {/* <Benefits/> */}
      <Testimonial />
      <Features/>
      <Faq />
      <Contact />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <Seo title="Termite and Pest Control" />
    <meta name="description" content="Top Rated Pest Control and Repairs in Los Angeles" />
  </>
);
