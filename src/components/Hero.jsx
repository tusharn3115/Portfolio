import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { style } from 'framer-motion/client'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-auto items-start gap-5`}>


        {/* dot and line besides the text heading */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>


        {/* heading text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Tushar Negi</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create smooth, seamless, and animated web applications focused
            <br className='sm:block hidden' /> on delivering exceptional user experiences with precision and creativity.
          </p>
        </div>
      </div>


        {/* computer canvas */}
        <ComputersCanvas />
    </section>
  )
}

export default Hero