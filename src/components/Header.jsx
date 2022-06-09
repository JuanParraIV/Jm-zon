import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()

  return (
    <header>
      {/* Nav Bar Logo */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flew-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            alt="Jm-zon"
            className="cursor-pointer"
          />
        </div>
        {/* Custom search Element */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            placeholder="Search"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="flex items-center text-white  text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ?signIn : signOut} className="cursor-pointer link">
            <p className='hover:underline'>
              {session ? `Hi, ${session.user.name}` : 'Sign In'}
            </p>
            <p className="font-extrabold md: text-sm">Account & Lists</p>
          </div>

          <div className="cursor-pointer link">
            <p>Returns</p>
            <p className="font-extrabold md: text-sm">& Orders</p>
          </div>

          <div className=" relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">
              4
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md: text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Botton Nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1 cursor-pointer" />
          All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Today's Deals</p>
        <p className="link">Customer Service</p>
        <p className="link hidden lg:inline-flex">Registry</p>
        <p className="link hidden lg:inline-flex">Gift Cards</p>
        <p className="link hidden lg:inline-flex">Sell</p>
      </div>
    </header>
  );
};

export default Header;
