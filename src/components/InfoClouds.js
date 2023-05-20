import React from "react";
import { Link } from "gatsby";
import { StarIcon } from "@heroicons/react/24/solid";
const stats = [
  { name: "Google reviews", value: "4.8" },
  { name: "Yelp reviews", value: "4.8" },
  { name: "Experience", value: "24 years" },
  { name: "Trusted Clients", value: "1,200 +" },
  { name: "Service Area", value: "LA County" },
];

export default function InfoClouds() {
  return (
    <div className="bg-transparent py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {/* {stats.map((stat) => (
            <div key={stat.name} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
              <p>{stat.value}</p>
              <p>{stat.name}</p>
            </div>
          ))} */}
          <div className=" text-center col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div className="flex justify-center">
              <span className="text-indigo-950/60  text-2xl font-semibold mr-2">
                4.8{" "}
              </span>{" "}
              <span className="self-center">
                <StarIcon className="h-7 w-7 text-indigo-950/60 " />
              </span>{" "}
            </div>
            <span className="text-indigo-950/60">Top rated</span>
          </div>
          <div className="text-center col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <p className="text-indigo-950/60  text-2xl font-semibold">
              Guaranteed
            </p>
            <span className="text-indigo-950/60">
              No risk unless you're a bug
            </span>
          </div>

          <div className="text-center col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <p className="text-indigo-950/60  text-2xl font-semibold">Safe</p>
            <span className="text-indigo-950/60">
              Safe for families, pets and children
            </span>
          </div>
          <div className="text-center col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1">
            <p className="text-indigo-950/60 text-2xl font-semibold">Fast</p>
            <span className="text-indigo-950/60">Service within 24 hours!</span>
          </div>
          <div  className=" text-center col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" >
            <p className="text-indigo-950/60  text-2xl font-semibold">Affordable</p>
            <span className="text-indigo-950/60">Easy on your wallet</span>
          </div>
        </div>
        {/* <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div> */}
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-indigo-950/60 px-4 py-1.5 text-sm leading-6 text-gray-300">
            <span className="hidden md:inline">
              Over 2500 companies use our tools to better their business.
            </span>
            <Link to="#" className="font-semibold text-white">
              <span className="absolute inset-0" aria-hidden="true" /> Read our
              customer stories <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
