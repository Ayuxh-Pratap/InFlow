"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AudioLines, ChevronDown, Globe, LineChartIcon, Search, X, Home, Users, ScreenShare, FileCheck, Calendar, ClipboardList, AlertCircle, History, Settings, Building2, UserCog, FileSpreadsheet } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigationGroups = [
  {
    title: "Main Navigation",
    items: [
      {
        title: "Dashboard Overview",
        subtitle: "View system statistics and metrics",
        href: "/dashboard/superadmin",
        icon: Home
      },
      {
        title: "User Management",
        subtitle: "Manage system users and roles",
        href: "/dashboard/superadmin/users",
        icon: Users
      },
      {
        title: "Organization Setup",
        subtitle: "Configure organization settings",
        href: "/dashboard/superadmin/organization",
        icon: Building2
      }
    ]
  },
  {
    title: "System Administration",
    items: [
      {
        title: "Role Management",
        subtitle: "Configure user roles and permissions",
        href: "/dashboard/superadmin/roles",
        icon: UserCog
      },
      {
        title: "System Logs",
        subtitle: "View system activity and audit logs",
        href: "/dashboard/superadmin/logs",
        icon: FileSpreadsheet
      }
    ]
  },
  {
    title: "Reports & Analytics",
    items: [
      {
        title: "Performance Metrics",
        subtitle: "View system performance data",
        href: "/dashboard/superadmin/metrics",
        icon: LineChartIcon
      },
      {
        title: "Audit Reports",
        subtitle: "Access system audit reports",
        href: "/dashboard/superadmin/audit",
        icon: ClipboardList
      }
    ]
  },
  {
    title: "Configuration",
    items: [
      {
        title: "System Settings",
        subtitle: "Manage global system settings",
        href: "/dashboard/superadmin/settings",
        icon: Settings
      }
    ]
  }
]

export function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = React.useState(true)
  const [searchQuery, setSearchQuery] = React.useState("")
  const pathname = usePathname()

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // Filter navigation items based on search query
  const filteredGroups = React.useMemo(() => {
    if (!searchQuery) return navigationGroups
    
    return navigationGroups.map(group => ({
      ...group,
      items: group.items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(group => group.items.length > 0)
  }, [searchQuery])

  return (
    <div className="relative min-h-screen global-bg">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-sm bg-[#00B8B8]" />
              ))}
            </div>
            <span className="text-lg font-semibold text-white">InFlow</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <Button variant="ghost" className="text-white/80 hover:text-white">
              Projects
            </Button>
            <Button variant="ghost" className="text-white/80 hover:text-white">
              Profile
            </Button>
            <Button variant="ghost" className="text-white/80 hover:text-white">
              Search
            </Button>
            <Button variant="ghost" className="text-white/80 hover:text-white">
              About
            </Button>
          </nav>

          {/* Sign Out Button */}
          <Button
            variant="ghost"
            className="hidden text-white/80 hover:text-white md:block"
          >
            
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <div className="flex min-h-screen flex-col pt-28">
        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/60 transition-opacity z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
        {/* Sidebar */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 w-[400px] transform border-0 shadow-2xl shadow-black border-border/40 bg-[#111111] transition-transform duration-200 z-50 ease-in-out rounded-l-3xl",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <Button
            size="icon"
            className="absolute -left-12 top-4 text-background"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AudioLines className="h-4 w-4" />
          </Button>

          <div className="flex h-full flex-col">
            {/* Profile Section */}
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 h-28 prograd rounded-tl-3xl" />

              {/* Profile Content */}
              <div className="relative px-6 pt-16">
                <div className="flex flex-col items-center">
                  {/* Avatar with Golden Border */}
                  <div className="relative">
                    <div
                      className="absolute rounded-full shadow-2xl shadow-black" />
                    <div className="relative aspect-square h-24 overflow-hidden rounded-full">
                      <img
                        alt="Profile"
                        src="/promax.jpg"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="mt-4 text-center">
                    <h2 className="text-2xl font-semibold text-white">Ayush Pratap Singh</h2>
                    <p className="text-sm text-gray-400">
                      ID: vdsgfdsgdshfxhgfhthf
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex w-full gap-4">
                    <Button
                      variant="secondary"
                      className="flex-1 bg-[#25262b] text-sm font-normal text-white hover:bg-[#25262b]/60"
                    >
                      Edit Profile
                    </Button>
                    <Button
                      variant="secondary"
                      className="flex-1 bg-[#25262b] text-sm font-normal text-white hover:bg-[#25262b]/60"
                    >
                      Change Avatar
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              <div className="my-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-white" />
                  <Input
                    placeholder="Search Navigation..."
                    className="w-full bg-zinc-800/50 pl-10 border-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <Accordion type="multiple" className="space-y-4">
                {filteredGroups.map((group) => (
                  <AccordionItem
                    key={group.title}
                    value={group.title}
                    className="border-0"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-sm font-medium text-white">{group.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "flex w-full items-center rounded-lg p-4 text-left transition-colors",
                              pathname === item.href
                                ? "bg-[#25262b] text-white"
                                : "bg-black/70 text-white/80 hover:bg-black/50"
                            )}
                          >
                            <item.icon className="mr-3 h-5 w-5" />
                            <div>
                              <div className="text-sm font-medium">
                                {item.title}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {item.subtitle}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout