// src/components/BasicInfo.js

import React, { useEffect, useState } from 'react';
import CrmService from '../../services/crmServices';

const BasicDetails = ({scrollToComponent}) => {
    const [cities, setCities] = useState([])
    const [clusters, setClusters] = useState([])
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        code: '',
        state: '',
        city: '',
        cluster: '',
        postalAddress1: '',
        postalAddress2: '',
        pincode: '',
        latitude: '',
        longitude: '',
        capacity: '',
    });
    useEffect(() => {
        // Fetch cities data when the component mounts
        getCityData();
        getClusterData()

    }, [])
    const getCityData = async () => {
        try {

            const cityData = await CrmService.getCity();

            setCities(cityData?.data?.data); // Update the cities state with the fetched data
        } catch (error) {
            console.error('Error while fetching city data:', error);
            // Handle the error, show a message, etc.
        }
    };
    const getClusterData = async () => {
        try {

            const clusterData = await CrmService.getCluster();

            setClusters(clusterData?.data?.data); // Update the cities state with the fetched data
        } catch (error) {
            console.error('Error while fetching city data:', error);
            // Handle the error, show a message, etc.
        }
    };
    const handleChange = (e) => {

        const { id, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
    };
    const handleSaveAndNext = async () => {
        let bookingPlansRef
        scrollToComponent(bookingPlansRef)
       
      };

      
    return (
        <div className="bg-white p-4 rounded-md shadow-md pt-10 pb-32 mb-32">
            <h2 className="text-lg font-semibold mb-4 text-left">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className='flex flex-col'>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 text-left">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        placeholder="Property Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="code" className="text-sm font-medium text-gray-700 text-left">
                        Code
                    </label>
                    <input
                        type="text"
                        id="code"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        placeholder="Code"
                        disabled={true}
                        value={formData.code}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="state" className="text-sm font-medium text-gray-700 text-left">
                        State
                    </label>
                    <input
                        type="text"
                        id="state"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="city" className="text-sm font-medium text-gray-700 text-left">
                        City
                    </label>
                    <select
                        id="city"
                        name="city"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        value={formData.city}
                        onChange={handleChange}
                    >
                        <option value="">Select a city</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.id}>
                                {city.city_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="cluster" className="text-sm font-medium text-gray-700 text-left">
                        Cluster
                    </label>
                    <select
                        id="city"
                        name="city"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        value={formData.cluster}
                        onChange={handleChange}
                    >
                        <option value="">Select a cluster</option>
                        {clusters.map((cluster) => (
                            <option key={cluster.id} cluster={cluster.id}>
                                {cluster.cluster_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="postalAddress1" className="text-sm font-medium text-gray-700 text-left">
                        Postal Address 1
                    </label>
                    <input
                        type="text"
                        id="postalAddress1"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        placeholder="Postal Address 1"
                        value={formData.postalAddress1}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="postalAddress2" className="text-sm font-medium text-gray-700 text-left">
                        Postal Address 2
                    </label>
                    <input
                        type="text"
                        id="postalAddress2"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        placeholder="Postal Address 2"
                        value={formData.postalAddress2}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="pincode" className="text-sm font-medium text-gray-700 text-left">
                        Pincode
                    </label>
                    <input
                        type="text"
                        id="pincode"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="latitude" className="text-sm font-medium text-gray-700 text-left">
                        Maps Latitude
                    </label>
                    <input
                        type="text"
                        id="latitude"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        placeholder="Maps Latitude"
                        value={formData.latitude}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="longitude" className="text-sm font-medium text-gray-700 text-left">
                        Maps Longitude
                    </label>
                    <input
                        type="text"
                        id="longitude"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        placeholder="Maps Longitude"
                        value={formData.longitude}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="capacity" className="text-sm font-medium text-gray-700 text-left">
                        Capacity
                    </label>
                    <input
                        type="text"
                        id="capacity"
                        className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                        placeholder="Capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <button onClick={handleSaveAndNext}>save & Next</button>
            </div>
        </div>
    );
};

export default BasicDetails;
