/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Script from "next/script";

function NavigationBar() {
  return (
    <nav className="sticky bg-[#f0e7db] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <div>
              {/* Website Logo */}
              <a href="/" className="flex items-center py-4 px-2">
                <img src="/nelogo.png" alt="Logo" className="h-8 w-8 mr-2" />
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/services"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Serviços
              </a>
              <a
                href="/about"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Sobre
              </a>
              <a
                href="/contacts"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Contatos
              </a>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <a
              href="/login"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              Log In
            </a>
            <a
              href="/register"
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >
              Registrar
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li>
            <a
              href="/services"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="/contacts"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contatos
            </a>
          </li>
        </ul>
      </div>
      <Script id="show-responsive-menu" strategy="lazyOnload">
        {`const btn = document.querySelector("button.mobile-menu-button");
            const menu = document.querySelector(".mobile-menu");

            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });`}
      </Script>
    </nav>
  );
}

export default NavigationBar;
