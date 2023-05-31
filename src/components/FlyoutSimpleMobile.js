import React from "react";
import { Link } from "gatsby";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function FlyoutSimple({ subMenuItems, name }) {
  return (
    <Popover className="relative">
      <Popover.Button className="-mx-3 rounded-xl  hover:bg-gray-400 pt-2 pb-2 px-3 inline-flex text-base font-semibold leading-7 items-center gap-x-1  text-gray-900">
        <span>{name}</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
          <div className="w-56 shrink rounded-xl bg-gray-100 p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            {subMenuItems.map((item) => (
              
                <Link
                  key={item.name}
                  to={item.href}
                  className="block p-2 hover:text-gray-600"
                >
                  {item.name}
                </Link>
              
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
