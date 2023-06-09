import React from "react";
import Banner from "../components/Banner";
import { Fragment, useState, useEffect } from "react";
import { Link} from "gatsby";
import Logo3 from "../images/logo3.png";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const pests = [
  {
    name: "Termite Control",
    description: "Get a better understanding of your traffic",
    href: "/pest-control/termite",
    icon: ChartPieIcon,
  },
  {
    name: "Rodent Control",
    description: "Speak directly to your customers",
    href: "/pest-control/rodent",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Ant Control",
    description: "Your customers’ data will be safe and secure",
    href: "/pest-control/ant-control",
    icon: FingerPrintIcon,
  },
  {
    name: "Mosquito Control",
    description: "Connect with third-party tools",
    href: "/pest-control/mosquito-control",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact us", href: "#", icon: PhoneIcon },
];
const company = [
  {
    name: "About us",
    href: "/more/about",
    description:
      "Learn more about our company values and mission to empower others",
  },
  {
    name: "Reviews",
    href: "/more/reviews",
    description:
      "Looking for you next career opportunity? See all of our open positions",
  },
  {
    name: "Pest Control Safety",
    href: "/resources/pest-control-safety",
    description:
      "Learn more about our company values and mission to empower others",
  },
  {
    name: "FAQ",
    href: "/resources/faq",
    description:
      "Looking for you next career opportunity? See all of our open positions",
  },
  {
    name: "Support",
    href: "#",
    description:
      "Get in touch with our dedicated support team or reach out on our community forums",
  },
  {
    name: "Blog",
    href: "#",
    description:
      "Read our latest announcements and get perspectives from our team",
  },
];
const preparation = [
  {
    name: "How To Prepare",
    href: "/resources/how-to-prepare",
    description:
      "Learn How To Prepare for Tent Fumigation",
  },
  {
    name: "Fumigation Planning Guide",
    href: "https://www.fumigationfacts.com/lib/pdf/PDF_FumigationPlanningGuide.pdf",
    description:
      "View this important checklist before your tent fumigation",
  },
];

export default function Navbar3({ location }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log("pathname:", location.pathname);
  useEffect(() => {
    //will close menu when the page changes
    setMobileMenuOpen(false);
  }, [location.pathname]);
  return (
    <header className="absolute inset-x-0 top-0 z-50 ">
      <Banner />
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex ">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">
              Evolution Termite | Pest Control and Repairs
            </span>
            <img
              className="h-8 w-auto"
              src={Logo3}
              alt="Evolution Termite | Pest Control and Repairs"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-0.5">
          <Popover className="relative">
            <Popover.Button className="rounded-bl flex items-center  gap-x-1 text-sm font-semibold leading-6  bg-gray-800/40 hover:bg-gray-700 text-gray-50 py-3 px-6">
              Pest Control
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-200"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {pests.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/protect-your-home"
            className="text-sm font-semibold leading-6  bg-gray-800/40 hover:bg-gray-700 text-gray-50 py-3 px-6"
          >
            Protect Your Home
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 bg-gray-800/40 hover:bg-gray-700 text-gray-50 py-3 px-6">
              Preparation
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-200"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                {preparation.map((item) => (
                  <div
                    key={item.name}
                    className="relative rounded-lg p-4 hover:bg-gray-50"
                  >
                    <Link
                      to={item.href}
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 bg-gray-800/40 hover:bg-gray-700 text-gray-50 py-3 px-6">
              Company
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-200"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                {company.map((item) => (
                  <div
                    key={item.name}
                    className="relative rounded-lg p-4 hover:bg-gray-50"
                  >
                    <Link
                      to={item.href}
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div> */}
        <div className="hidden xl:block flex-row bg-yellow-300 py-2 px-6 xl:px-12 text-gray-900 font-bold text-center rounded-br-lg">
          <div className="text-sm">Call Now 24/7</div>
          <div className="text-lg">(818) 555-555</div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {pests.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <Link
                    to="/how-to-prepare"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    How To Prepre
                  </Link>
                  <a
                    href="https://www.fumigationfacts.com/lib/pdf/PDF_FumigationPlanningGuide.pdf"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Fumigation Planning
                  </a>

                  {company.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
            {callsToAction.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}