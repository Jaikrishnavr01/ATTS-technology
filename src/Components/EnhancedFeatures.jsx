import React from "react";
import { motion } from "framer-motion";
import "./EnhancedFeatures.css";
import dashboardImage from "../assets/dashboard.svg"; // Ensure the path is correct

const EnhancedFeatures = () => {
  const features = [
    { id: 1, title: "Cloud Support", icon: "fas fa-cloud" },
    { id: 2, title: "Savings Scheme Management", icon: "fas fa-piggy-bank" },
    { id: 3, title: "Data Management", icon: "fas fa-database" },
    { id: 4, title: "Estimation & Billing", icon: "fas fa-file-invoice-dollar" },
    { id: 5, title: "Cost Management", icon: "fas fa-calculator" },
    { id: 6, title: "Reporting & Dashboard", icon: "fas fa-chart-bar" },
  ];

  return (
    <section className="enhanced-features">
      <div className="features-left">
        <motion.h1
          className="features-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Growth with AURUMM: <br />
          Your Partner in Success!
        </motion.h1>
        <div className="features-list">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="feature-icon-container">
                <i className={`feature-icon ${feature.icon}`}></i>
              </div>
              <p className="feature-title">{feature.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="features-right"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={dashboardImage}
          alt="Dashboard Screenshot"
          className="dashboard-image"
        />
        <div className="floating-icons">
          <motion.i
            className="floating-icon fas fa-users"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.i>
          <motion.i
            className="floating-icon fas fa-chart-pie"
            animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          ></motion.i>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedFeatures;
