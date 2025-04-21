'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedElement({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5
}: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 