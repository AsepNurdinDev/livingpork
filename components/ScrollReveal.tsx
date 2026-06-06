'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number    
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    up:    { hidden: { opacity: 0, y: 40  }, visible: { opacity: 1, y: 0  } },
    down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0  } },
    left:  { hidden: { opacity: 0, x: 40  }, visible: { opacity: 1, x: 0  } },
    right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0  } },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ duration: 0.6, ease: 'easeOut', delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  )
}