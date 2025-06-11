import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8, 
          delay: delay,
          ease: [0.16, 0.7, 0.2, 1],
          staggerChildren: 0.1
        }
      }}
      viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
