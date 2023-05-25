import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function BenefitsMain() {
  return (
    <div className="bg-transparent  relative py-24 sm:py-32">
      <StaticImage
      className="absolute right-0 top-0 bottom-0 h-full w-full lg:w-1/2  object-cover opacity-30  mix-blend-overlay  "
        alt=""
        placeholder="blurred"
        src="../images/featured/happyfamily.jpeg"
        formats={["auto", "webp", "avif"]}
      />
  
      <div className="mx-auto max-w-5xl px-6   sm:pb-16 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to say goodbye to your pests?
          <br />
          Call for a{" "}
          <span className="relative">
            free qoute{" "}
            <span className="absolute -bottom-6 left-0">
              <img
                src="/underlineWhite.svg"
                alt="underline decoration"
                className="w-[100%] h-[42px]"
              />
            </span>
          </span>
          .
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            to="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
     
      <div className=" lg:flex flex-col  mx-auto max-w-5xl px-6 lg:items-center lg:justify-between lg:px-8 space-y-12 ">
        <div className="sm:flex sm:max-w-[90%]  pt-7 self-end  justify-between gap-6 ">
          <div className="sm:basis-1/2 ">
            <StaticImage
              src="../images/featured/repairs.jpg"
              alt=""
              className="aspect-[16/9] w-full rounded-xl  bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
          <div className="sm:basis-1/2 text-white sm:grow self-center">
            <h4>Pest Elimination and Repairs</h4>
            <h3 className="text-xl font-bold tracking-tight text-gray-100 sm:text-2xl mb-3">
              We offer repair services, pest control and preventative
              treatments.
            </h3>
            <p>
              This can save you time and money, as you won't have to hire
              multiple companies to take care of the problem.
            </p>
          </div>
        </div>
        <div className="sm:flex sm:max-w-[90%] pt-7 self-start  justify-between gap-6 ">
          <div className="sm:basis-1/2 ">
            <StaticImage
              
              src="../images/featured/rodent.jpg"
              alt=""
              className="aspect-[16/9] w-full rounded-xl  bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
          <div className="sm:basis-1/2 text-white sm:grow  self-center">
            <h4>Environmentally Friendly Solutions</h4>
            <h3 className="text-xl font-bold tracking-tight text-gray-100 sm:text-2xl mb-3">
              Safer for your family and pets.
            </h3>
            <p>
              We uses eco-friendly methods, you can be sure that your pest
              problem will be taken care of without harming the environment.
            </p>
          </div>
        </div>
        
        <div className="sm:flex sm:max-w-[90%] pt-7 self-end  justify-between gap-6 ">
          <div className="sm:basis-1/2 ">
            <StaticImage
              src="../images/featured/family.jpg"
              alt=""
              className="aspect-[16/9] w-full rounded-xl  bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
          <div className="sm:basis-1/2 text-white sm:grow  self-center">
            <h4>We Guarantee your satisfaction</h4>
            <h3 className="text-xl font-bold tracking-tight text-gray-100 sm:text-2xl mb-3">
              Home Protection Plan
            </h3>
            <p>
              We will continue servicing your
              home at no extra charge until the issue is resolved, or we will
              refund the cost of your last scheduled service.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
}
