import React from "react";
import Hero2 from "../../components/Hero2";
import { Link } from "gatsby";

const h1 = "Keep Pests Away... \n Permanently";
const subHeader =
  "Protect your house against pests 24/7 with our Home Protection Plan";
const teaser =
  "Our Protection Plan can relieve your residential pest control problems.";

const faqs = [
  {
    id: 1,
    question:
      "What types of pests does your company specialize in controlling and repairing damage caused by?",
    answer:
      "Our company specializes in controlling and repairing damage caused by a wide range of pests, including termites, rodents, ants, bed bugs, cockroaches, and more.",
  },
  {
    id: 2,
    question:
      "How do you determine the extent of the pest damage and what repairs are necessary?",
    answer:
      "Our experienced technicians perform a thorough inspection of your property to assess the extent of the pest damage and identify any areas that need to be repaired. We then provide a detailed report outlining the recommended repairs and the cost associated with each repair.",
  },
  {
    id: 3,
    question: "Are your pest control methods safe for children and pets?",
    answer:
      "Yes, we use only eco-friendly and safe pest control methods that are approved by the Environmental Protection Agency (EPA). Our technicians are trained to apply these methods in a way that minimizes any risk to children or pets.",
  },
  {
    id: 4,
    question:
      "How long does it take to complete a pest control and repair job?",
    answer:
      "The time it takes to complete a pest control and repair job depends on the extent of the pest damage and the scope of the necessary repairs. However, we strive to complete every job in a timely and efficient manner to minimize any inconvenience to our clients. We provide an estimated timeframe for each job during the initial consultation.",
  },
  // More questions...
];

export default function faq() {
  return (
    <div>
      <Hero2 teaser={teaser} h1={h1} subHeader={subHeader} />
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{" "}
            <Link
              to="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              sending us an email
            </Link>{" "}
            and we’ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
