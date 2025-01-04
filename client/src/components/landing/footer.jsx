'use client'

import { motion } from 'framer-motion'
import Logo  from './logo'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
    product: {
        title: 'Product',
        links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Documentation', 'Download']
    },
    company: {
        title: 'Company',
        links: ['About Us', 'Careers', 'Press Kit', 'Contact Us', 'Blog', 'Newsletter']
    },
    resources: {
        title: 'Resources',
        links: ['Community', 'Help Center', 'API Reference', 'Status Page', 'Privacy Policy', 'Terms of Service']
    },
    developers: {
        title: 'Developers',
        links: ['Get Started', 'API Status', 'Developer Blog', 'Open Source', 'GitHub Repository', 'Discord']
    }
}

const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export function Footer() {
    return (
        <footer className="relative w-full overflow-hidden mt-16">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-[#00B8B8]/5" />

            <div className="relative">
                {/* Main footer content */}
                <motion.div
                    className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Top section with logo and newsletter */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-16 grid gap-8 lg:grid-cols-2"
                    >
                        <div>
                            <Logo />
                            <p className="mt-4 max-w-md text-gray-400">
                                Create, share, and get feedback with collaborative boards for rapid development.
                                Build better products with your team.
                            </p>
                        </div>
                        <div className="lg:ml-auto lg:max-w-md">
                            <h3 className="mb-4 text-lg font-semibold text-white">
                                Subscribe to our newsletter
                            </h3>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 rounded-lg bg-white/5 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#00B8B8]"
                                />
                                <button
                                    type="submit"
                                    className="rounded-lg bg-[#00B8B8] px-6 py-2 font-medium text-white transition-all hover:bg-[#00B8B8]/90 hover:shadow-lg hover:shadow-[#00B8B8]/20 focus:outline-none focus:ring-2 focus:ring-[#00B8B8] focus:ring-offset-2 focus:ring-offset-[#111111]"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Links section */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {Object.values(footerLinks).map((section, index) => (
                            <div key={index}>
                                <h3 className="mb-4 text-lg font-semibold text-white">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href="#"
                                                className="text-gray-400 transition-colors hover:text-[#00B8B8]"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>

                    {/* Bottom section with social links and copyright */}
                    <motion.div
                        variants={itemVariants}
                        className="border-t border-white/10 py-8"
                    >
                        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                            <div className="flex gap-6">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="text-gray-400 transition-colors hover:text-[#00B8B8]"
                                        >
                                            <Icon className="h-6 w-6" />
                                        </a>
                                    )
                                })}
                            </div>
                            <p className="text-sm text-gray-400">
                                © {new Date().getFullYear()} InFlow. All rights reserved.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    )
}

