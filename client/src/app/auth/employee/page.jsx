'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { AuthCard } from '@/components/auth/authCard'
import { AuthInput } from '@/components/auth/authInput'
import { CheckCircle } from 'lucide-react'

export default function EmployeeLogin() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        role: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add your form validation and submission logic here
        router.push('/dashboard')
    }

    return (
        <div className="flex w-full min-h-screen items-center justify-between auth-back p-4">
            <div className="absolute inset-0" />
            <div className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between gap-16">
                <div className='flex-1/2'>
                    <div className="mb-8 flex items-center gap-2">
                        {/* <CheckCircle className="h-6 w-6 text-[#00B8B8]" />
                    <h1 className="text-xl font-semibold text-white">
                        Project Management App
                    </h1> */}
                        <div className="lg:col-start-2">
                            <div className="mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-[#00B8B8]" />
                                <span className="text-lg font-medium text-[#00B8B8]">
                                    InFlow : Employee Login
                                </span>
                            </div>
                            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-4xl">
                                Build the workflow you want with InFlow
                            </h2>
                            <p className="text-lg text-gray-400">
                                Manage your boards using Drag-n-Drop, create adittional boards and tasks. You can also create new tasks, assign them to team members and set deadlines. 
                            </p>
                        </div>
                    </div>
                </div>

                <AuthCard>
                        <h2 className="mb-2 text-3xl font-bold text-white">
                            Welcome back
                        </h2>
                        <p className="mb-8 text-gray-400">
                            Please enter your details to sign in
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <AuthInput
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                error={errors.email}
                                required
                            />

                            <AuthInput
                                label="Role"
                                type="text"
                                placeholder="Enter your role"
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                error={errors.role}
                                required
                            />

                            <AuthInput
                                label="Password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                error={errors.password}
                                required
                            />

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-[#00B8B8] px-4 py-2.5 font-medium text-white hover:bg-[#00B8B8]/90 focus:outline-none focus:ring-2 focus:ring-[#00B8B8] focus:ring-offset-2 focus:ring-offset-black"
                            >
                                Sign in
                            </button>
                        </form>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => router.push('/auth/admin')}
                            className="text-sm text-gray-400 hover:text-[#00B8B8]"
                        >
                            Are you admin?
                        </button>
                    </div>
                </AuthCard>
            </div>
        </div>
    )
}