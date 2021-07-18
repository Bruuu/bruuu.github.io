import React from 'react';
import {Link } from "gatsby";

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="lg:flex items-center text-2xl hidden">
        <div className="w-12 mr-3">
          {/* <LogoIcon /> */}
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" to="/about">
          About
        </Link>
        <Link className="px-4" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
