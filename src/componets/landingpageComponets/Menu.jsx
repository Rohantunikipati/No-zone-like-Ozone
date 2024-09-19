import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Menu = () => {
  const MenuVar = {
    initial: {
      height: 0,
    },
    animate: {
      height: "60vh",
      transition: {
        duration: 1,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    exit: {
      height: 0,
      transition: {
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };
  return (
      <motion.div
        className="MenuItems"
        variants={MenuVar}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div
          className="Menu"
        >
          <h3>Menu</h3>
          <h1>Case Studies</h1>
          <h1>Approch</h1>
          <h1>Services</h1>
          <h1>About Us</h1>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <div className="email">
            <div className="heading">Email</div>
            <div className="para">Get in touch whit us</div>
            <div className="para">Get free audit</div>
          </div>
          <div className="phone">
            <div className="heading">Phone</div>
            <div className="para">+91 999999999</div>
          </div>
        </div>
      </motion.div>
  );
};
