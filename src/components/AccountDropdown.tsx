import React from 'react'
import Link from 'next/link'
import { Overlay } from './'

interface AccountDropdownProps extends React.ComponentProps<'div'> {
  logout?: any
}

export const AccountDropdown = (props: AccountDropdownProps) => {
  const [showAvatarMenu, setAvatarMenu] = React.useState<boolean>(false)

  return (
    <div className={`relative ${props.className}`}>
      <button
        className="z-10 block h-10 w-10 rounded-full overflow-hidden border-2 focus:outline-none focus:border-red-700 hover:border-red-700"
        onClick={() => setAvatarMenu(!showAvatarMenu)}
      >
        <img className="h-full w-full object-cover" src="/images/rhesusminus.jpg" alt="Your avatar" />
      </button>
      {showAvatarMenu && <Overlay onClick={() => setAvatarMenu(false)} tabIndex={-1} />}
      <div
        className={`mt-2 py-2 w-48 bg-white rounded-lg shadow-xl absolute right-0 ${
          showAvatarMenu ? 'block' : 'hidden'
        }`}
      >
        <Link href="#">
          <a className="block px-4 py-2 text-gray-800 hover:bg-red-700 hover:text-white">Account settings</a>
        </Link>
        <Link href="#">
          <a className="block px-4 py-2 text-gray-800 hover:bg-red-700 hover:text-white">Log out</a>
        </Link>
      </div>
    </div>
  )
}
