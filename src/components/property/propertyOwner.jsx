// src/components/OwnerDetails.js

import React, { useState } from 'react';

const PropertyOwner = () => {
  // State for Owner Details section
  const [ownerDetails, setOwnerDetails] = useState({
    name: '',
    rent: '',
    rentShare: '',
    bwoOwner: '',
    rentIncrement: '',
    tracking: '',
    lockIn: '',
    agreement: '',
    tenure: '',
    rentFreePeriod: '',
    msme: '',
    mandateDocument: null,
  });

  // State for KYC section
  const [kycDetails, setKycDetails] = useState({
    accountNo: '',
    ifscCode: '',
    bankName: '',
    branch: '',
    nameAsPerBankRecords: '',
    cancelledChequeFile: null,
  });

  // State for Utilities section
  const [utilitiesDetails, setUtilitiesDetails] = useState({
    electricity: '',
    electricityConnectionNumber: '',
    waterConnection: '',
    waterConnectionNumber: '',
  });

  // Function to handle changes in Owner Details section
  const handleOwnerDetailsChange = (e) => {
    const { id, value } = e.target;
    setOwnerDetails((prevOwnerDetails) => ({
      ...prevOwnerDetails,
      [id]: value,
    }));
  };

  // Function to handle changes in KYC section
  const handleKycDetailsChange = (e) => {
    const { id, value } = e.target;
    setKycDetails((prevKycDetails) => ({
      ...prevKycDetails,
      [id]: value,
    }));
  };

  // Function to handle changes in Utilities section
  const handleUtilitiesDetailsChange = (e) => {
    const { id, value } = e.target;
    setUtilitiesDetails((prevUtilitiesDetails) => ({
      ...prevUtilitiesDetails,
      [id]: value,
    }));
  };

  // Function to handle MSME radio button change
  const handleMSMERadioChange = (e) => {
    const { value } = e.target;
    setOwnerDetails((prevOwnerDetails) => ({
      ...prevOwnerDetails,
      msme: value,
    }));
  };

  // Function to handle Mandate Document file upload
  const handleMandateDocumentUpload = (e) => {
    const file = e.target.files[0];
    setOwnerDetails((prevOwnerDetails) => ({
      ...prevOwnerDetails,
      mandateDocument: file,
    }));
  };

  // Function to handle Cancelled Cheque file upload
  const handleCancelledChequeUpload = (e) => {
    const file = e.target.files[0];
    setKycDetails((prevKycDetails) => ({
      ...prevKycDetails,
      cancelledChequeFile: file,
    }));
  };

  return (
    <div className="container mx-auto p-4 mb-32">
      {/* Owner Details */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Owner Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Name"
              value={ownerDetails.name}
              onChange={handleOwnerDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="rent" className="text-sm font-medium text-gray-700">
              Rent
            </label>
            <input
              type="text"
              id="rent"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Rent"
              value={ownerDetails.rent}
              onChange={handleOwnerDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="rentShare" className="text-sm font-medium text-gray-700">
              Rent Share
            </label>
            <input
              type="text"
              id="rentShare"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Rent Share"
              value={ownerDetails.rentShare}
              onChange={handleOwnerDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="bwoOwner" className="text-sm font-medium text-gray-700">
              B/W Owner
            </label>
            <input
              type="text"
              id="bwoOwner"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="B/W Owner"
              value={ownerDetails.bwoOwner}
              onChange={handleOwnerDetailsChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="rentIncrement" className="text-sm font-medium text-gray-700">
              Rent Increment
            </label>
            <input
              type="text"
              id="rentIncrement"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Rent Increment"
              value={ownerDetails.rentIncrement}
              onChange={handleOwnerDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="tracking" className="text-sm font-medium text-gray-700">
              Tracking
            </label>
            <input
              type="text"
              id="tracking"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Tracking"
              value={ownerDetails.tracking}
              onChange={handleOwnerDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="lockIn" className="text-sm font-medium text-gray-700">
              Lock In
            </label>
            <input
              type="text"
              id="lockIn"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Lock In"
              value={ownerDetails.lockIn}
              onChange={handleOwnerDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="agreement" className="text-sm font-medium text-gray-700">
              Agreement
            </label>
            <input
              type="text"
              id="agreement"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Agreement"
              value={ownerDetails.agreement}
              onChange={handleOwnerDetailsChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="tenure" className="text-sm font-medium text-gray-700">
              Tenure
            </label>
            <input
              type="text"
              id="tenure"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Tenure"
              value={ownerDetails.tenure}
              onChange={handleOwnerDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="rentFreePeriod" className="text-sm font-medium text-gray-700">
              Rent Free Period
            </label>
            <input
              type="text"
              id="rentFreePeriod"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Rent Free Period"
              value={ownerDetails.rentFreePeriod}
              onChange={handleOwnerDetailsChange}
              />
            </div>
            <div className="col-span-4">
              <label className="text-sm font-medium text-gray-700">MSME</label>
              <div className="mt-2 flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name="msme"
                    value="yes"
                    checked={ownerDetails.msme === 'yes'}
                    onChange={handleMSMERadioChange}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name="msme"
                    value="no"
                    checked={ownerDetails.msme === 'no'}
                    onChange={handleMSMERadioChange}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <div className="col-span-4">
              <label className="text-sm font-medium text-gray-700">Mandate Document</label>
              <div className="mt-2">
                <input
                  type="file"
                  id="mandateDocument"
                  className="block w-full py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                  onChange={handleMandateDocumentUpload}
                />
              </div>
            </div>
          </div>
        </div>

      {/* KYC */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">KYC</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="accountNo" className="text-sm font-medium text-gray-700">
              Account No
            </label>
            <input
              type="text"
              id="accountNo"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Account No"
              value={kycDetails.accountNo}
              onChange={handleKycDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="ifscCode" className="text-sm font-medium text-gray-700">
              IFSC Code
            </label>
            <input
              type="text"
              id="ifscCode"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="IFSC Code"
              value={kycDetails.ifscCode}
              onChange={handleKycDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="bankName" className="text-sm font-medium text-gray-700">
              Bank Name
            </label>
            <input
              type="text"
              id="bankName"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Bank Name"
              value={kycDetails.bankName}
              onChange={handleKycDetailsChange}
            />
          </div>
          <div>
            <label htmlFor="branch" className="text-sm font-medium text-gray-700">
              Branch
            </label>
            <input
              type="text"
              id="branch"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Branch"
              value={kycDetails.branch}
              onChange={handleKycDetailsChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-4">
            <label htmlFor="nameAsPerBankRecords" className="text-sm font-medium text-gray-700">
              Name as per Bank Records
            </label>
            <input
              type="text"
              id="nameAsPerBankRecords"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Name as per Bank Records"
              value={kycDetails.nameAsPerBankRecords}
              onChange={handleKycDetailsChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-4">
            <label className="text-sm font-medium text-gray-700">Cancelled Cheque</label>
            <div className="mt-2">
              <input
                type="file"
                id="cancelledChequeFile"
                className="block w-full py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                onChange={handleCancelledChequeUpload}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Utilities */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">Utilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-4">
            <label className="text-sm font-medium text-gray-700 text-left">Electricity</label>
            <div className="mt-2 flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="electricity"
                  value="inclusion"
                  checked={utilitiesDetails.electricity === 'inclusion'}
                  onChange={handleUtilitiesDetailsChange}
                />
                <span className="ml-2">Inclusion</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="electricity"
                  value="exclusion"
                  checked={utilitiesDetails.electricity === 'exclusion'}
                  onChange={handleUtilitiesDetailsChange}
                />
                <span className="ml-2">Exclusion</span>
              </label>
            </div>
            <div>
              <label htmlFor="electricityConnectionNumber" className="text-sm font-medium text-gray-700">
                Electricity Connection Number
              </label>
              <input
                type="text"
                id="electricityConnectionNumber"
                className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                placeholder="Electricity Connection Number"
                value={utilitiesDetails.electricityConnectionNumber}
                onChange={handleUtilitiesDetailsChange}
              />
            </div>
          </div>
          <div className="col-span-4">
            <label className="text-sm font-medium text-gray-700 text-left">Water Connection</label>
            <div className="mt-2 flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="waterConnection"
                  value="available"
                  checked={utilitiesDetails.waterConnection === 'available'}
                  onChange={handleUtilitiesDetailsChange}
                />
                <span className="ml-2">Available</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="waterConnection"
                  value="notAvailable"
                  checked={utilitiesDetails.waterConnection === 'notAvailable'}
                  onChange={handleUtilitiesDetailsChange}
                />
                <span className="ml-2">Not Available</span>
              </label>
            </div>
            <div>
              <label htmlFor="waterConnectionNumber" className="text-sm font-medium text-gray-700">
                Water Connection Number
              </label>
              <input
                type="text"
                id="waterConnectionNumber"
                className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                placeholder="Water Connection Number"
                value={utilitiesDetails.waterConnectionNumber}
                onChange={handleUtilitiesDetailsChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default PropertyOwner;
