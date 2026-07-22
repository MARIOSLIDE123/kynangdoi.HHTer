import React from 'react';
import { motion } from 'motion/react';

interface MascotProps {
  leftAngle: number;  // Angle in degrees (0 = North, 45 = NE, etc.)
  rightAngle: number; // Angle in degrees (0 = North, etc.)
  expression?: 'happy' | 'smile' | 'wave' | 'salute' | 'normal';
  size?: number;
  className?: string;
  isAnimated?: boolean;
}

export default function Mascot({
  leftAngle,
  rightAngle,
  expression = 'smile',
  size = 280,
  className = '',
  isAnimated = true
}: MascotProps) {
  
  // Pivot points for shoulders:
  // Left shoulder: (75, 110)
  // Right shoulder: (125, 110)
  
  // Determine eye state based on expression
  const renderFace = () => {
    switch (expression) {
      case 'happy':
        return (
          <>
            {/* Curved happy eyes */}
            <path d="M 85 62 Q 92 54 99 62" stroke="#2c3e50" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 101 62 Q 108 54 115 62" stroke="#2c3e50" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Blushing cheeks */}
            <circle cx="82" cy="70" r="5" fill="#ff7675" opacity="0.6" />
            <circle cx="118" cy="70" r="5" fill="#ff7675" opacity="0.6" />
            {/* Big laughing mouth */}
            <path d="M 92 74 Q 100 90 108 74 Z" fill="#c0392b" stroke="#2c3e50" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );
      case 'smile':
      default:
        return (
          <>
            {/* Round sparkling eyes */}
            <circle cx="90" cy="62" r="4.5" fill="#2c3e50" />
            <circle cx="110" cy="62" r="4.5" fill="#2c3e50" />
            <circle cx="88.5" cy="60" r="1.5" fill="white" />
            <circle cx="108.5" cy="60" r="1.5" fill="white" />
            {/* Cheerful smile */}
            <path d="M 93 72 Q 100 80 107 72" stroke="#2c3e50" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Cute cheeks */}
            <circle cx="82" cy="68" r="4.5" fill="#ff7675" opacity="0.4" />
            <circle cx="118" cy="68" r="4.5" fill="#ff7675" opacity="0.4" />
          </>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} style={{ width: size, height: size * 1.2 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-xl overflow-visible"
      >
        {/* Shadow base */}
        <ellipse cx="100" cy="225" rx="45" ry="8" fill="rgba(0,0,0,0.15)" />

        {/* --- FEET & LEGS --- */}
        <g id="legs">
          {/* Left leg */}
          <rect x="84" y="170" width="10" height="40" rx="4" fill="#34495e" />
          {/* Right leg */}
          <rect x="106" y="170" width="10" height="40" rx="4" fill="#34495e" />
          {/* Black shoes with socks */}
          <rect x="80" y="202" width="14" height="6" rx="2" fill="white" />
          <path d="M 76 208 C 76 204 94 204 94 208 L 94 214 H 76 Z" fill="#2c3e50" />
          <rect x="106" y="202" width="14" height="6" rx="2" fill="white" />
          <path d="M 106 208 C 106 204 124 204 124 208 L 124 214 H 106 Z" fill="#2c3e50" />
        </g>

        {/* --- MAIN BODY / TORSO --- */}
        <g id="body">
          {/* Short blue uniform pants */}
          <path d="M 78 150 H 122 V 172 H 108 V 166 H 92 V 172 H 78 Z" fill="#2980b9" stroke="#2c3e50" strokeWidth="2.5" />
          {/* White Cadet uniform shirt */}
          <path d="M 78 100 H 122 V 154 H 78 Z" fill="#fcfcfc" stroke="#2c3e50" strokeWidth="2.5" />
          {/* Dark blue shoulders stripes */}
          <rect x="78" y="100" width="10" height="6" fill="#2980b9" />
          <rect x="112" y="100" width="10" height="6" fill="#2980b9" />
          {/* Yellow Union Badge on chest */}
          <circle cx="88" cy="118" r="4.5" fill="#f1c40f" />
          <polygon points="88,115 89,117 91,118 89,119 88,121 87,119 85,118 87,117" fill="#e74c3c" />
        </g>

        {/* --- HEAD & FACE --- */}
        <g id="head">
          {/* Ears */}
          <circle cx="68" cy="68" r="8" fill="#ffd0a6" stroke="#2c3e50" strokeWidth="2" />
          <circle cx="132" cy="68" r="8" fill="#ffd0a6" stroke="#2c3e50" strokeWidth="2" />
          
          {/* Face */}
          <circle cx="100" cy="68" r="32" fill="#ffe0bd" stroke="#2c3e50" strokeWidth="2.5" />
          
          {/* Hair - Cute Pixarian short hairstyle */}
          <path d="M 67 62 C 67 36 133 36 133 62 C 127 50 115 48 100 52 C 85 48 73 50 67 62 Z" fill="#523215" stroke="#2c3e50" strokeWidth="2" />
          <path d="M 90 40 Q 100 24 105 40 Z" fill="#523215" /> {/* Hair tuft */}
          
          {/* Eyes, Smile, Cheeks */}
          {renderFace()}

          {/* Calot Cap (Mũ ca-lô Đội) */}
          <g transform="translate(100, 36) rotate(-10) translate(-100, -36)">
            <path d="M 75 22 Q 100 5 125 22 L 120 32 L 80 32 Z" fill="#f1c40f" stroke="#2c3e50" strokeWidth="2" />
            <path d="M 72 26 L 128 26 L 125 32 L 75 32 Z" fill="#e74c3c" />
            {/* Cap insignia star */}
            <polygon points="100,10 102,15 107,15 103,18 105,23 100,20 95,23 97,18 93,15 98,15" fill="#f1c40f" />
          </g>
        </g>

        {/* --- RED SCARF (Khăn quàng đỏ) --- */}
        <g id="red-scarf" className="overflow-visible">
          {/* Scarf collar */}
          <path d="M 83 100 Q 100 112 117 100 Q 100 95 83 100" fill="#e74c3c" stroke="#2c3e50" strokeWidth="2" />
          {/* Scarf knot */}
          <circle cx="100" cy="107" r="4.5" fill="#c0392b" stroke="#2c3e50" strokeWidth="1.5" />
          {/* Scarf tails waving slightly */}
          <motion.path
            d="M 99 110 L 88 132 L 98 126 Z"
            fill="#e74c3c"
            stroke="#2c3e50"
            strokeWidth="1.5"
            animate={{ rotate: [-2, 4, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 101 110 L 114 130 L 104 125 Z"
            fill="#e74c3c"
            stroke="#2c3e50"
            strokeWidth="1.5"
            animate={{ rotate: [4, -4, 4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
          />
        </g>

        {/* --- LEFT ARM & FLAG (Semaphore) --- */}
        {/* Left shoulder pivot at (76, 108) */}
        <g transform="translate(76, 108)">
          <motion.g
            id="left-arm-group"
            animate={{ rotate: leftAngle }}
            initial={{ rotate: leftAngle }}
            transition={isAnimated ? { type: "spring", stiffness: 90, damping: 16 } : { duration: 0 }}
            style={{ transformOrigin: "0px 0px" }}
          >
            {/* Flesh arm pointing UP in local space (from (0,0) to (0,-46)) */}
            <line x1="0" y1="0" x2="0" y2="-46" stroke="#ffe0bd" strokeWidth="9" strokeLinecap="round" />
            <line x1="0" y1="0" x2="0" y2="-46" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />

            {/* White shirt sleeve around upper arm from (0,0) to (0,-20) */}
            <line x1="0" y1="0" x2="0" y2="-20" stroke="#fcfcfc" strokeWidth="13" strokeLinecap="round" />
            <line x1="0" y1="0" x2="0" y2="-20" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
            {/* Shoulder joint cap seamlessly attaching arm to torso */}
            <circle cx="0" cy="0" r="7" fill="#fcfcfc" stroke="#2c3e50" strokeWidth="2" />

            {/* Flag stick extending further from hand (0, -46) to (0, -90) */}
            <line x1="0" y1="-46" x2="0" y2="-90" stroke="#d9af62" strokeWidth="4.5" strokeLinecap="round" />

            {/* Semaphore Flag banner at (0, -90). Square banner size 28x28 */}
            <g transform="translate(0, -90)">
              {/* Yellow Triangle */}
              <path d="M 0 0 L 28 -28 L 0 -28 Z" fill="#f1c40f" stroke="#2c3e50" strokeWidth="1.5" />
              {/* Red Triangle */}
              <path d="M 0 0 L 28 -28 L 28 0 Z" fill="#e74c3c" stroke="#2c3e50" strokeWidth="1.5" />
              {/* Tie knots */}
              <circle cx="0" cy="0" r="2.5" fill="#2c3e50" />
              <circle cx="0" cy="-28" r="2.5" fill="#2c3e50" />
            </g>
          </motion.g>
        </g>

        {/* --- RIGHT ARM & FLAG (Semaphore) --- */}
        {/* Right shoulder pivot at (124, 108) */}
        <g transform="translate(124, 108)">
          <motion.g
            id="right-arm-group"
            animate={{ rotate: rightAngle }}
            initial={{ rotate: rightAngle }}
            transition={isAnimated ? { type: "spring", stiffness: 90, damping: 16 } : { duration: 0 }}
            style={{ transformOrigin: "0px 0px" }}
          >
            {/* Flesh arm pointing UP in local space (from (0,0) to (0,-46)) */}
            <line x1="0" y1="0" x2="0" y2="-46" stroke="#ffe0bd" strokeWidth="9" strokeLinecap="round" />
            <line x1="0" y1="0" x2="0" y2="-46" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />

            {/* White shirt sleeve around upper arm from (0,0) to (0,-20) */}
            <line x1="0" y1="0" x2="0" y2="-20" stroke="#fcfcfc" strokeWidth="13" strokeLinecap="round" />
            <line x1="0" y1="0" x2="0" y2="-20" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
            {/* Shoulder joint cap seamlessly attaching arm to torso */}
            <circle cx="0" cy="0" r="7" fill="#fcfcfc" stroke="#2c3e50" strokeWidth="2" />

            {/* Flag stick extending further from hand (0, -46) to (0, -90) */}
            <line x1="0" y1="-46" x2="0" y2="-90" stroke="#d9af62" strokeWidth="4.5" strokeLinecap="round" />

            {/* Semaphore Flag banner at (0, -90). Square banner size 28x28 */}
            <g transform="translate(0, -90)">
              {/* Yellow Triangle */}
              <path d="M 0 0 L -28 -28 L 0 -28 Z" fill="#f1c40f" stroke="#2c3e50" strokeWidth="1.5" />
              {/* Red Triangle */}
              <path d="M 0 0 L -28 -28 L -28 0 Z" fill="#e74c3c" stroke="#2c3e50" strokeWidth="1.5" />
              {/* Tie knots */}
              <circle cx="0" cy="0" r="2.5" fill="#2c3e50" />
              <circle cx="0" cy="-28" r="2.5" fill="#2c3e50" />
            </g>
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
