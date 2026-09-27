'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideIn' | 'scale' | 'bounce';
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedElement({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  animation = 'fadeIn',
  direction = 'up',
}: AnimatedElementProps) {
  const distance = 20;
  const xValue = direction === 'left' ? distance : direction === 'right' ? -distance : 0;
  const yValue = direction === 'up' ? distance : direction === 'down' ? -distance : 0;

  const variants = {
    fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    slideUp: { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } },
    slideIn: { hidden: { opacity: 0, x: xValue, y: yValue }, visible: { opacity: 1, x: 0, y: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
    bounce: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  }[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px' }}
      variants={variants}
      transition={
        animation === 'bounce'
          ? { duration, delay, type: 'spring', stiffness: 100, damping: 12 }
          : { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
