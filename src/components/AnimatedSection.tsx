'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideIn' | 'scale' | 'bounce';
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.6,
  staggerChildren = 0.1,
  animation = 'fadeIn',
  direction = 'up'
}: AnimatedSectionProps) {
  const getAnimationVariants = () => {
    switch (animation) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              duration: duration,
              delay: delay,
              staggerChildren: staggerChildren,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              staggerChildren: staggerChildren,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      
      case 'slideIn':
        const xOffset = direction === 'left' ? -50 : 50;
        return {
          hidden: { opacity: 0, x: xOffset },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              duration: duration,
              delay: delay,
              staggerChildren: staggerChildren,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: duration,
              delay: delay,
              staggerChildren: staggerChildren,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      
      case 'bounce':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              type: "spring",
              stiffness: 100,
              damping: 10,
              staggerChildren: staggerChildren
            }
          }
        };
      
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: staggerChildren
            }
          }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px", amount: 0.3 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
} 