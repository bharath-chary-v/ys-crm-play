// SalesSubSideNav.jsx

import React from "react";
import { Link } from "react-router-dom";
import MastersSubSideNav from "./subSideNav";

const SalesSubSideNav = () => {
  return (
    <>   
    <MastersSubSideNav />
     <ul className="text-gray-700 flex-1 md:flex md:flex-col md:pb-16">
      <li className="px-4 py-3">
        <Link to="/masters/sales/city" className="block">
          City
        </Link>
      </li>
      <li className="px-4 py-3 border-t border-b border-gray-300">
        <Link to="/masters/sales/cluster" className="block">
          Cluster
        </Link>
      </li>
    </ul>
    </>
  );
};

export default SalesSubSideNav;
