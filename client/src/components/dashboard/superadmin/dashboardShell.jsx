"use client"

import Logo from "@/components/landing/logo"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { ChevronDown, Globe } from 'lucide-react'

export function DashboardShell({
    children
}) {
    return (
        <div className="relative flex min-h-screen">
            <Sidebar className="border-r bg-gradient-to-b from-blue-500/10 to-slate-950">
                <SidebarHeader className="border-b px-6 py-4">
                    <Logo />
                </SidebarHeader>
                <SidebarContent>
                    <div className="flex items-center justify-between px-6 py-4">
                        <Button variant="ghost" className="px-2">About</Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Globe className="h-4 w-4" />
                                    English
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>English</DropdownMenuItem>
                                <DropdownMenuItem>Spanish</DropdownMenuItem>
                                <DropdownMenuItem>French</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </SidebarContent>
            </Sidebar>
            <SidebarInset className="bg-background">
                <header className="flex h-16 items-center gap-4 border-b px-6">
                    <SidebarTrigger />
                    <div className="flex-1" />
                </header>
                <main>{children}</main>
            </SidebarInset>
        </div>
    )
}

