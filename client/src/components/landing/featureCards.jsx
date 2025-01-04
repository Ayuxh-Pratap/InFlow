'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="8" height="18" rx="2" fill="#00B8B8"/>
        <rect opacity="0.5" x="13" y="3" width="8" height="18" rx="2" fill="#00B8B8"/>
      </svg>
    ),
    title: 'Integrate',
    description: 'The ability to quickly set up and customize workflows for just about anything.'
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="3" fill="#00B8B8"/>
        <circle opacity="0.5" cx="17" cy="7" r="3" fill="#00B8B8"/>
        <circle opacity="0.5" cx="7" cy="17" r="3" fill="#00B8B8"/>
        <circle cx="17" cy="17" r="3" fill="#00B8B8"/>
      </svg>
    ),
    title: 'Colaborate',
    description: 'Manage projects, organize tasks, and build team spirit—all in one place.'
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" fill="#00B8B8"/>
        <circle opacity="0.5" cx="12" cy="12" r="11" stroke="#00B8B8" strokeWidth="2"/>
      </svg>
    ),
    title: 'Succeed',
    description: 'Every single part of your task can be managed, tracked, and shared with teammates.'
  }
]


export function FeatureCards() {
  return (
    <section className="relative py-16 pt-32 overflow-hidden">
      <motion.div 
        className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group border-2 border-zinc-900 relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#111111] from-70% to-[#111111]/0  p-8 py-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative z-10 text-center flex flex-col items-center justify-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
            <div 
              className="absolute inset-0 z-0 bg-gradient-to-br from-[#00B8B8]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

