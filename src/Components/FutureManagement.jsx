import React from "react";
import "./FutureManagement.css";

const FutureManagement = () => {
  const features = [
    {
      icon: "⭐", // Replace with an appropriate icon/image
      title: "All-Round Assistance",
      description:
        "Crafted for excellence, AURUMM is a premium end-to-end software suite that is designed for jewellery stores of all sizes.",
    },
    {
      icon: "👥", // Replace with an appropriate icon/image
      title: "Relationship Management",
      description:
        "Stay tuned with your customers and vendors to keep their data safe and sound - with AURUMM, anything is possible!",
    },
    {
      icon: "24/7", // Replace with an appropriate icon/image
      title: "Technical Support",
      description:
        "Our dedicated team of professionals are available anytime throughout the year to resolve all your queries!",
    },
    {
      icon: "💡", // Replace with an appropriate icon/image
      title: "Stay Ahead",
      description:
        "We're always keeping up with the latest trends and updating our platforms - so you'll always have the edge over your competitors!",
    },
  ];

  return (
    <div className="future-management">
      <h2 className="future-management-title">This is The Future of Jewellery Store Management</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureManagement;
