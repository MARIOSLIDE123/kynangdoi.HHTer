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

// Kinematic solver for 3-segment arm model:
// 1. Bắp tay (Upper arm): Fixed to torso shoulder S(72/128, 108) -> Elbow E
// 2. Cánh tay (Forearm): Elbow E -> Wrist W
// 3. Bàn tay & Cờ (Hand & Flag Stick): Wrist W -> Flag Tip T
function getArmKinematics(sX: number, sY: number, angleDeg: number, isLeft: boolean) {
  const rad = (angleDeg * Math.PI) / 180;
  
  // Flag direction unit vector (0 = Up, 90 = Right, 180 = Down, 270 = Left)
  const vx = Math.sin(rad);
  const vy = -Math.cos(rad);
  
  // Distance from Shoulder S to Wrist W
  const R = 38;
  const wX = sX + R * vx;
  const wY = sY + R * vy;
  
  // Midpoint M between Shoulder S and Wrist W
  const mX = (sX + wX) / 2;
  const mY = (sY + wY) / 2;
  
  // Offset h for elbow bend
  const h = 8.5;
  
  // Perpendicular vector for elbow bend
  let px = -vy;
  let py = vx;
  
  if (isLeft) {
    // Elbow bends outward to the left (away from body center x=100)
    if (mX + h * px > 95) {
      px = -px;
      py = -py;
    }
  } else {
    // Elbow bends outward to the right (away from body center x=100)
    if (mX + h * px < 105) {
      px = -px;
      py = -py;
    }
  }
  
  const eX = mX + h * px;
  const eY = mY + h * py;
  
  // Flag stick extension from Wrist W to Tip T (stick length = 40)
  const stickLen = 40;
  const tX = wX + stickLen * vx;
  const tY = wY + stickLen * vy;
  
  return { sX, sY, eX, eY, wX, wY, tX, tY, angleDeg };
}

export default function Mascot({
  leftAngle,
  rightAngle,
  expression = 'smile',
  size = 280,
  className = '',
  isAnimated = true
}: MascotProps) {
  
  // Compute 3-segment kinematics for Left Arm (Shoulder at (72, 108))
  const l = getArmKinematics(72, 108, leftAngle, true);
  // Compute 3-segment kinematics for Right Arm (Shoulder at (128, 108))
  const r = getArmKinematics(128, 108, rightAngle, false);

  const springTransition = isAnimated 
    ? { type: "spring", stiffness: 90, damping: 16 } 
    : { duration: 0 };

  const renderFace = () => {
    switch (expression) {
      case 'happy':
        return (
          <>
            <path d="M 85 62 Q 92 54 99 62" stroke="#2c3e50" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 101 62 Q 108 54 115 62" stroke="#2c3e50" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="82" cy="70" r="5" fill="#ff7675" opacity="0.6" />
            <circle cx="118" cy="70" r="5" fill="#ff7675" opacity="0.6" />
            <path d="M 92 74 Q 100 90 108 74 Z" fill="#c0392b" stroke="#2c3e50" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );
      case 'smile':
      default:
        return (
          <>
            <circle cx="90" cy="62" r="4.5" fill="#2c3e50" />
            <circle cx="110" cy="62" r="4.5" fill="#2c3e50" />
            <circle cx="88.5" cy="60" r="1.5" fill="white" />
            <circle cx="108.5" cy="60" r="1.5" fill="white" />
            <path d="M 93 72 Q 100 80 107 72" stroke="#2c3e50" strokeWidth="3" strokeLinecap="round" fill="none" />
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
          <rect x="84" y="170" width="10" height="40" rx="4" fill="#34495e" />
          <rect x="106" y="170" width="10" height="40" rx="4" fill="#34495e" />
          <rect x="80" y="202" width="14" height="6" rx="2" fill="white" />
          <path d="M 76 208 C 76 204 94 204 94 208 L 94 214 H 76 Z" fill="#2c3e50" />
          <rect x="106" y="202" width="14" height="6" rx="2" fill="white" />
          <path d="M 106 208 C 106 204 124 204 124 208 L 124 214 H 106 Z" fill="#2c3e50" />
        </g>

        {/* --- MAIN BODY / TORSO --- */}
        <g id="body">
          {/* Short blue uniform pants */}
          <path d="M 76 148 H 124 V 172 H 108 V 166 H 92 V 172 H 76 Z" fill="#2980b9" stroke="#2c3e50" strokeWidth="2.5" />
          {/* White Cadet uniform shirt with curved shoulder seams */}
          <path d="M 88 100 Q 78 100 72 108 L 76 154 H 124 L 128 108 Q 122 100 112 100 Z" fill="#fcfcfc" stroke="#2c3e50" strokeWidth="2.5" />
          {/* Dark blue shoulder epaulets */}
          <path d="M 72 108 C 72 102 82 100 86 100" stroke="#2980b9" strokeWidth="4" strokeLinecap="round" />
          <path d="M 128 108 C 128 102 118 100 114 100" stroke="#2980b9" strokeWidth="4" strokeLinecap="round" />
          {/* Yellow Union Badge on chest */}
          <circle cx="88" cy="118" r="4.5" fill="#f1c40f" />
          <polygon points="88,115 89,117 91,118 89,119 88,121 87,119 85,118 87,117" fill="#e74c3c" />
        </g>

        {/* --- HEAD & FACE --- */}
        <g id="head">
          <circle cx="68" cy="68" r="8" fill="#ffd0a6" stroke="#2c3e50" strokeWidth="2" />
          <circle cx="132" cy="68" r="8" fill="#ffd0a6" stroke="#2c3e50" strokeWidth="2" />
          <circle cx="100" cy="68" r="32" fill="#ffe0bd" stroke="#2c3e50" strokeWidth="2.5" />
          <path d="M 67 62 C 67 36 133 36 133 62 C 127 50 115 48 100 52 C 85 48 73 50 67 62 Z" fill="#523215" stroke="#2c3e50" strokeWidth="2" />
          <path d="M 90 40 Q 100 24 105 40 Z" fill="#523215" />
          {renderFace()}

          <g transform="translate(100, 36) rotate(-10) translate(-100, -36)">
            <path d="M 75 22 Q 100 5 125 22 L 120 32 L 80 32 Z" fill="#f1c40f" stroke="#2c3e50" strokeWidth="2" />
            <path d="M 72 26 L 128 26 L 125 32 L 75 32 Z" fill="#e74c3c" />
            <polygon points="100,10 102,15 107,15 103,18 105,23 100,20 95,23 97,18 93,15 98,15" fill="#f1c40f" />
          </g>
        </g>

        {/* --- RED SCARF (Khăn quàng đỏ) --- */}
        <g id="red-scarf" className="overflow-visible">
          <path d="M 83 100 Q 100 112 117 100 Q 100 95 83 100" fill="#e74c3c" stroke="#2c3e50" strokeWidth="2" />
          <circle cx="100" cy="107" r="4.5" fill="#c0392b" stroke="#2c3e50" strokeWidth="1.5" />
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

        {/* --- LEFT ARM (3 ĐOẠN: BẮP TAY, CÁNH TAY, BÀN TAY & CỜ) --- */}
        <g id="left-arm-3-segments">
          {/* ĐOẠN 1: Bắp tay (Upper Arm - Cố định 1 đầu vào khớp vai SL(72,108) trên thân người -> Khuỷu tay EL) */}
          <motion.line animate={{ x1: l.sX, y1: l.sY, x2: l.eX, y2: l.eY }} transition={springTransition} stroke="#fcfcfc" strokeWidth="13" strokeLinecap="round" />
          <motion.line animate={{ x1: l.sX, y1: l.sY, x2: l.eX, y2: l.eY }} transition={springTransition} stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          <circle cx={l.sX} cy={l.sY} r={7.5} fill="#fcfcfc" stroke="#2c3e50" strokeWidth="2" />

          {/* ĐOẠN 2: Cánh tay (Forearm - Khuỷu tay EL -> Bàn tay WL) */}
          <motion.line animate={{ x1: l.eX, y1: l.eY, x2: l.wX, y2: l.wY }} transition={springTransition} stroke="#ffe0bd" strokeWidth="8.5" strokeLinecap="round" />
          <motion.line animate={{ x1: l.eX, y1: l.eY, x2: l.wX, y2: l.wY }} transition={springTransition} stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          {/* Khuỷu tay (Elbow Joint) */}
          <motion.circle animate={{ cx: l.eX, cy: l.eY }} transition={springTransition} r={4.5} fill="#ffe0bd" stroke="#2c3e50" strokeWidth="1.5" />

          {/* ĐOẠN 3: Bàn tay & Cán Cờ (Hand & Flag Stick - Bàn tay WL -> Đỉnh cán cờ TL) */}
          {/* Bàn tay (Hand Joint) */}
          <motion.circle animate={{ cx: l.wX, cy: l.wY }} transition={springTransition} r={4} fill="#ffe0bd" stroke="#2c3e50" strokeWidth="1.5" />
          {/* Cán cờ */}
          <motion.line animate={{ x1: l.wX, y1: l.wY, x2: l.tX, y2: l.tY }} transition={springTransition} stroke="#d9af62" strokeWidth="4" strokeLinecap="round" />

          {/* Lá cờ Semaphore (Flag Banner at Tip TL) */}
          <motion.g
            animate={{ x: l.tX, y: l.tY, rotate: l.angleDeg }}
            transition={springTransition}
            style={{ transformOrigin: "0px 0px" }}
          >
            <path d="M 0 0 L 26 -26 L 0 -26 Z" fill="#f1c40f" stroke="#2c3e50" strokeWidth="1.5" />
            <path d="M 0 0 L 26 -26 L 26 0 Z" fill="#e74c3c" stroke="#2c3e50" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="2.5" fill="#2c3e50" />
            <circle cx="0" cy="-26" r="2.5" fill="#2c3e50" />
          </motion.g>
        </g>

        {/* --- RIGHT ARM (3 ĐOẠN: BẮP TAY, CÁNH TAY, BÀN TAY & CỜ) --- */}
        <g id="right-arm-3-segments">
          {/* ĐOẠN 1: Bắp tay (Upper Arm - Cố định 1 đầu vào khớp vai SR(128,108) trên thân người -> Khuỷu tay ER) */}
          <motion.line animate={{ x1: r.sX, y1: r.sY, x2: r.eX, y2: r.eY }} transition={springTransition} stroke="#fcfcfc" strokeWidth="13" strokeLinecap="round" />
          <motion.line animate={{ x1: r.sX, y1: r.sY, x2: r.eX, y2: r.eY }} transition={springTransition} stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          <circle cx={r.sX} cy={r.sY} r={7.5} fill="#fcfcfc" stroke="#2c3e50" strokeWidth="2" />

          {/* ĐOẠN 2: Cánh tay (Forearm - Khuỷu tay ER -> Bàn tay WR) */}
          <motion.line animate={{ x1: r.eX, y1: r.eY, x2: r.wX, y2: r.wY }} transition={springTransition} stroke="#ffe0bd" strokeWidth="8.5" strokeLinecap="round" />
          <motion.line animate={{ x1: r.eX, y1: r.eY, x2: r.wX, y2: r.wY }} transition={springTransition} stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          {/* Khuỷu tay (Elbow Joint) */}
          <motion.circle animate={{ cx: r.eX, cy: r.eY }} transition={springTransition} r={4.5} fill="#ffe0bd" stroke="#2c3e50" strokeWidth="1.5" />

          {/* ĐOẠN 3: Bàn tay & Cán Cờ (Hand & Flag Stick - Bàn tay WR -> Đỉnh cán cờ TR) */}
          {/* Bàn tay (Hand Joint) */}
          <motion.circle animate={{ cx: r.wX, cy: r.wY }} transition={springTransition} r={4} fill="#ffe0bd" stroke="#2c3e50" strokeWidth="1.5" />
          {/* Cán cờ */}
          <motion.line animate={{ x1: r.wX, y1: r.wY, x2: r.tX, y2: r.tY }} transition={springTransition} stroke="#d9af62" strokeWidth="4" strokeLinecap="round" />

          {/* Lá cờ Semaphore (Flag Banner at Tip TR) */}
          <motion.g
            animate={{ x: r.tX, y: r.tY, rotate: r.angleDeg }}
            transition={springTransition}
            style={{ transformOrigin: "0px 0px" }}
          >
            <path d="M 0 0 L -26 -26 L 0 -26 Z" fill="#f1c40f" stroke="#2c3e50" strokeWidth="1.5" />
            <path d="M 0 0 L -26 -26 L -26 0 Z" fill="#e74c3c" stroke="#2c3e50" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="2.5" fill="#2c3e50" />
            <circle cx="0" cy="-26" r="2.5" fill="#2c3e50" />
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
