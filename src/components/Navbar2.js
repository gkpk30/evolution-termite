import React from "react";
import { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../images/logo.png";
import Logo2 from "../images/logo2.png";
import Logo3 from "../images/logo3.png";
import Banner from "../components/Banner";
import FlyoutSimple from "../components/FlyoutSimple";
import FlyoutStacked from "../components/FlyoutStacked";

const pests = [
  { name: "Rodent Control", href: "/pest-control/rodent" },
  { name: "Termite Control", href: "/pest-control/termite" },
  { name: "Ant Control", href: "/pest-control/ant-control" },
  { name: "Bee and Wasp Control", href: "/pest-control/bee-and-wasp-control" },
  { name: "Mosquito Control", href: "/pest-control/mosquito-control" },
];

const more = [
  { name: "About Us", href: "/more/about" },
  { name: "Reviews", href: "/more/reviews" },
];
const resources = [
  { name: "Pest Control Safety", href: "/resources/pest-control-safety" },
  { name: "FAQ", href: "/resources/faq" },
];

const navigation = [
  { name: "Protect Your Home", href: "/protect-your-home" },
  { name: "Pest Control", href: "#", subMenu: pests },
  // { name: "Pest Identifier", href: "#" },
  { name: "Resources", href: "#", subMenu: resources },
  { name: "More", href: "#", subMenu: more },
];

export default function Navbar2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = useStaticQuery(graphql`query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }`)
  const nodes = data.allMdx.nodes
console.log("navbar2",nodes[0].frontmatter.title)
  console.log(data)
  return (
    <header className="absolute inset-x-0 top-0 z-50  ">
      <Banner />
      <nav className=" px-6 lg:px-8 mx-auto mt-3 max-w-[1480px] flex justify-between min-h-min">
        <div>
          <Link to="/" className="">
            <span className="sr-only">Evolution Termite | Pest Control and Repairs</span>
            <img
              alt="Your Company"
              className="h-10 lg:h-12 xl:h-12  w-auto"
              src={Logo3}
            />
          </Link>
        </div>
        <div className="hidden  lg:flex lg:gap-x-0.5 ">
          {navigation.map((item) =>
            item.subMenu ? (
              <FlyoutSimple
                key={item.name}
                name={item.name}
                subMenuItems={item.subMenu}
               
              />
            ) : (
              <Link 
                to={item.href}
                key={item.name}
                className="first:rounded-bl-xl text-sm font-semibold items-center leading-6 bg-gray-800/50 hover:bg-gray-700 text-gray-50 py-4 px-6"
              >
                {item.name}
              </Link>
            )
          )}
       
        
        </div>
        <div className="hidden xl:block flex-row bg-yellow-300 py-2 px-6 xl:px-12 text-gray-900 font-bold text-center rounded-br-lg">
          <div className="text-sm">Call Now 24/7</div>
          <div className="text-lg">(818) 555-555</div>
        </div>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-50 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
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
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                 to="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-700"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
