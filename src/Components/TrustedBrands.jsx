import React from "react";
import { motion } from "framer-motion";
import "./TrustedBrands.css";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";

const TrustedBrands = () => {
  const brands = [
    { id: 1, logo: client1, alt: "Thangalakshmi Jewellery" },
    { id: 2, logo: client2, alt: "Swamy Jewellery" },
    { id: 3, logo: client3, alt: "Sri Kandan Thangamalihai" },
    { id: 4, logo: client4, alt: "Sayar Jewellers" },
    { id: 5, logo: client5, alt: "Shanthi Jewellery" },
    { id: 6, logo: client1, alt: "Thangalakshmi Jewellery" },
    { id: 7, logo: client2, alt: "Swamy Jewellery" },
  ];

  return (
    <div className="trusted-brands">
      <h2 className="brands-title">Brands That Trust Us!</h2>
      <div className="brands-container">
        <div className="brands-scroll">
          {brands.map((brand, index) => (
            <motion.div
              className="brand-card"
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Staggered delay for each card
              }}
              viewport={{ once: true, margin: "-100px" }} // Trigger animation once
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="brand-logo"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
