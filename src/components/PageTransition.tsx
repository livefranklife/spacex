import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = { children: ReactNode };

const PageTransition: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;


