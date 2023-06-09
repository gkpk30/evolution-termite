import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import InfoClouds from "./InfoClouds";

const heroText = {
  h1: "We'll not only eliminate pests, but also repair the damage they've caused.",
  h2: "",
  p: "Contact us now to schedule a free inspection and estimate for pest control and repairs. Prevent future pest infestations and damage with our proven prevention strategies.",
  cta: "Get complete pest control solutions, damage repairs, and prevention.",
};
export default function Hero() {
  return (
    <main className="bg-gradient-to-b from-[#c8cadb] to-gray-300">
      <div className="relative isolate">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-700/30 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-600/30">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div className="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
          <svg
            viewBox="0 0 801 1036"
            aria-hidden="true"
            className="w-[50.0625rem]"
          >
            <path
              fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
              fillOpacity=".3"
              d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
            />
            <defs>
              <linearGradient
                id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                x1="508.179"
                x2="-28.677"
                y1="-116.221"
                y2="1091.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#47C0FC" />
                <stop offset={1} stopColor="#261F11" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-52 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <div className="hidden sm:my-16 sm:flex lg:my-8">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-indigo-950 ring-1 ring-indigo-950/30 hover:ring-indigo-950/50">
                    Top Rated Pest Control and Repairs in Los Angeles County.{" "}
                    <Link
                      to="#"
                      className="whitespace-nowrap font-semibold text-indigo-900"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <h1 className="text-4xl  font-bold tracking-tight text-indigo-950 sm:text-6xl">
                  {/* {heroText.h1} */}
                  We'll not only eliminate pests, but also{" "}
                  <span className="relative">
                    repair
                    <span className="absolute -bottom-4 left-0">
                      <img src="/underlineBlue.svg" alt="" className="w-[100%] h-[42px]"/>
                     
                    </span>
                  </span>{" "}
                  the damage they've caused.
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-indigo-950 sm:max-w-md lg:max-w-none">
                  {heroText.p}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </Link>
                  <Link
                    to="#"
                    className="text-sm font-semibold leading-6 text-indigo-950"
                  >
                    Live demo <span aria-hidden="true">→</span>
                  </Link>
                  <svg className="animate-bounce w-6 h-6 ">
                    <span aria-hidden="true">→</span>
                  </svg>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <StaticImage
                      // src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      src="../images/featured/rodent.jpg"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl rounded-bl-none bg-gray-900/5 object-cover shadow-lg"
                      placeholder="blurred"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <StaticImage
                      // src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      src="../images/featured/termitesswarm.jpeg"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl rounded-bl-none bg-gray-900/5 object-cover shadow-lg"
                      placeholder="blurred"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <StaticImage
                      // src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      src="../images/featured/repairs.jpg"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl rounded-bl-none bg-gray-900/5 object-cover shadow-lg"
                      placeholder="blurred"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <StaticImage
                      // src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      src="../images/featured/house.jpg"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl rounded-bl-none bg-gray-900/5 object-cover shadow-lg"
                      placeholder="blurred"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <StaticImage
                      // src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      src="../images/featured/family.jpg"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl rounded-bl-none bg-gray-900/5 object-cover shadow-lg"
                      placeholder="blurred"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
            <InfoClouds />
          </div>
        </div>
      </div>
    </main>
  );
}
