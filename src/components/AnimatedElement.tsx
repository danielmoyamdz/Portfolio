'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

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
  direction = 'up'
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Retrasar la visibilidad para evitar parpadeos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  // Definir las variantes de animación según el tipo
  const getAnimationVariants = () => {
    const distance = 20;
    
    switch (animation) {
      case 'fadeIn':
        return {
          initial: { opacity: 0 },
          whileInView: { 
            opacity: 1,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      
      case 'slideUp':
        return {
          initial: { opacity: 0, y: distance },
          whileInView: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      
      case 'slideIn':
        const xValue = direction === 'left' ? distance : direction === 'right' ? -distance : 0;
        const yValue = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
        
        return {
          initial: { opacity: 0, x: xValue, y: yValue },
          whileInView: { 
            opacity: 1, 
            x: 0,
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      
      case 'bounce':
        return {
          initial: { opacity: 0, y: 50 },
          whileInView: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }
        };
      
      default:
        return {
          initial: { opacity: 0, y: 20 },
          whileInView: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
    }
  };

  const variants = getAnimationVariants();

  if (!isVisible) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "0px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
} 