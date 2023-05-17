import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

export default function TestimonialShortList() {
  return (
    <section className="lg:p-x8 bg-gray-800 px-6 py-24 sm:py-32">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-gray-400">
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-100 sm:text-2xl sm:leading-9">
          <p>
            “Overall, I would highly recommend Evolution Termite to anyone in
            need of pest control and repair services. Their expertise,
            efficiency, and commitment to customer satisfaction make them the
            best in the business. Thank you, Evolution Termite, for your
            outstanding service!”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <img
            className="h-12 w-12 rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
            alt=""
          />
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-300">Judith Black</div>
            <div className="mt-0.5 text-gray-500">CEO of Workcation</div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
