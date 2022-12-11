"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";


import PersonalLayout from "../../components/personalPage/personalLayout";

const Test = () => {
  const controls = useAnimationControls();

  const moonControls = useAnimationControls()

  useEffect(() => {
    
    controls.start({
      scale: 2,
      width: "100%",
      transition: { duration: 3, delay: 1 },
      background: "linear-gradient(to bottom, #bdc3c7, #2c3e50)",
    });
  });
  return (
    <motion.div
      className="w-scren h-screen  bg-red-800 "
      initial={{ background: "linear-gradient(to bottom, #ffb347, #ffcc33)" }}
      animate={controls}
    />
  );
};
export default Test;
