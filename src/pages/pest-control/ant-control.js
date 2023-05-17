import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby'
import Seo from "../../components/seo";

export default function AntControl() {
  return (
    <div>ant-control</div>
  )
}

export const Head = () => (
  <>
    <Seo title="Ant Control" />
    <meta name="description" content="Ant Control Services" />
  </>
);
