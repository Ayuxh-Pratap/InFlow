'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { AuthInput } from './authInput'
import Image from 'next/image'

export function AuthModal({ admin, isOpen, onClose, onSubmit }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center glasss-card p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative glass-card w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black p-1"
          >
            <div className="relative rounded-xl p-6 backdrop-blur-xl">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </button>

              {admin && (
                <div className="mb-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                      <Image
                        src={admin.image}
                        alt={admin.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {admin.name}
                      </h2>
                      <p className="text-gray-400">
                        {admin.position}
                      </p>
                    </div>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      const password = new FormData(e.currentTarget).get('password')
                      onSubmit(password)
                    }}
                    className="space-y-6"
                  >
                    <AuthInput
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />

                    <button
                      type="submit"
                      className="relative w-full overflow-hidden rounded-lg bg-[#00B8B8] p-0.5"
                    >
                      <div className="relative rounded-[6px] bg-[#00B8B8] px-4 py-2.5 text-center font-medium text-white transition-all hover:bg-[#00B8B8]/90">
                        Sign in
                      </div>
                      <motion.div
                        className="absolute inset-0 opacity-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        }}
                        animate={{
                          x: ['0%', '200%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

