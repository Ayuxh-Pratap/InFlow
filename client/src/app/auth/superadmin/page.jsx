'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ChevronRight, Eye, EyeOff, Info } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from 'next/navigation'
import { setCredentials } from '@/redux/slices/authSlice'
import { useSuperAdminLoginMutation, useSuperAdminRegisterMutation } from '@/redux/services/superAdminSlice'
import { toast } from 'sonner'

export default function AuthPage() {
    const router = useRouter()
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const [superAdminLoggedIn, setSuperAdminLoggedIn] = useState(true)

    const dispatch = useDispatch()
    const [superAdminLogin, { isLoading, isSuccess, error, data }] = useSuperAdminLoginMutation()
    const [superAdminRegister, { isLoading: isLoadingRegister, isSuccess: isSuccessRegister, error: errorRegister, data: dataRegister }] = useSuperAdminRegisterMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!emailRegex.test(formData.email)) {
            toast.error("Invalid email format");
            return;
        }

        if (!passwordRegex.test(formData.password)) {
            toast.error("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number");
            return;
        }

        if (!isLogin && formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (isLogin) {
            await superAdminLogin(formData)
        } else {
            await superAdminRegister(formData)
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Login successful')
            dispatch(setCredentials(data))
            router.push('/dashboard/superadmin')
        }
        if (error) {
            toast.error(error.data.message || 'Login failed')
        }
        if (isSuccessRegister) {
            toast.success('Register successful , Login to continue')
            toggleForm()
            dispatch(setCredentials(dataRegister))
        }
        if (errorRegister) {
            toast.error(errorRegister.data.message || 'Register failed')
        }
    }, [isSuccess, data, error, errorRegister, isSuccessRegister, dataRegister, dispatch, router])

    const toggleForm = () => {
        setIsLogin(!isLogin)
        setFormData({ email: '', name: '', password: '', confirmPassword: '' })
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    }

    return (
        <div className="flex w-full min-h-screen auth-back p-4">
            <div className="m-auto flex w-full max-w-6xl items-center justify-center gap-8 lg:gap-16">
                <div className="hidden lg:block lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="text-white"
                    >
                        <motion.h1
                            variants={textVariants}
                            custom={0}
                            className="mb-6 text-4xl font-bold leading-tight"
                        >
                            {isLogin ? "Welcome back to InFlow" : "Join InFlow Today"}
                        </motion.h1>
                        <motion.p
                            variants={textVariants}
                            custom={1}
                            className="mb-8 text-xl text-gray-300"
                        >
                            {isLogin
                                ? "Streamline your workflow, collaborate seamlessly, and boost productivity with InFlow's intuitive project management tools."
                                : "Experience the power of efficient project management. Sign up now to unlock a world of organized tasks and tools"}
                        </motion.p>
                        <ul className="space-y-4 text-lg">
                            {[
                                "Intuitive task management",
                                "Real-time collaboration",
                                "Customizable workflows",
                                "Insightful analytics"
                            ].map((feature, index) => (
                                <motion.li
                                    key={index}
                                    variants={textVariants}
                                    custom={index + 2}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle className="h-5 w-5 text-[#00B8B8]" />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#00B8B8] blur-[100px] opacity-5" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative glass-card overflow-hidden rounded-2xl p-8 shadow-2xl"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-6 w-6 text-[#00B8B8]" />
                                    <h1 className="text-xl font-semibold text-white">
                                        InFlow
                                    </h1>
                                </div>
                                <div className="relative">
                                    <div className="flex w-full rounded-full bg-black/50 p-1">
                                        <button
                                            onClick={() => setIsLogin(true)}
                                            className={`relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${isLogin ? 'text-black' : 'text-white/30'
                                                }`}
                                        >
                                            Login
                                        </button>
                                        <button
                                            onClick={() => setIsLogin(false)}
                                            className={`relative z-10  rounded-full px-6 py-2 pr-4 text-sm font-medium transition-colors duration-300 ${!isLogin ? 'text-black' : 'text-white/30'
                                                }`}
                                        >
                                            Sign Up
                                        </button>
                                        <motion.div
                                            className="absolute inset-1 rounded-full bg-[#00B8B8] shadow-lg"
                                            initial={false}
                                            animate={{
                                                x: isLogin ? '0%' : '100%',
                                            }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30,
                                                duration: 0.3
                                            }}
                                            style={{ width: '50%' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isLogin ? 'login' : 'signup'}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="mb-2 text-3xl font-bold text-white">
                                        {isLogin ? 'Welcome back' : 'Create an account'}
                                    </h2>
                                    <p className="mb-8 text-gray-400">
                                        {isLogin ? 'Sign in to your account to continue' : 'Join InFlow and start managing efficiently'}
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {!isLogin && (
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    required
                                                    className="input-gradient w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-400 focus:border-[#00B8B8] focus:outline-none focus:ring-1 focus:ring-[#00B8B8] transition-all duration-300"
                                                />
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                className="input-gradient w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-400 focus:border-[#00B8B8] focus:outline-none focus:ring-1 focus:ring-[#00B8B8] transition-all duration-300"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
                                            <div className="relative">
                                                <input
                                                    id="password"
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="••••••••"
                                                    value={formData.password}
                                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                    required
                                                    className="input-gradient w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-400 focus:border-[#00B8B8] focus:outline-none focus:ring-1 focus:ring-[#00B8B8] transition-all duration-300"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                                >
                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                </button>
                                            </div>
                                        </div>

                                        {!isLogin && (
                                            <div className="space-y-2">
                                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">Confirm Password</label>
                                                <div className="relative">
                                                    <input
                                                        id="confirmPassword"
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        placeholder="••••••••"
                                                        value={formData.confirmPassword}
                                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                        required
                                                        className="input-gradient w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-400 focus:border-[#00B8B8] focus:outline-none focus:ring-1 focus:ring-[#00B8B8] transition-all duration-300"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                                    >
                                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        <div className="relative">
                                            <div className="relative">
                                                <motion.button
                                                    type="submit"
                                                    className={`group relative w-full overflow-hidden rounded-lg bg-[#00B8B8] px-4 py-2.5 font-medium text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00B8B8] focus:ring-offset-2 focus:ring-offset-gray-900 ${!isLogin && superAdminLoggedIn ? 'cursor-not-allowed bg-gray-500' : 'hover:bg-[#00B8B8]/90'
                                                        }`}
                                                    disabled={!isLogin && superAdminLoggedIn}
                                                    whileHover={!isLogin && superAdminLoggedIn ? { scale: 1 } : {}}
                                                    whileTap={!isLogin && superAdminLoggedIn ? { scale: 1 } : {}}
                                                >
                                                    <span className="relative z-10">
                                                        {isLogin ? 'Sign in' : 'Sign up'}
                                                    </span>
                                                    {!isLogin && !superAdminLoggedIn && (
                                                        <motion.div
                                                            className="absolute inset-0 z-0"
                                                            initial={{ x: '-100%' }}
                                                            whileHover={{ x: '100%' }}
                                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                            style={{
                                                                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
                                                            }}
                                                        />
                                                    )}
                                                </motion.button>
                                            </div>
                                        </div>
                                    </form>

                                    {isLogin && (
                                        <div className="mt-4">
                                            <a href="#" className="text-sm text-[#00B8B8] hover:underline">Forgot password?</a>
                                        </div>
                                    )}

                                    {!isLogin && (
                                        <div className="mt-4">
                                            <a href="#" className="text-sm text-[#b80031] hover:underline">(Our Platfrom only allow one SuperAdmin account per company*)</a>
                                        </div>
                                    )}

                                    <div className="mt-6 flex items-center justify-end">
                                        <button
                                            onClick={() => router.push('/auth/employee')}
                                            className="group flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-[#00B8B8]"
                                        >
                                            Employee login
                                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}