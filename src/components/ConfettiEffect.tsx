import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotate: number;
  tx: number;
  ty: number;
}

export default function ConfettiEffect({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#e67e22', '#1abc9c', '#ff7675'];
    const newParticles: Particle[] = Array.from({ length: 80 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 250;
      return {
        id: i,
        x: 50, // Screen center percent
        y: 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 12,
        rotate: Math.random() * 360,
        tx: Math.cos(angle) * distance, // Translate X destination
        ty: Math.sin(angle) * distance + 150 // Translate Y with heavy gravity drop
      };
    });

    setParticles(newParticles);

    // Auto cleanup after 2.5 seconds
    const timer = setTimeout(() => {
      setParticles([]);
    }, 2800);

    return () => clearTimeout(timer);
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `calc(${p.x}vw - ${p.size / 2}px)`,
            y: `calc(${p.y}vh - ${p.size / 2}px)`,
            scale: 0.1,
            rotate: 0,
            opacity: 1
          }}
          animate={{
            x: `calc(${p.x}vw + ${p.tx}px)`,
            y: `calc(${p.y}vh + ${p.ty}px)`,
            scale: [1, 1, 0.8, 0],
            rotate: p.rotate + 720,
            opacity: [1, 1, 0.8, 0]
          }}
          transition={{
            duration: 1.8 + Math.random() * 0.8,
            ease: "easeOut"
          }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '20%',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          }}
        />
      ))}
    </div>
  );
}
