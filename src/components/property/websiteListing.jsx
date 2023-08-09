// src/components/PropertyListing.js

import React, { useState } from 'react';

const WebsiteListing = () => {
  const [websiteListing, setWebsiteListing] = useState({
    pageTitle: '',
    pageSubTitle: '',
    address: '',
  });

  const [amenitiesServices, setAmenitiesServices] = useState({
    amenitiesDropdown1: [],
    amenitiesDropdown2: [],
    amenitiesDropdown3: [],
    amenitiesDropdown4: [],
  });

  const [assets, setAssets] = useState({
    rooms: [],
    commonInfo: [],
  });

  const [nearby, setNearby] = useState({
    institutes: [],
    facilities: [],
  });

  const handleWebsiteListingChange = (e) => {
    const { id, value } = e.target;
    setWebsiteListing((prevWebsiteListing) => ({
      ...prevWebsiteListing,
      [id]: value,
    }));
  };

  const handleAmenitiesDropdownChange = (e) => {
    const { id, value } = e.target;
    setAmenitiesServices((prevAmenitiesServices) => ({
      ...prevAmenitiesServices,
      [id]: value,
    }));
  };

  const handleAssetsCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAssets((prevAssets) => ({
      ...prevAssets,
      [name]: checked ? [...prevAssets[name], e.target.value] : prevAssets[name].filter((item) => item !== e.target.value),
    }));
  };

  const handleNearbyDropdownChange = (e) => {
    const { id, value } = e.target;
    setNearby((prevNearby) => ({
      ...prevNearby,
      [id]: value,
    }));
  };

  return (

    <div className="container mx-auto p-4 mb-32">
      {/* Website Listing */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-4">Website Listing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Page Title */}
          <div>
            <label htmlFor="pageTitle" className="text-sm font-medium text-gray-700">
              Page Title
            </label>
            <input
              type="text"
              id="pageTitle"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Page Title"
              value={websiteListing.pageTitle}
              onChange={handleWebsiteListingChange}
            />
          </div>
          {/* Page Sub Title */}
          <div>
            <label htmlFor="pageSubTitle" className="text-sm font-medium text-gray-700">
              Page Sub Title
            </label>
            <input
              type="text"
              id="pageSubTitle"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Page Sub Title"
              value={websiteListing.pageSubTitle}
              onChange={handleWebsiteListingChange}
            />
          </div>
          {/* Address */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Address"
              value={websiteListing.address}
              onChange={handleWebsiteListingChange}
            />
          </div>
        </div>
      </div>

      {/* Amenities & Services */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-4">Amenities & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Dropdown 1 */}
          <div>
            <label htmlFor="amenitiesDropdown1" className="text-sm font-medium text-gray-700">
              Amenities Dropdown 1
            </label>
            <select
              id="amenitiesDropdown1"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              multiple
              value={amenitiesServices.amenitiesDropdown1}
              onChange={handleAmenitiesDropdownChange}
            >
              {/* Dropdown options */}
            </select>
          </div>
          {/* Dropdown 2 */}
          <div>
            <label htmlFor="amenitiesDropdown2" className="text-sm font-medium text-gray-700">
              Amenities Dropdown 2
            </label>
            <select
              id="amenitiesDropdown2"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              multiple
              value={amenitiesServices.amenitiesDropdown2}
              onChange={handleAmenitiesDropdownChange}
            >
              {/* Dropdown options */}
            </select>
          </div>
          {/* Dropdown 3 */}
          <div>
            <label htmlFor="amenitiesDropdown3" className="text-sm font-medium text-gray-700">
              Amenities Dropdown 3
            </label>
            <select
              id="amenitiesDropdown3"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              multiple
              value={amenitiesServices.amenitiesDropdown3}
              onChange={handleAmenitiesDropdownChange}
            >
              {/* Dropdown options */}
            </select>
          </div>
          {/* Dropdown 4 */}
          <div>
            <label htmlFor="amenitiesDropdown4" className="text-sm font-medium text-gray-700">
              Amenities Dropdown 4
            </label>
            <select
              id="amenitiesDropdown4"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              multiple
              value={amenitiesServices.amenitiesDropdown4}
              onChange={handleAmenitiesDropdownChange}
            >
              {/* Dropdown options */}
            </select>
          </div>
        </div>
      </div>

      {/* Assets */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-4">Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Room */}
          <div>
            <label className="text-sm font-medium text-gray-700">Room</label>
            <div className="mt-2 flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  name="rooms"
                  value="room1"
                  checked={assets.rooms.includes('room1')}
                  onChange={handleAssetsCheckboxChange}
                />
                <span className="ml-2">Room 1</span>
              </label>
              {/* Add more rooms with similar code */}
            </div>
          </div>
          {/* Common Information */}
          <div>
            <label className="text-sm font-medium text-gray-700">Common Information</label>
            <div className="mt-2 flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  name="commonInfo"
                  value="info1"
                  checked={assets.commonInfo.includes('info1')}
                  onChange={handleAssetsCheckboxChange}
                />
                <span className="ml-2">Info 1</span>
              </label>
              {/* Add more common info with similar code */}
            </div>
          </div>
        </div>
      </div>

      {/* Nearby */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-4">Nearby</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Institutes */}
          <div>
            <label htmlFor="institutes" className="text-sm font-medium text-gray-700">
              Institutes
            </label>
            <select
              id="institutes"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              multiple
              value={nearby.institutes}
              onChange={handleNearbyDropdownChange}
            >
              {/* Dropdown options */}
            </select>
          </div>
          {/* Facilities */}
          <div>
            <label htmlFor="facilities" className="text-sm font-medium text-gray-700">
              Facilities
            </label>
            <select
              id="facilities"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              multiple
              value={nearby.facilities}
              onChange={handleNearbyDropdownChange}
            >
              {/* Dropdown options */}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
  
};

export default WebsiteListing;