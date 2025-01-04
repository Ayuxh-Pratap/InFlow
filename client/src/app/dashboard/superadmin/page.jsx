'use client'

import * as React from 'react'
import { motion } from "framer-motion"
import { BarChart3, Users, FolderKanban, ShieldCheck, ArrowRight } from 'lucide-react'

// const actions = [
//   {
//     title: "Analytics Platform",
//     description: "Integrate powerful analytics with your existing tech stack for insights and reporting capabilities",
//     icon: BarChart3,
//     gradient: "from-[#3245ff]/20 to-[#bc3fff]/20",
//     glow: "from-[#3245ff]/10 to-[#bc3fff]/10",
//   },
//   {
//     title: "Project Ecosystem",
//     description: "Connect your workflow with our vast ecosystem of supported integrations and third-party tools",
//     icon: FolderKanban,
//     gradient: "from-[#2563eb]/20 to-[#76e4ff]/20",
//     glow: "from-[#2563eb]/10 to-[#76e4ff]/10",
//   },
//   {
//     title: "Employee Management",
//     description: "Streamline your workforce management with our comprehensive suite of HR and administration",
//     icon: Users,
//     gradient: "from-[#7928ca]/20 to-[#ff0080]/20",
//     glow: "from-[#7928ca]/10 to-[#ff0080]/10",
//   },
//   {
//     title: "Security Control",
//     description: "Advanced security protocols and authentication systems to protect your organization's assets",
//     icon: ShieldCheck,
//     gradient: "from-[#ff4d4d]/20 to-[#f9cb28]/20",
//     glow: "from-[#ff4d4d]/10 to-[#f9cb28]/10",
//   }
// ]

const actions = [
  {
    title: "Analytics Platform",
    description: "Integrate powerful analytics with your existing tech stack for insights and reporting capabilities",
    icon: BarChart3,
    color: "#3245ff"
  },
  {
    title: "Project Ecosystem",
    description: "Connect your workflow with our vast ecosystem of supported integrations and third-party tools",
    icon: FolderKanban,
    color: "#ffffff"
  },
  {
    title: "Employee Management",
    description: "Streamline your workforce management with our comprehensive suite of HR and administration",
    icon: Users,
    color: "#7928ca"
  },
  {
    title: "Security Control",
    description: "Advanced security protocols and authentication systems to protect your organization's assets",
    icon: ShieldCheck,
    color: "#ff4d4d"
  }
]

function ActionCard({ action }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ scale: 1.02 }}
      className="group relative h-[340px] overflow-hidden rounded-3xl bg-[#030305]/80 p-8 transition-all duration-300"
    >
      {/* Background Pattern and Bottom Gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1613121a_1px,transparent_1px),linear-gradient(to_bottom,#1613121a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(to bottom right, ${action.color}10, transparent)`
          }}
        />
      </div>

      <div className="relative z-0 flex h-full flex-col items-center lg:items-start">
        {/* Icon */}
        <motion.div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A1B1E] backdrop-blur-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <action.icon className="h-8 w-8 text-white" />
        </motion.div>

        {/* Content */}
        <div className="my-auto flex flex-col items-center text-center">
          <h3 className="mb-4 text-2xl font-semibold tracking-tight text-white">
            {action.title}
          </h3>
          <p className="mb-8 text-md text-white/60">
            {action.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
            className="group/btn relative overflow-hidden rounded-full bg-[#1A1B1E] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#252629] hover:shadow-lg hover:shadow-black/40"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span className="transition-transform duration-300 group-hover/btn:translate-x-[-4px]">
                Access Action
              </span>
              <span className='transition-transform duration-300 group-hover/btn:translate-x-[4px]'>
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl py-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
          Hello, Super Admin!
        </h1>
        <p className="mb-8 text-lg text-white/60">
          Here are some actions you can perform, or you can click on the menu on the left to navigate to other pages.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {actions.map((action) => (
            <ActionCard key={action.title} action={action} />
          ))}
        </div>
      </div>
    </div>
  )
}
