import React, { useEffect, useRef, useState } from "react";
import CrmService from "../../services/crmServices";
import BasicDetails from "./basicDetails";
import BookingPlans from "./bookingPlans";
import Operations from "./operations";
import PropertyOwner from "./propertyOwner";
import WebsiteListing from "./websiteListing";

export default function PropertyOnBoard() {
    const basicDetailsRef = useRef(null);
    const bookingPlansRef = useRef(null);
    const propertyOwnerRef = useRef(null);
    const websiteListingRef = useRef(null);
    const operationsRef = useRef(null);

    const [activeComponent, setActiveComponent] = useState("basicDetails");

    const getData = async () => {
        const res = await CrmService.getProperties();
    };

    useEffect(() => {
        getData();

        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        // Observe the components
        observer.observe(basicDetailsRef.current);
        observer.observe(bookingPlansRef.current);
        observer.observe(propertyOwnerRef.current);
        observer.observe(websiteListingRef.current);
        observer.observe(operationsRef.current);

        // Cleanup the observer when the component is unmounted
        return () => observer.disconnect();
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveComponent(entry.target.id);
            }
        });
    };

    const scrollToComponent = (ref) => {
        
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
          }
    };

    return (
        <>
            <div className="bg-white p-4 text-black flex items-center justify-between sticky top-0 left-0 w-full z-10">
                <div className="flex flex-col">

                    <p className="text-sm">Property ABC <span></span>- XYZ123</p>
                    {/* <p className="text-sm"></p> */}
                </div>
                {/* Add any other content you want on the right side */}
            </div>
            <div className="bg-orange-300 p-1 text-black text-left sticky top-0 left-0 z-10">

                <button
                    onClick={() => scrollToComponent(basicDetailsRef)}
                    className={`mx-2 px-4 py-2 text-left ${activeComponent === "basicDetails" ? "bg-slate-200" : ""}`}
                >
                    Basic Details
                </button>
                <button
                    onClick={() => scrollToComponent(bookingPlansRef)}
                    className={`mx-2 px-4 py-2 text-left ${activeComponent === "bookingPlans" ? "bg-slate-200" : ""}`}
                >
                    Booking Plans
                </button>
                <button
                    onClick={() => scrollToComponent(propertyOwnerRef)}
                    className={`mx-2 px-4 py-2 text-left ${activeComponent === "propertyOwner" ? "bg-slate-200" : ""}`}
                >
                    Property Owner
                </button>
                <button
                    onClick={() => scrollToComponent(websiteListingRef)}
                    className={`mx-2 px-4 py-2 text-left ${activeComponent === "websiteListing" ? "bg-slate-200" : ""}`}
                >
                    Website Listing
                </button>
                <button
                    onClick={() => scrollToComponent(operationsRef)}
                    className={`mx-2 px-4 py-2 text-left ${activeComponent === "operations" ? "bg-slate-200" : ""}`}
                >
                    Operations
                </button>
            </div>

            <div className="pt-2 bg-slate-100 px-4 sm:px-6 lg:px-8">
                <div className="mt-6" ref={basicDetailsRef} id="basicDetails">
                    <BasicDetails scrollToComponent={scrollToComponent} />
                </div>
                <div ref={bookingPlansRef} id="bookingPlans">
                    <BookingPlans />
                </div>
                <div ref={propertyOwnerRef} id="propertyOwner">
                    <PropertyOwner />
                </div>
                <div ref={websiteListingRef} id="websiteListing">
                    <WebsiteListing />
                </div>
                <div ref={operationsRef} id="operations">
                    <Operations />
                </div>
                
            </div>
        </>
    );
}
