import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

/*
  Travinno Logo SVG paths — accurately traced from the actual logo.png:
  - Outer shape: A location-pin / map-marker shape (circle top, pointed bottom)
  - Inner cutout: A lowercase 't' with a rounded stem bottom
  Both paths share the same coordinate space (viewBox 0 0 200 240).
  Using fill-rule="evenodd" so the 't' becomes a transparent hole in the red fill.
*/

// Outer location-pin shape — traced from logo.png
// Large circular top, tapers to a pointed bottom center
const outerPath =
  "M 100,10 " +
  "C 56,10 20,46 20,90 " +
  "C 20,120 34,146 56,162 " +
  "L 100,230 " +
  "L 144,162 " +
  "C 166,146 180,120 180,90 " +
  "C 180,46 144,10 100,10 Z";

// Inner lowercase 't' cutout — traced from logo.png
// Vertical stem with a horizontal crossbar near top, rounded bottom
const innerTPath =
  "M 88,50 L 88,76 L 70,76 L 70,94 L 88,94 " +
  "L 88,148 " +
  "C 88,158 94,164 100,165 " +
  "C 106,165 118,161 124,152 " +
  "L 113,140 " +
  "C 110,145 106,147 103,147 " +
  "C 101,147 106,144 106,140 " +
  "L 106,94 L 128,94 L 128,76 L 106,76 L 106,50 Z";

export default function Loader({ onComplete }) {
  // Lock scroll during loader
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.8, duration: 0.7, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (onComplete) onComplete();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '110px',
          height: '132px',
        }}
      >
        <svg
          viewBox="0 0 200 240"
          style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
        >
          {/* ── Step 1: Stroke-draw the outer pin shape (0 → 0.9s) ── */}
          <motion.path
            d={outerPath}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: [1, 1, 0] }}
            transition={{
              pathLength: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] },
              opacity: { delay: 1.9, duration: 0.35, ease: 'easeOut' },
            }}
          />

          {/* ── Step 2: Stroke-draw the inner 't' cutout (0.9s → 1.9s) ── */}
          <motion.path
            d={innerTPath}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: [1, 1, 0] }}
            transition={{
              pathLength: { delay: 0.9, duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] },
              opacity: { delay: 1.9, duration: 0.35, ease: 'easeOut' },
            }}
          />

          {/*
            ── Step 3: Filled logo fades in (1.9s → 2.3s) ──
            Uses evenodd fill-rule so the 't' path punches a transparent hole
            in the outer red pin — exactly matching logo.png appearance.
            NO stroke on this layer to avoid any white lines.
          */}
          <motion.path
            d={`${outerPath} ${innerTPath}`}
            fillRule="evenodd"
            fill="#E31D23"
            stroke="none"
            strokeWidth="0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.4, ease: 'easeOut' }}
          />
        </svg>
      </div>

      {/* ── Step 4: Brand name fades in (2.3s → 2.8s) ── */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.5, ease: 'easeOut' }}
        style={{
          marginTop: '28px',
          fontFamily: "'Satoshi', 'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '22px',
          letterSpacing: '0.28em',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        TRAVINNO
      </motion.div>
    </motion.div>
  );
}
