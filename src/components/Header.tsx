import React from 'react'
import Link from 'next/link'
import { AccountDropdown, Icon, useAuthState } from 'components'

type HeaderProps = {}

export const Header: React.FC = (props: HeaderProps) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false)
  const user = useAuthState()

  return (
    <header className="bg-red-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <h1 className="text-white text-xl font-bold">acme app</h1>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <Icon icon="close" size={20} className="h6 w-6 fill-current" />
            ) : (
              <Icon icon="menu" size={20} className="h6 w-6 fill-current" />
            )}
          </button>
        </div>
      </div>
      <nav className={`sm:block ${showMenu ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
          <Link href="dashboard">
            <a className="block px-2 py-1 text-white font-semibold rounded hover:bg-red-700">Dashboard</a>
          </Link>
          <Link href="#">
            <a className="block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 text-white font-semibold rounded hover:bg-red-700">
              Messages
            </a>
          </Link>
          <Link href="something">
            <a className="block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 text-white font-semibold rounded hover:bg-red-700">
              Something
            </a>
          </Link>
          <AccountDropdown className="ml-6 hidden sm:block" />
        </div>
        <div className="px-4 py-5 border-t border-red-700 sm:hidden">
          <div className="flex items-center">
            <img
              className="h-8 w-8 border-2 rounded-full object-cover"
              src="/images/rhesusminus.jpg"
              alt="Your avatar"
            />
            <span className="ml-3 text-white font-semibold">{user?.username}</span>
          </div>
          <div className="mt-4">
            <a className="mt-2 block text-gray-400 hover:text-white" href="#">
              Account settings
            </a>
            <a className="mt-2 block text-gray-400 hover:text-white" href="#">
              Log out
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
