import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function Hero2({h1, subHeader, teaser}) {
  return (
    
        <div className="relative bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-900 lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-300/10 hover:ring-gray-400/20">
                    {teaser}{' '}
                    <Link to="#" className="whitespace-nowrap font-semibold text-indigo-300">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
                  {h1}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  {subHeader}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="#"
                    className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Start Today
                  </Link>
                  <Link to="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <StaticImage
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="../images/featured/gauranteed.jpeg"
            placeholder='blurred'
            quality={100}
            alt=""
          />
        </div>
      </div>
    
  )
}
