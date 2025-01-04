'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AdminCard } from '@/components//auth/adminCard'
import { AuthModal } from '@/components/auth/authModal'
import { CheckCircle } from 'lucide-react'

const admins = [
    {
        id: 1,
        name: 'Roshan Dubey',
        position: 'Cheif Executive Officer',
        location: 'London, UK',
        image: '/admin1.jpeg'
    },
    {
        id: 2,
        name: 'Ganesh Pratap',
        position: 'Cheif Technology Officer',
        location: 'New York, USA',
        image: '/admin2.jpeg'
    },
    {
        id: 3,
        name: 'Yuvraj Singh',
        position: 'Technical Head',
        location: 'Berlin, DE',
        image: '/admin3.jpeg'
    },
    {
        id: 4,
        name: 'Suraj Singh',
        position: 'Cheif Operations Officer',
        location: 'Tokyo, JP',
        image: '/admin4.jpeg'
    }
]



export default function AdminLogin() {
    const router = useRouter()
    const [selectedAdmin, setSelectedAdmin] = useState(null)
    const handleSubmit = (password) => {
        // Add your password validation logic here
        router.push('/dashboard')
    }

    return (
        <div className="flex min-h-screen items-center justify-center auth-back-back p-8">
            <div className="w-full max-w-6xl">
                <div className="mb-12 text-center flex flex-col items-center justify-center">
                    <div className="mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#00B8B8]" />
                        <span className="text-lg font-medium text-[#00B8B8]">
                            InFlow : Admin Login
                        </span>
                    </div>
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-4xl">
                        Choose your admin profile to contiue
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {admins.map((admin) => (
                        <AdminCard
                            key={admin.id}
                            admin={admin}
                            onClick={() => setSelectedAdmin(admin)}
                        />
                    ))}
                </div>

                <AuthModal
                    admin={selectedAdmin}
                    isOpen={selectedAdmin !== null}
                    onClose={() => setSelectedAdmin(null)}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}