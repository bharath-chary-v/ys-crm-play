// Section1.js

import React, { useState } from 'react';
import { useEffect } from 'react';
import CrmService from '../../services/crmServices';

const BookingPlans = ({ scrollToComponent, formData, setFormData }) => {
  const [planTypes, setPlanTypes] = useState([])
  const [roomTypes, setRoomTypes] = useState([])

  const [billingInfo, setBillingInfo] = useState({
    invoiceSeriesCode: '',
    gstin: '',
  });
  const [isGenerateBillEnabled, setIsGenerateBillEnabled] = useState(false);

  const [planInfo, setPlanInfo] = useState({
    planType: '',
    frequency: '',
    amount: '',
    discount: '',
  });

  const [roomTypeLines, setRoomTypeLines] = useState([
    {
      roomType: '',
      occupancy: '',
      gender: '',
    },
  ]);

  const handleBillingInfoChange = (e) => {
    const { id, value } = e.target;
    setBillingInfo((prevBillingInfo) => ({ ...prevBillingInfo, [id]: value }));
    updateFormData()
  };

  const handlePlanInfoChange = (e) => {
    const { id, value } = e.target;
    setPlanInfo((prevPlanInfo) => ({ ...prevPlanInfo, [id]: value }));
    updateFormData()
  };


  const handleGenerateBillChange = (e) => {
    const { checked } = e.target;
    setIsGenerateBillEnabled(checked);
    updateFormData()
  };


  const handleRoomTypeLineChange = (index, e) => {
    const { id, value } = e.target;

    if (id.startsWith('roomType')) {
      const selectedRoomType = roomTypes.find((type) => type.id === value);
      console.log(selectedRoomType,value, `selectedRoomType`)
      setRoomTypeLines((prevRoomTypeLines) =>
        prevRoomTypeLines.map((roomTypeLine, i) =>
          i === index
            ? {
              ...roomTypeLine,
              [id]: value,
              occupancy: selectedRoomType?.beds_per_room || '',
              gender: selectedRoomType?.gender || '',
              roomType:value
            }
            : roomTypeLine
        )
      );
    } else {
      setRoomTypeLines((prevRoomTypeLines) =>
        prevRoomTypeLines.map((roomTypeLine, i) =>
          i === index ? { ...roomTypeLine, [id]: value } : roomTypeLine
        )
      );
    }
  };
  console.log(roomTypeLines, `roomTypeLines`)

  const handleAddRoomTypeLine = () => {
    setRoomTypeLines((prevRoomTypeLines) => [
      ...prevRoomTypeLines,
      {
        roomType: '',
        occupancy: '',
        gender: '',
      },
    ]);
    updateFormData()
  };

  const getPlanTypes = async () => {
    const res = await CrmService.getPaymentPlans()
    setPlanTypes(res?.data?.data)
  }
  const getRoomTypes = async () => {
    const res = await CrmService.getRoomTypes()
    setRoomTypes(res?.data?.data)
  }
  useEffect(() => {
    getPlanTypes()
    getRoomTypes()
  }, [])
  const updateFormData = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      billingInfo,
      planInfo,
      roomTypeLines,
    }));
  };
  console.log(planTypes, `updateFormData`)
  return (
    <div className="container mx-auto p-4 mt-10 mb-32">
      {/* Billing Information */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Billing Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="invoiceSeriesCode" className="text-sm font-medium text-gray-700">
              Invoice Series Code
            </label>
            <input
              type="text"
              id="invoiceSeriesCode"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Invoice Series Code"
              value={billingInfo.invoiceSeriesCode}
              onChange={handleBillingInfoChange}
            />
          </div>
          <div>
            <label htmlFor="gstin" className="text-sm font-medium text-gray-700">
              GSTIN (State)
            </label>
            <input
              type="text"
              id="gstin"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="GSTIN (State)"
              value={billingInfo.gstin}
              onChange={handleBillingInfoChange}
            />
          </div>
          <div className="col-span-2 flex items-center">
            <label className="text-sm font-medium text-gray-700 mr-2">Generate Bill:</label>
            <input
              type="radio"
              id="enableGenerateBill"
              className="form-radio"
              checked={isGenerateBillEnabled}
              onChange={handleGenerateBillChange}
            />
            <label htmlFor="enableGenerateBill" className="ml-1">
              Enable
            </label>
            <input
              type="radio"
              id="disableGenerateBill"
              className="form-radio ml-4"
              checked={!isGenerateBillEnabled}
              onChange={handleGenerateBillChange}
            />
            <label htmlFor="disableGenerateBill" className="ml-1">
              Disable
            </label>
          </div>
        </div>
      </div>

      {/* Plan */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="documentType" className="text-sm font-medium text-gray-700">
              Plan Type
            </label>
            <select
              id="documentType"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              value={planInfo.planType}
              onChange={(e) => {
                const selectedPlanType = e.target.value;
                const selectedPlan = planTypes?.find(plan => plan?.id === selectedPlanType);
                console.log(selectedPlan, planTypes, `selectedPlanType`)
                setPlanInfo({
                  planType: selectedPlanType,
                  installment_frequency: selectedPlan?.installment_frequency || '',
                  amount: selectedPlan?.amount || '',
                  discount_percentage: selectedPlan?.discount_percentage || 0,
                  payment_plan_type: selectedPlan?.payment_plan_type || 0
                });
              }}
            >
              <option value="">Select Plan</option>
              {planTypes.map((plans) => (
                <option key={plans?.id} value={plans?.id}>
                  {plans?.payment_plan_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="frequency" className="text-sm font-medium text-gray-700">
              Type
            </label>
            <input
              type="text"
              id="amount"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Amount"
              value={planInfo.payment_plan_type}
              onChange={handlePlanInfoChange}
            />
          </div>
          <div>
            <label htmlFor="frequency" className="text-sm font-medium text-gray-700">
              Frequency
            </label>
            <input
              type="text"
              id="amount"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Amount"
              value={planInfo.installment_frequency}
              onChange={handlePlanInfoChange}
            />
          </div>
          <div>
            <label htmlFor="amount" className="text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Amount"
              value={planInfo.amount}
              onChange={handlePlanInfoChange}
            />
          </div>
          <div>
            <label htmlFor="discount" className="text-sm font-medium text-gray-700">
              Discount
            </label>
            <input
              type="text"
              id="discount"
              className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Discount"
              value={planInfo.discount_percentage}
              onChange={handlePlanInfoChange}
            />
          </div>
        </div>
      </div>



      {/* Room Type */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Room Type</h2>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
            onClick={handleAddRoomTypeLine}
          >
            Add Room Type
          </button>
        </div>
        <div>
          {roomTypeLines.map((roomTypeLine, index) => (
            
            <div key={index} className="flex items-center gap-3 mb-4">
              <div className="flex-1">
                <label htmlFor={`roomType-${index}`} className="text-sm font-medium text-gray-700">
                  Room Type
                </label>
                <select
                  id={`roomType-${index}`}
                  className="block mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                  value={roomTypeLine.roomType}
                  onChange={(e) => handleRoomTypeLineChange(index, e)}
                >
                  <option value="">Select Room Type</option>
                  {roomTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={`occupancy-${index}`} className="text-sm font-medium text-gray-700">
                  Occupancy
                </label>
                <input
                  type="text"
                  id={`occupancy-${index}`}
                  className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                  placeholder="Occupancy"
                  value={roomTypeLine.occupancy}
                  onChange={(e) => handleRoomTypeLineChange(index, e)}
                />
              </div>
              <div>
                <label htmlFor={`gender-${index}`} className="text-sm font-medium text-gray-700">
                  Gender
                </label>
                <input
                  type="text"
                  id={`gender-${index}`}
                  className="block w-full mt-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 bg-gray-100"
                  placeholder="Gender"
                  value={roomTypeLine.gender}
                  onChange={(e) => handleRoomTypeLineChange(index, e)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BookingPlans;
