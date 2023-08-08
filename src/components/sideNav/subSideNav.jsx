// MastersSubSideNav.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SalesSubSideNav from "./salesSubNav"; // Make sure to import this if it exists

const MastersSubSideNav = () => {
  const [showSalesSubSideNav, setShowSalesSubSideNav] = useState(false);

  const toggleSalesSubSideNav = () => {
    setShowSalesSubSideNav((prev) => !prev);
  };

  return (
    <div>
      <div className="bg-white p-4 text-black flex items-center justify-between sticky top-0 left-0 w-full z-10">
        <div className="flex flex-col">
          <h1 className="text-sm">Masters</h1>
          {/* <p className="text-sm"></p> */}
        </div>
        {/* Add any other content you want on the right side */}
      </div>
      <ul className="text-gray-700 flex-1 md:flex md:flex-col md:pb-16">
        <li className="px-4 py-3">
          <Link to="/masters/sales" onClick={toggleSalesSubSideNav}>
            Sales
          </Link>
          {/* Conditionally render the tertiary side navigation */}
          {showSalesSubSideNav && <SalesSubSideNav />}
        </li>
        <li className="px-4 py-3 border-t border-b border-gray-300">
          <Link to="/masters/marketing" className="block">
            Marketing
          </Link>
        </li>
        <li className="px-4 py-3 border-b border-gray-300">
          <Link to="/masters/tech-system" className="block">
            Tech System
          </Link>
        </li>
        <li className="px-4 py-3 border-b border-gray-300">
          <Link to="/masters/crm" className="block">
            CRM
          </Link>
        </li>
        <li className="px-4 py-3 border-b border-gray-300">
          <Link to="/masters/accounts" className="block">
            Accounts
          </Link>
        </li>
        <li className="px-4 py-3 border-b border-gray-300">
          <Link to="/masters/hr" className="block">
            HR
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MastersSubSideNav;
