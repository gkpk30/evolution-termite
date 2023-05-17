import React from 'react'
import {Link} from 'gatsby'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



export default function FlyoutSimple({subMenuItems, name}) {
    
  return (
    <Popover className="relative">
      <Popover.Button className="bg-gray-800/50 hover:bg-gray-700 pt-4 pb-6 px-6 inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50">
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
          <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            {subMenuItems.map((item) => (
              <Link key={item.name} to={item.href} className="block p-2 hover:text-indigo-600">
                {item.name}
              </Link>
            
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
