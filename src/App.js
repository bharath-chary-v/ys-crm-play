import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CityDashBoard from "./components/city/cityDashBoard";
import PropertyDashBoard from "./components/property/propertyDashboard";
import PropertyOnBoard from "./components/property/propertyOnBoard";
import SalesSubSideNav from "./components/sideNav/salesSubNav";
import SideNav from "./components/sideNav/sideNav";
import MastersSubSideNav from "./components/sideNav/subSideNav";

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
            <Route path="/masters/sales" component={<CityDashBoard />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
