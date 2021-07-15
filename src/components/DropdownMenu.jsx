import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react';
import {ChevronDownIcon, PencilAltIcon} from "@heroicons/react/outline";

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus:visible:ring-2">
          Options Menu
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-violet-200" aria-hidden />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <PencilAltIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  ) : (
                    <PencilAltIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  )}
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <PencilAltIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  ) : (
                    <PencilAltIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  )}
                  Test
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
