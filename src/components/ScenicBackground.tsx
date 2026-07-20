import React from 'react';
import { motion } from 'motion/react';

export default function ScenicBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-20 bg-gradient-to-b from-[#bce3ff] via-[#e3f4ff] to-[#f6faff]">
      {/* 3D Clouds drifting */}
      <motion.div
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[8%] left-0 opacity-80"
      >
        <svg width="120" height="60" viewBox="0 0 120 60" fill="white">
          <path d="M 20 40 A 20 20 0 0 1 40 20 A 25 25 0 0 1 80 15 A 20 20 0 0 1 100 40 Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ x: ["110%", "-10%"] }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        className="absolute top-[18%] left-0 opacity-60"
      >
        <svg width="180" height="90" viewBox="0 0 180 90" fill="white">
          <path d="M 30 60 A 30 30 0 0 1 60 30 A 37 37 0 0 1 120 22 A 30 30 0 0 1 150 60 Z" />
        </svg>
      </motion.div>

      {/* Birds flying */}
      <motion.div
        animate={{
          x: ["-20%", "120%"],
          y: [120, 80, 110, 90, 120]
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-0 opacity-40 flex gap-4"
      >
        {[1, 2, 3].map((b) => (
          <svg key={b} width="24" height="16" viewBox="0 0 24 16" fill="none" stroke="#4b7fa6" strokeWidth="2" strokeLinecap="round">
            <motion.path
              d="M 2 10 Q 6 2 12 10 Q 18 2 22 10"
              animate={{ d: ["M 2 14 Q 6 4 12 14 Q 18 4 22 14", "M 2 6 Q 6 12 12 6 Q 18 12 22 6", "M 2 14 Q 6 4 12 14 Q 18 4 22 14"] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: b * 0.15 }}
            />
          </svg>
        ))}
      </motion.div>

      {/* Background Mountains */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] flex items-end justify-between opacity-90 z-0">
        {/* Mountain Left */}
        <svg className="w-[50%] h-[80%] text-[#a3cb73] fill-current -mr-[15%] drop-shadow-xl" viewBox="0 0 500 300" preserveAspectRatio="none">
          <path d="M 0 300 Q 150 120 280 180 Q 380 230 500 300 Z" />
        </svg>
        
        {/* Mountain Center Blue-Green */}
        <svg className="w-[60%] h-[90%] text-[#8eb859] fill-current -mx-[10%] z-10 drop-shadow-2xl" viewBox="0 0 600 350" preserveAspectRatio="none">
          <path d="M 0 350 Q 180 80 320 120 Q 480 170 600 350 Z" />
        </svg>

        {/* Mountain Right */}
        <svg className="w-[45%] h-[75%] text-[#7ca446] fill-current -ml-[15%] z-0" viewBox="0 0 450 250" preserveAspectRatio="none">
          <path d="M 0 250 Q 150 100 280 140 Q 380 180 450 250 Z" />
        </svg>
      </div>

      {/* Foreground Camping Elements */}
      <div className="absolute bottom-0 left-0 w-full h-[32%] z-10">
        {/* Meadow grass */}
        <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-b from-[#6b9534] to-[#517522] rounded-t-[100px] shadow-inner" />

        <div className="absolute bottom-0 w-full max-w-7xl mx-auto left-0 right-0 h-full flex justify-between items-end px-12">
          {/* Pine trees left */}
          <div className="flex items-end gap-2 mb-4">
            <svg width="40" height="90" viewBox="0 0 40 90" fill="#325016">
              <polygon points="20,0 0,45 15,45 2,75 38,75 25,45 40,45" />
              <rect x="17" y="75" width="6" height="15" fill="#52391b" />
            </svg>
            <svg width="55" height="120" viewBox="0 0 55 120" fill="#3d601b" className="-ml-4 z-10">
              <polygon points="27.5,0 0,60 20,60 4,100 51,100 35,60 55,60" />
              <rect x="24" y="100" width="7" height="20" fill="#52391b" />
            </svg>
          </div>

          {/* Camp Tent & Flagpole & Campfire */}
          <div className="flex items-end gap-8 mb-4 relative">
            {/* Flickering Campfire */}
            <div className="relative w-16 h-16 mr-6 flex items-end justify-center">
              {/* Wooden logs */}
              <svg className="absolute bottom-0 z-10" width="36" height="12" viewBox="0 0 36 12" fill="#5c3f21">
                <rect x="2" y="2" width="32" height="6" rx="3" transform="rotate(-15 18 5)" />
                <rect x="2" y="2" width="32" height="6" rx="3" transform="rotate(15 18 5)" />
              </svg>
              {/* Flame shapes */}
              <motion.div
                animate={{
                  scaleY: [1, 1.25, 0.95, 1.15, 1],
                  scaleX: [1, 0.9, 1.1, 0.95, 1]
                }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-14 bg-gradient-to-t from-[#ff4000] via-[#ffaa00] to-[#ffff99] rounded-t-full origin-bottom z-20 blur-[1px]"
              />
              <motion.div
                animate={{
                  scaleY: [1.2, 0.9, 1.1, 1.0, 1.2],
                  y: [0, -3, 0, -1, 0]
                }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute bottom-1 w-6 h-10 bg-[#ffdd00] rounded-t-full origin-bottom z-30 opacity-80 blur-[0.5px]"
              />
              {/* Fire glow */}
              <div className="absolute bottom-0 w-24 h-24 rounded-full bg-[#ff943d] opacity-20 blur-xl -z-10 animate-pulse" />
            </div>

            {/* Union Flagpole (Cột cờ Đội Thiếu Niên Tiền Phong) */}
            <div className="relative w-12 h-[160px] flex justify-center">
              {/* Bamboo staff */}
              <div className="w-[5px] h-[155px] bg-[#d9af62] border-r border-[#be9443] rounded-t" />
              {/* Cờ Đội (Waving flag) */}
              <motion.div
                animate={{
                  skewY: [-2, 2, -2],
                  rotateZ: [-1, 2, -1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 left-[5px] w-16 h-11 bg-gradient-to-r from-[#e31e24] to-[#f42e36] rounded-r shadow-md flex items-center justify-center border-l-2 border-[#fff]"
              >
                {/* Waving creases */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent opacity-60" />
                {/* Yellow star & green bamboo shoot inside white circle */}
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-[2px] shadow-sm">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {/* Bamboo shoot icon (Măng non) and star */}
                    <circle cx="12" cy="12" r="11" fill="#e31e24" />
                    {/* Golden star */}
                    <polygon points="12,3 14,9 20,9 15,13 17,19 12,15 7,19 9,13 4,9 10,9" fill="#fffb00" />
                    {/* Bamboo shoot symbol (Măng tre) */}
                    <path d="M 11 15 L 12 11 L 13 15 Z" fill="#00a859" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Cartoon Tent */}
            <div className="relative w-28 h-24 mb-1">
              <svg width="112" height="96" viewBox="0 0 112 96">
                {/* Tent body */}
                <polygon points="56,10 5,85 107,85" fill="#f26e22" />
                <polygon points="56,10 56,85 107,85" fill="#d9540b" /> {/* shadow */}
                {/* Tent door */}
                <polygon points="56,25 25,85 87,85" fill="#4d2f14" />
                <polygon points="56,25 56,85 87,85" fill="#36200d" />
                {/* Tent flaps */}
                <polygon points="56,25 15,85 25,85" fill="#fbaf3f" />
                <polygon points="56,25 97,85 87,85" fill="#fbaf3f" />
                {/* Ground sheet */}
                <rect x="0" y="85" width="112" height="5" fill="#2d4217" rx="2" />
              </svg>
            </div>
          </div>

          {/* Pine tree right */}
          <div className="flex items-end gap-1 mb-4">
            <svg width="50" height="110" viewBox="0 0 50 110" fill="#325016">
              <polygon points="25,0 0,55 20,55 3,90 47,90 30,55 50,55" />
              <rect x="22" y="90" width="6" height="20" fill="#52391b" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
