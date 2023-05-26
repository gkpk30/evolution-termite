import React from 'react'

export default function ArticleHeader({description, heroH1, heroSubheader}) {
    return (
      <div className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-gray-600">{description}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{heroH1}</h1>
            <h2 className="mt-6 text-lg leading-8 text-gray-600">
              {heroSubheader}
            </h2>
          </div>
        </div>
      </div>
    )
  }
  