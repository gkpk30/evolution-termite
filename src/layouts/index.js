import React from "react";
import {Link} from 'gatsby'
import {MDXProvider} from "@mdx-js/react"
import Footer from "../components/Footer";
import Faq from "../components/Faq"
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";

const shortcodes = {Faq, Link}

export default function index({ children, location  }) {
  
  return (
    <MDXProvider components={shortcodes}>
    <div >
      {/* <Navbar2 location= {location} className="" /> */}
      <Navbar3 location= {location}  />
      <div className="bg-gray-900 ">
        {/* <Navbar /> */}

        {children}
      </div>
      <Footer />
    </div>
    </MDXProvider>
  );
}
