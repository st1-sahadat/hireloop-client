'use client'
import type { LucideIcon } from "lucide-react"
import {
    Banknote,
    Bookmark,
    Briefcase,
    Building2,
    CreditCard,
    FileText,
    Globe,
    Home,
    LayoutDashboard,
    Settings,
    Users,
} from "lucide-react"
import { usePathname } from "next/navigation"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useSession } from "@/lib/auth-client"
import Link from "next/link"

type UserRole = "seeker" | "recruiter" | "admin"

type MenuItem = {
    name: string
    url: string
    icon: LucideIcon
}

// Links to public pages, shown for every role
const publicNavItems: MenuItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "Browse Jobs", url: "/jobs", icon: Globe },
    { name: "Companies", url: "/companies", icon: Building2 },
    { name: "Pricing", url: "/pricing", icon: CreditCard },
]

const menuItemsByRole: Record<UserRole, MenuItem[]> = {
    seeker: [
        { name: "Overview", url: "/dashboard/seeker", icon: LayoutDashboard },
        { name: "Browse & Apply", url: "/dashboard/seeker/jobs", icon: Briefcase },
        { name: "Saved Jobs", url: "/dashboard/seeker/saved", icon: Bookmark },
        { name: "My Applications", url: "/dashboard/seeker/applications", icon: FileText },
        { name: "Billing", url: "/dashboard/seeker/billing", icon: CreditCard },
        { name: "Settings", url: "/dashboard/seeker/settings", icon: Settings },
    ],
    recruiter: [
        { name: "Overview", url: "/dashboard/recruiter", icon: LayoutDashboard },
        { name: "My Company", url: "/dashboard/recruiter/company", icon: Building2 },
        { name: "Manage Jobs", url: "/dashboard/recruiter/jobs", icon: Briefcase },
        { name: "Add Job", url: "/dashboard/recruiter/jobs/new", icon: Briefcase },
        { name: "Billing", url: "/dashboard/recruiter/billing", icon: CreditCard },
        { name: "Settings", url: "/dashboard/recruiter/settings", icon: Settings },
    ],
    admin: [
        { name: "Overview", url: "/dashboard/admin", icon: LayoutDashboard },
        { name: "Manage Users", url: "/dashboard/admin/users", icon: Users },
        { name: "Manage Companies", url: "/dashboard/admin/companies", icon: Building2 },
        { name: "Manage Jobs", url: "/dashboard/admin/jobs", icon: Briefcase },
        { name: "Payments", url: "/dashboard/admin/payments", icon: Banknote },
        { name: "Settings", url: "/dashboard/admin/settings", icon: Settings },
    ],
}

export function DashboardSidebar() {
    const {data: session, isPending} = useSession();
    const role = session?.user?.role || "seeker";
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup>
                    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                    <SidebarMenu>
                        {menuItemsByRole[role].map((item) => (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton
                                    render={<Link href={item.url} />}
                                    isActive={pathname === item.url}
                                >
                                    <item.icon />
                                    <span>{item.name}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Explore</SidebarGroupLabel>
                    <SidebarMenu>
                        {publicNavItems.map((item) => (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton
                                    render={<a href={item.url} />}
                                    isActive={pathname === item.url}
                                >
                                    <item.icon />
                                    <span>{item.name}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
