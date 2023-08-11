import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import PropertyDashBoard from "../property/propertyDashboard";

const SideNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMastersMenuOpen, setIsMastersMenuOpen] = useState(false);
    const [isFoodMenuOpen, setIsFoodMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    const toogleFoodMenu = () => {
        setIsFoodMenuOpen((prev) => !prev)
    }
    const toggleMastersMenu = () => {
        setIsMastersMenuOpen((prev) => !prev);
    };
    const location = useLocation();

    const isActiveLink = useCallback((to) => {
        return location.pathname.includes(to);
    },[location.pathname]);
    useEffect(() => {
        const checkAndSetMenus = () => {
            setIsFoodMenuOpen(isActiveLink("/food"));
            setIsMastersMenuOpen(isActiveLink("/masters"));
        };
    
        checkAndSetMenus(); // Call it immediately after defining
    
    }, [isActiveLink]);
      console.log(isFoodMenuOpen,isMastersMenuOpen,`sMastersMenuOpen`)
    return (
        <div className="relative flex flex-col md:flex-row md:h-screen">
            {/* Menu Button */}
            <button
                className="fixed z-50 top-4 right-4 md:hidden p-2 rounded-md bg-gray-200"
                onClick={toggleMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>

            {/* Side Navigation */}
            <nav
                className={`${isMenuOpen ? "block" : "hidden"
                    } md:block md:static md:w-56 bg-teal-500 text-white border-r border-gray-300`}
            // Add these styles
            >
                <div className="p-4">
                    <div className="text-xl font-bold mb-2">Logged-in User</div>
                    <div className="text-sm text-gray-500">Description</div>
                </div>

                <ul className="text-white flex-1 md:flex md:flex-col md:pb-16">
                    <li className="px-4 py-3 mb-4 ml-4">
                        <Link
                            to="/"
                            className={`block bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow ${isActiveLink("/") ? " opacity-90" : " opacity-80 hover:opacity-90"
                                }`}
                        >
                            + Dashboard
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-3  ${isActiveLink("/properties") ? "bg-white text-orange-500" : ""
                            }`}
                    >
                        <Link to="/properties" className="block font-semibold">
                            + Properties
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-3  ${isActiveLink("/Residents") ? "bg-white text-orange-500" : ""
                            }`}
                    >
                        <Link to="/Residents" className="block font-semibold">
                            + Residents
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-3 ${isActiveLink("/Revenue") ? "bg-white text-orange-500" : ""
                            }`}
                    >
                        <Link to="/Revenue" className="block font-semibold">
                            + Revenue
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-3 ${isActiveLink("/Services") ? "bg-white text-orange-500" : ""
                            }`}
                    >
                        <Link to="/Services" className="block font-semibold">
                            + Services
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-3 ${isActiveLink("/Leads") ? "bg-white text-orange-500" : ""
                            }`}
                    >
                        <Link to="/Leads" className="block font-semibold">
                            + Leads
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-3 ${isActiveLink("/Tickets") ? "bg-white text-orange-500" : ""
                            }`}
                    >
                        <Link to="/Tickets" className="block font-semibold">
                            + Tickets
                        </Link>
                    </li>
                    <li
                        className={`px-4 py-3 ${isActiveLink("/food") ? "bg-white text-teal-500" : ""
                            }`}
                    >
                        <button to="/food" onClick={toogleFoodMenu} className="block font-semibold">
                            + Food
                        </button>
                        {isFoodMenuOpen && (
                            <ul className="ml-4">
                                <li
                                    className={`px-4 py-3 ${isActiveLink("/food_category") ? "bg-white text-orange-500" : ""
                                        }`}
                                >
                                    <Link to="/food/food_category" className="block font-semibold">
                                        Food Category
                                    </Link>
                                </li>
                                <li
                                    className={`px-4 py-3 ${isActiveLink("/food_item") ? "bg-white text-orange-500" : ""
                                        }`}
                                >
                                    <Link to="/food/food_item" className="block font-semibold">
                                        Food Item
                                    </Link>
                                </li>

                            </ul>
                        )}
                    </li>
                    <li
                        className={`px-4 py-3 ${isActiveLink("/Engagement") ? "bg-white text-orange-500" : ""
                            }`}
                    >
                        <Link to="/Engagement" className="block font-semibold">
                            + Engagement
                        </Link>
                    </li>

                    <li
                        className={`px-4 py-3 ${isActiveLink("/masters") ? "bg-white text-teal-500" : ""
                            }`}
                    >
                        <button to="/masters" onClick={toggleMastersMenu} className="block font-semibold">
                            + Masters
                        </button>
                        {isMastersMenuOpen && (
                            <ul className="ml-4">
                                <li
                                    className={`px-4 py-3 ${isActiveLink("/state") ? "bg-white text-orange-500" : ""
                                        }`}
                                >
                                    <Link to="/masters/state" className="block font-semibold">
                                        State
                                    </Link>
                                </li>
                                <li
                                    className={`px-4 py-3 ${isActiveLink("/city") ? "bg-white text-orange-500" : ""
                                        }`}
                                >
                                    <Link to="/masters/city" className="block font-semibold">
                                        City
                                    </Link>
                                </li>
                                <li
                                    className={`px-4 py-3 ${isActiveLink("/cluster") ? "bg-white text-orange-500" : ""
                                        }`}
                                >
                                    <Link to="/masters/cluster" className="block font-semibold">
                                        Cluster
                                    </Link>
                                </li>
                                <li
                                    className={`px-4 py-3 ${isActiveLink("/paymentPlans") ? "bg-white text-orange-500" : ""
                                        }`}
                                >
                                    <Link to="/masters/paymentPlans" className="block font-semibold">
                                        Room Types
                                    </Link>
                                </li>
                                <li
                                    className={`px-4 py-3 ${isActiveLink("/paymentPlans") ? "bg-white text-orange-500" : ""
                                        }`}
                                >
                                    <Link to="/masters/paymentPlans" className="block font-semibold">
                                        Payment Plan
                                    </Link>
                                </li>
                                <li
                                    className={`px-4 py-3 ${isActiveLink("/institutes") ? "bg-white text-orange-500" : ""
                                        }`}
                                >
                                    <Link to="/masters/institutes" className="block font-semibold">
                                        Institues
                                    </Link>
                                </li>
                                <li
                                    className={`px-4 py-3 ${isActiveLink("/nearby") ? "bg-white text-orange-500" : ""
                                        }`}
                                >
                                    <Link to="/masters/nearby" className="block font-semibold">
                                        NearBy
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Add other nav links with the same pattern */}
                </ul>

                {/* My Account */}
                <div className="p-4 md:absolute md:bottom-0 md:left-0 w-full border-t border-gray-300 md:hidden bg-white">
                    <Link
                        to="/properties"
                        className={`block ${isActiveLink("/properties") ? "bg-white text-teal-500 font-semibold" : ""
                            }`}
                    >
                        Properties
                    </Link>

                </div>
            </nav>

            {/* Main Content */}

        </div>
    );
};

export default SideNav;
