import React from "react";

const stats = [
  {
    id: 1,
    name: "the property damage Pests produce annually in U.S.",
    value: "$5 billion",
  },
  {
    id: 2,
    name: "when home owners delay addressing pest control issues",
    value: " $2,500 more in repair costs ",
  },
  { id: 3, name: "Damaged homes in the U.S.", value: "600,000" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

export default function ServiceSection2() {
  return (
    <div className="bg-gradient-to-b from-[#d3b5a9] to-[#d1aea1] -mt-8 lg:relative min-h-[700px] border-y  border-gray-900/30 ">
      <div className="lg:absolute border-2 border-gray-200  left-0 right-0 lg:-top-10 mx-auto rounded-2xl bg-gray-900 max-w-6xl px-6 lg:px-20 py-24 sm:py-24  ">
        <div className="mx-auto max-w-2xl lg:max-w-none ">
          <div className="text-center relative">
            <img src="/arrow.svg" alt="arrow decoration" className="h-20 sm:h-40 absolute -top-16 sm:-top-24 right-0 lg:-scale-x-100 lg:right-[90%] rotate-45 lg:-rotate-45"/>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
              When selling a house, time is of the essence, and delays can
              result in additional costs and lost profits.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              By hiring a pest control company that also offers repair services,
              the home owner can save time and effort by not having to hire a
              separate person or company to handle the repairs.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col bg-gray-800 p-8 hover:bg-white/30 ease-in duration-300"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
