"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Preloader.module.scss";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const letterAnimation = {
    initial: { rotateY: -90, opacity: 0 },
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.preloader}
        >
          <div className={styles.preloaderContent}>
            {/* Spinner */}
            <div className={styles.spinnerWrapper}>
              <div className={styles.spinnerBg} />
              <motion.div
                className={styles.spinner}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* REAP Text */}
            <div className={styles.textWrapper}>
              <div className={styles.textContainer}>
                {["R", "E", "A", "P"].map((letter, i) => (
                  <div key={letter} className={styles.letter}>
                    {letter}
                    <motion.div
                      className={styles.animatedLetter}
                      variants={letterAnimation}
                      initial="initial"
                      animate="animate"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      {letter}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loading Text */}
            <p className={styles.loadingText}>Loading</p>
          </div>

          {/* Background transition effect */}
          <div className={styles.backgroundEffect}>
            <div className={styles.backgroundContainer}>
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  className={styles.backgroundSlice}
                  initial={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + index * 0.1,
                    ease: [0.1, 0.1, 0.1, 1],
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
