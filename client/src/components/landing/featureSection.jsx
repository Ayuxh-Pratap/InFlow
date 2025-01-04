'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const features = [
    {
        label: 'Universal',
        title: 'Build the workflow you want',
        description:
            'Seamlessly manage your projects with an intuitive drag-and-drop interface. ' +
            'Organize your tasks across multiple boards tailored to your specific needs. ' +
            'Create, move, and prioritize tasks effortlessly, ensuring that your team stays ' +
            'on track and focused on what matters most. Whether it’s a small project or ' +
            'a complex workflow, our platform adapts to your way of working.',
        image: '/f1.png',
        imageAlt: 'Project management interface showing multiple colored cards',
        reversed: false
    },
    {
        label: 'Optimized',
        title: 'Everything you need in one place',
        description:
            'Streamline your task management process by consolidating all critical information in one place. ' +
            'Add detailed descriptions, assign team members to tasks, and monitor progress effortlessly. ' +
            'Our platform ensures all stakeholders have access to the information they need, when they need it. ' +
            'Simplify collaboration, improve accountability, and keep your projects moving forward without roadblocks.',
        image: '/f2.png',
        imageAlt: 'Task management interface showing detailed project view',
        reversed: true
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.215, 0.610, 0.355, 1.000]
        }
    }
}

export function FeatureSection() {
    return (
        <section className="w-full py-16">
            <motion.div
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`mb-16 grid items-center gap-8 last:mb-0 md:gap-12 lg:grid-cols-2 lg:gap-16 ${feature.reversed ? 'lg:grid-flow-col-dense' : ''
                            }`}
                    >
                        <div className={feature.reversed ? 'lg:col-start-2' : ''}>
                            <div className="mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-[#00B8B8]" />
                                <span className="text-lg font-medium text-[#00B8B8]">
                                    {feature.label}
                                </span>
                            </div>
                            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-4xl">
                                {feature.title}
                            </h2>
                            <p className="text-lg text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                        <div
                            className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${feature.reversed ? 'lg:col-start-1' : ''
                                }`}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative transform perspective-[1000px] [transform-style:preserve-3d]">
                                    <Image
                                        src={feature.image}
                                        alt={feature.imageAlt}
                                        width={600}
                                        height={400}
                                        className="h-full w-full object-cover object-center"
                                    />

                                </div>
                            </div>
                            <div className={`absolute inset-0 ${feature.reversed ? 'bg-gradient-to-br from-[#ffffff]/5 via-transparent to-transparent' : 'bg-gradient-to-bl from-[#ffffff]/5 via-transparent to-transparent'
                                }`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/0 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}