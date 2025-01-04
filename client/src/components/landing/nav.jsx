"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './logo'

export default function nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 z-50 w-full bg-black border-b-[1px] border-zinc-600 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <Logo />

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="h-6 w-6 text-white" />
                    ) : (
                        <Menu className="h-6 w-6 text-white" />
                    )}
                </button>

                {/* Desktop menu */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#" className="text-sm text-white/90 hover:text-white">
                        About
                    </a>
                    <a href="/auth/superadmin" className="text-sm text-white/90 hover:text-white">
                        SuperAdmin
                    </a>
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
                            English
                            <svg
                                className="h-4 w-4 transition-transform group-hover:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="/auth/employee"
                            className="text-sm text-white/90 hover:text-white"
                        >
                            Login
                        </a>
                        <a
                            href="#"
                            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`${isOpen ? 'max-h-64' : 'max-h-0'
                    } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
            >
                <div className="flex flex-col gap-4 p-4">
                    <a href="#" className="text-sm text-white/90 hover:text-white">
                        About
                    </a>
                    <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
                        English
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <div className="flex flex-col gap-4">
                        <a
                            href="#"
                            className="text-sm text-white/90 hover:text-white"
                        >
                            Login
                        </a>
                        <a
                            href="#"
                            className="rounded-full bg-white px-4 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-white/90"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

