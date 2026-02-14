import React from 'react'
import clsx from 'clsx'
import { motion, type Transition } from 'framer-motion'

export interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  height?: 'sm' | 'md' | 'lg' | 'full'
  ctaText?: string
  ctaLink?: string
  onCTAClick?: () => void
  className?: string
  useGradient?: boolean
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 70,
  damping: 18,
  mass: 1.1
};

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCTAClick,
  className = '',
}) => {
  return (
    <div className={clsx("relative pt-24 md:pt-32 pb-20 md:pb-40 overflow-hidden", className)}>
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Left Col */}
        <motion.div 
          className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start text-center md:text-left mb-16 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springTransition}
        >
          <motion.p 
            className="uppercase tracking-[0.3em] w-full text-[#4ADEDE] font-black text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
          >
            Fast Delivery • Premium Service
          </motion.p>
          <motion.h1 
            className="my-4 text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.4 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="leading-relaxed text-xl md:text-2xl mb-10 text-slate-300 max-w-xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.button 
            onClick={onCTAClick}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74,222,222,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="mx-auto lg:mx-0 bg-white text-black font-black rounded-full py-5 px-12 shadow-2xl transition-all duration-300 text-lg border-2 border-transparent hover:border-[#4ADEDE]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.8 }}
          >
            {ctaText || 'Get Started'}
          </motion.button>
        </motion.div>
        
        {/* Right Col */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ ...springTransition, delay: 0.5 }}
        >
          <motion.img 
            animate={{ 
              y: [15, -15],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
            className="w-full max-w-[500px] lg:max-w-[600px] drop-shadow-[0_35px_35px_rgba(74,222,222,0.2)]" 
            src="https://undraw.co/api/illustrations/information_flow_re_388w.svg"
            alt="Information flow_Monochromatic(5).svg"
          />
        </motion.div>
      </div>
      
      {/* Dynamic Background Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4ADEDE]/10 rounded-full blur-[150px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[120px] -z-10" />

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg className="relative block w-full h-[60px] md:h-[120px]" viewBox="0 0 1428 174" preserveAspectRatio="none">
          <g fill="#FFFFFF" fillOpacity="1">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.1" />
            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.1" />
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1235.4,22.304 1439,120 1439,120 L1439,0 L0,0 L0.457,34.035 Z" />
          </g>
        </svg>
      </div>
    </div>
  )
}
Hero.displayName = 'Hero'

export const ServicesSection: React.FC<any> = () => null
