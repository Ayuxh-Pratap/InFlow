'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export function AuthCard({ children, showClose, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card relative w-full rounded-2xl p-8"
        >
            {showClose && (
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white"
                >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                </button>
            )}
            {children}
        </motion.div>
    )
}

