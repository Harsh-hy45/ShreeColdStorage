import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";
import styles from "../assets/css/header.module.css";

export default function Header({ transparentBackground }) {
  const [isCollapse, setIsCollapse] = useState(false);
  const path = useLocation().pathname;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Technology", href: "/technology" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`${styles.header} ${
        transparentBackground ? styles.transparent : ""
      }`}
    >
      <div
        className={`${styles.container} flex ${
          isCollapse ? "flex-col" : "justify-between items-center"
        } mx-auto px-4 lg:px-0`}
      >
        <div className="flex items-center justify-between w-full lg:w-auto">
          <BrandIcon />
          <button
            className="block text-theme-blue lg:hidden focus:outline-none ml-4"
            onClick={() => setIsCollapse(!isCollapse)}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className={`${isCollapse ? "hidden" : "block"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                className={`${!isCollapse ? "hidden" : "block"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="hidden lg:flex items-center space-x-6">
          {navItems.map(({ name, href }) => (
            <li key={href} className="py-2 lg:py-0">
              <Button
                className={`${
                  path === href ? styles["active-link"] : ""
                } font-medium text-lg px-5 no-underline hover:underline`}
                type="link"
                href={href}
              >
                {name}
              </Button>
            </li>
          ))}
          <li>
            <Button
              className="font-medium text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
              type="link"
              href="/discuss-project"
            >
              Contact
            </Button>
          </li>
        </ul>

        <Transition
          show={isCollapse}
          enter="transition-opacity duration-200 ease-in-out"
          enterFrom="opacity-0 transform translate-y-1"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition-opacity duration-200 ease-in-out"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform translate-y-1"
        >
          <div className="lg:hidden w-full">
            <ul className="flex flex-col items-center bg-white w-full border-b-2 border-gray-300 py-4">
              {navItems.map(({ name, href }) => (
                <li key={href} className="py-2">
                  <Button
                    className={`${
                      path === href ? styles["active-link"] : ""
                    } font-medium px-10 no-underline hover:underline`}
                    type="link"
                    href={href}
                  >
                    {name}
                  </Button>
                </li>
              ))}
              <li className="py-4">
                <Button
                  className="font-bold mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
                  type="link"
                  href="/discuss-project"
                >
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </header>
  );
}
