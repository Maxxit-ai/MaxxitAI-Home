"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// This component wraps content with smooth reveal animations
const AnimatedContent = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing function
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
