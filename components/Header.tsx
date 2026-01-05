"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Assuming you have lucide-react or similar icon library
import { UserButton, useUser } from "@clerk/nextjs";

const menu: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Create Story",
    href: "/create-story",
  },
  {
    title: "Explore Stories",
    href: "/explore",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const closeMenu = () => setIsMenuOpen(false);
  console.log("tttttttttttttttttttttt", user)
  return (
    <>
      <nav className="flex items-center justify-between w-full h-16 px-4 bg-gray-100 border-b sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={40}
            height={40}
            className="ml-6"
          />
          <h2 className="text-lg font-semibold">Generate story </h2>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium hover:text-indigo-600 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href={"/dashboard"}>
              <Button> {`${isSignedIn ? "Dashboard" : "Get Started"}`}</Button>
              <UserButton />
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden absolute w-full bg-white transition-all duration-300 ease-in-out shadow-lg ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } z-40`}
      >
        <div className="flex flex-col space-y-2 p-4">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu} // Close menu when a link is clicked
              className="block py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md px-2"
            >
              {item.title}
            </Link>
          ))}

          {/* Mobile Button */}
          <Button
            onClick={closeMenu}
            className="w-full mt-4" // Full width button for mobile
          >
            {`${isSignedIn ? "Dashboard" : "Get Started"}`}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
