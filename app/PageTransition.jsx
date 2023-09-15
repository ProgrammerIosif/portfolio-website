'use client'

import { motion } from "framer-motion"

export default function PageTransition() {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#271941]"
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        exit={{x:["0%","100%"], width:["0%","100%"]}}
        transition={{duration:1, ease:"easeInOut"}}
      />
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-gray-300"
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{delay:0.2, duration:1, ease:"easeInOut"}}
      />
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-accent"
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{delay:0.4, duration:1, ease:"easeInOut"}}
      />
    </>
  )
}

