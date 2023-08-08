// src/components/Operations.js

import React, { useState } from 'react';

const Operations = () => {
  const [operationsData, setOperationsData] = useState({
    sales: '',
    admin: '',
    propertyManager: '',
    clusterManager: '',
  });

  const handleOperationsDataChange = (field, value) => {
    setOperationsData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Sales */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-4">Sales</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="sales" className="text-sm font-medium text-gray-700">
              Sales
            </label>
            <input
              type="text"
              id="sales"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Sales"
              value={operationsData.sales}
              onChange={(e) => handleOperationsDataChange('sales', e.target.value)}
            />
          </div>
          {/* Add more input fields for Sales */}
        </div>
      </div>

      {/* Admin */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-4">Admin</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="admin" className="text-sm font-medium text-gray-700">
              Admin
            </label>
            <input
              type="text"
              id="admin"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Admin"
              value={operationsData.admin}
              onChange={(e) => handleOperationsDataChange('admin', e.target.value)}
            />
          </div>
          {/* Add more input fields for Admin */}
        </div>
      </div>

      {/* Property Manager */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-4">Property Manager</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="propertyManager" className="text-sm font-medium text-gray-700">
              Property Manager
            </label>
            <input
              type="text"
              id="propertyManager"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Property Manager"
              value={operationsData.propertyManager}
              onChange={(e) => handleOperationsDataChange('propertyManager', e.target.value)}
            />
          </div>
          {/* Add more input fields for Property Manager */}
        </div>
      </div>

      {/* Cluster Manager */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-4">Cluster Manager</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="clusterManager" className="text-sm font-medium text-gray-700">
              Cluster Manager
            </label>
            <input
              type="text"
              id="clusterManager"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Cluster Manager"
              value={operationsData.clusterManager}
              onChange={(e) => handleOperationsDataChange('clusterManager', e.target.value)}
            />
          </div>
          {/* Add more input fields for Cluster Manager */}
        </div>
      </div>
    </div>
  );
};

export default Operations;
