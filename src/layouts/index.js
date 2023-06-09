import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Message from "../components/Message";
import ArticleHeader from "../components/ArticleHeader";
import FaqWhite from "../components/FaqWhite";

const shortcodes = { Faq, FaqWhite, Link, Message, ArticleHeader };


/**
 * I nested two MDXProviders
 * The First MDXProvider is for components in case I don't want to use Article in the future. It allows for the CSS customization of Markdown Tags. Read more half way down at  https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/?=gatsby-plugin-mdx#updating-mdx-content 
 * If you want to allow usage of a component from anywhere (often referred to as a shortcode), you can pass it to the MDXProvider.They are available if called in the MarkDown but are rendered outside of the 'Article' tag.
 * The nested
 */

// const MyH1 = (props) => <h1 style={{ color: `tomato` }} {...props} />;

// const MyParagraph = (props) => (
//   <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
// );

// const components = {
//   h1: MyH1,
//   p: MyParagraph,
// };

export default function index({ children, location }) {
  return (
    // <MDXProvider components={components}>
      <MDXProvider components={shortcodes}>
        <div>
          <Navbar3 location = {location} className="" />
          {/* <Navbar2 location = {location} className="" /> */}
          <div className="bg-gray-300 ">{children}</div>
          <Footer />
        </div>
      </MDXProvider>
    // </MDXProvider>
  );
}
