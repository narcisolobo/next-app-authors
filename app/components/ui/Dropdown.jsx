'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { signOut } from 'next-auth/react';

function Dropdown({ email }) {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-gray-500 hover:bg-gray-700 hover:text-gray-100 px-4 py-2 rounded text-sm transition inline-flex gap-2">
        {email}
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 origin-top-right rounded w-56 bg-gray-700 mt-2">
          <Menu.Item className="block w-full py-2 px-4 rounded">
            {({ active }) => (
              <button
                className={`${
                  active && 'bg-gray-600 text-orange-400'
                } text-sm text-gray-400 text-left`}
                onClick={handleSignOut}>
                Sign Out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
