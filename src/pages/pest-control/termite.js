import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby'
import Seo from "../../components/Seo";

export default function termite() {
  return (
    <div className="relative bg-gray-900">
      <div className="h-40 md:h-28 lg:h-40 xl:h-28"></div>
      <div className="relative h-96  overflow-hidden bg-gray-900 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <StaticImage
          className="h-full w-full object-cover"
          placeholder="blurred"
          src="../../images/featured/termitesswarm.jpeg"
          alt=""
         

        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24  transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h1 className="text-base font-semibold leading-7 text-gray-600">
            Keeping Your Home Termite-Free
          </h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We’re here to help
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Effective Prevention and Control Techniques for a Termite-Free
            Environment
          </p>
          <div className="mt-8">
            <Link
              to="../../article/rats-mice-rodent-removal"
              className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit the help center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Head = () => (
  <>
    <Seo title="Termite Pest Control" />
    <meta name="description" content="Termite Control Services" />
  </>
);

