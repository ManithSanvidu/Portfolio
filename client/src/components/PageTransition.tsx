import { motion } from "motion/react";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

// Parallax multi-layer transition variant
const parallaxVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.985,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1], // Smooth organic deceleration curve
    },
  },
  exit: {
    opacity: 0,
    y: -35,
    scale: 0.985,
    filter: "blur(6px)",
    transition: {
      duration: 0.4,
      ease: [0.7, 0, 0.84, 0], // Smooth acceleration curve out
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="relative w-full min-h-full overflow-hidden">
      {/* Background Parallax Layer */}
      <motion.div
        aria-hidden="true"
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        exit={{ y: -90, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-0 z-0"
      >
        <div className="absolute -top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-600/[0.05] blur-[150px] rounded-full" />
        <div className="absolute top-[50%] -right-[5%] w-[450px] h-[450px] bg-[#b783f5]/[0.04] blur-[140px] rounded-full" />
      </motion.div>

      {/* Main Foreground Content Layer with Parallax Depth & Motion */}
      <motion.div
        variants={parallaxVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 w-full min-h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
