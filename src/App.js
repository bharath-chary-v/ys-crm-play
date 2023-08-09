import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CityDashBoard from "./components/city/cityDashBoard";
import ClusterDashBoard from "./components/cluster/clusterDashBoard";
import DirectServicesDashboard from "./components/directServices/directServiceDashBoard";
import InstitutionDashBoard from "./components/institution/institutionDashBoard";
import NearByDashBoard from "./components/nearBy/nearByDashBoard";
import PaymentPlanDashBoard from "./components/paymentPlan/paymentDashBoard";
import PropertyDashBoard from "./components/property/propertyDashboard";
import PropertyOnBoard from "./components/property/propertyOnBoard";
import RoomTypeDashBoard from "./components/roomTypes/roomTypeDashBoard";
import SalesSubSideNav from "./components/sideNav/salesSubNav";
import SideNav from "./components/sideNav/sideNav";
import MastersSubSideNav from "./components/sideNav/subSideNav";
import StateDashBoard from "./components/state/stateDashBoard";

function App() {
  return (
    <Router>
      <div className="flex">
        <SideNav />
        <div className="flex-grow">
          <Routes>
            <Route path="/properties" element={<PropertyDashBoard />} />
            <Route path="/properties/propertyOnBoard" element={<PropertyOnBoard />} />
            <Route path="/masters" element={<MastersSubSideNav />} />
            <Route path="/city" element={<CityDashBoard />} />     
            <Route path="/masters/sales" element={<MastersSubSideNav />} />
            <Route path="/masters/cluster" element={<ClusterDashBoard />} />
            <Route path="/masters/state" element={<StateDashBoard />} />
            <Route path="/masters/institutes" element={<InstitutionDashBoard />} />
            <Route path="/masters/nearby" element={<NearByDashBoard />} />
            <Route path="/masters/roomTypes" element={<RoomTypeDashBoard />} />
            <Route path="/masters/paymentPlans" element={<PaymentPlanDashBoard />} />
            <Route path="/masters/direct_services" element={<DirectServicesDashboard />} />





            
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
