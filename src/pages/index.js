import * as React from "react";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
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
