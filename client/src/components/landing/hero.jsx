"use client"

import { ArrowBigRight, ArrowRight, MoveRight } from "lucide-react"
import Image from "next/image"

export default function hero() {

    return (
        <div className="relative overflow-hidden min-h-fit">
            <Image src="/grad.png" alt="Hero" fill className="object-cover" />
            <div className="relative w-full my-24 flex flex-col items-center justify-center pt-20 text-center">
                <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                    Beta Version Available
                </span>

                <h1 className="mb-6 max-w-4xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-6xl">
                    Collaborate and build
                    <br />
                    faster, all in flow.
                </h1>

                <p className="mb-8 max-w-2xl text-lg text-white/70 md:text-xl">
                    Create, share, and get feedback with collaborative
                    <br />
                    boards for rapid development.
                </p>

                <button className="bg-white/15 hover:bg-white/10 transition-all duration-200 ease-in-out  flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-white backdrop-blur-md">
                    <span className="relative z-10">Get Started</span>
                    <MoveRight/>
                </button>
            </div>
        </div>
    )
}

