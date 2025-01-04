'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, ChevronsRight } from 'lucide-react'


export function AdminCard({ admin, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <button
        onClick={onClick}
        className="relative border-2 border-zinc-700 h-[400px] w-full overflow-hidden rounded-2xl bg-black"
      >
        {/* Image with gradient overlay */}
        <figure className="h-full w-full overflow-hidden">
          <Image
            src={admin.image}
            alt={admin.name}
            fill
            priority
            className="h-full w-full scale-105 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-100"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#00B8B825] via-[#00B8B85b] to-[#00B8B8]" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/0 via-[#000000]/0 to-[#111111]" />
        </figure>

        {/* Content container */}
        <article className="absolute -bottom-14 w-full space-y-3 p-6 transition-all duration-300 group-hover:bottom-0">
          <div className='text-start'>
            <h3 className="text-2xl font-bold text-white">
              {admin.name}
            </h3>
            <p className="text-sm text-gray-400">
              {admin.position}
            </p>
          </div>

          <div className="flex text-sm items-center gap-1 pt-2 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Sign In
            <ChevronsRight className="h-5 w-5" />
          </div>
        </article>
      </button>
    </motion.div>
  )
}

