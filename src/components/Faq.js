import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    id:1,
    question: "What types of pests does your company specialize in controlling and repairing damage caused by?",
    answer:
      "Our company specializes in controlling and repairing damage caused by a wide range of pests, including termites, rodents, ants, bed bugs, cockroaches, and more.",
  },
  {
    id:2,
    question: "How do you determine the extent of the pest damage and what repairs are necessary?",
    answer:
      "Our experienced technicians perform a thorough inspection of your property to assess the extent of the pest damage and identify any areas that need to be repaired. We then provide a detailed report outlining the recommended repairs and the cost associated with each repair.",
  },
  {
    id:3,
    question: "Are your pest control methods safe for children and pets?",
    answer:
      "Yes, we use only eco-friendly and safe pest control methods that are approved by the Environmental Protection Agency (EPA). Our technicians are trained to apply these methods in a way that minimizes any risk to children or pets.",
  },
  {
    id: 4,
    question: "How long does it take to complete a pest control and repair job?",
    answer:
      "The time it takes to complete a pest control and repair job depends on the extent of the pest damage and the scope of the necessary repairs. However, we strive to complete every job in a timely and efficient manner to minimize any inconvenience to our clients. We provide an estimated timeframe for each job during the initial consultation.",
  },
  // More questions...
]

export default function FAQ() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
