import React, { useState } from "react";
import { Link } from "react-router-dom";
import Eventpackages from "../../data/EventsPackages.json";
import CallToAction from "./CallToAction.jsx";
import EventsPackagesDetails from "./EventsPackagesDetails.jsx";
import EventsGrid from "./EventsGrid.jsx";
import ImportantNote from "./ImportantNote.jsx";
import HeroSection from "./HeroSection.jsx";
import "./Style.css";
function EventsPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = Eventpackages.eventsPackages;
  const openPackageDetails = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 via-white to-rose-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Packages Grid - Image Cards */}
      <EventsGrid packages={packages} openPackageDetails={openPackageDetails} />

      {/* Important Notes */}
      <ImportantNote />

      {/* Call to Action */}
      <CallToAction />

      {/* Package Details Modal */}
      {selectedPackage && (
        <EventsPackagesDetails
          selectedPackage={selectedPackage}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default EventsPackages;
