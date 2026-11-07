"use client"

import * as React from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 rounded-xl border border-border/70 bg-card/80 px-4 shadow-lg shadow-black/5 backdrop-blur-xl supports-[backdrop-filter]:bg-card/70 sm:px-6"
      >
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <span aria-hidden className="h-6 w-px bg-border" />

          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm font-medium text-brand-purple transition-colors hover:text-brand-purple/80"
            >
              Sign In
            </Link>
            <Button
              render={<Link href="/sign-up" />}
              nativeButton={false}
              className="h-10 rounded-lg bg-brand-purple px-5 text-white shadow-lg shadow-brand-purple/25 hover:bg-brand-purple-hover"
            >
              Get Started
            </Button>
          </div>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>

          <SheetContent side="right" className="gap-0 p-0">
            <SheetHeader className="border-b p-5">
              <Logo />
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Browse the HireLoop website
              </SheetDescription>
            </SheetHeader>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto p-3">
              <ul className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-2 border-t p-4">
              <Link
                href="/sign-in"
                onClick={() => setMenuOpen(false)}
                className={cn(buttonVariants({ variant: "outline" }), "h-10 w-full")}
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setMenuOpen(false)}
                className={cn(
                  buttonVariants(),
                  "h-10 w-full bg-brand-purple text-white hover:bg-brand-purple-hover"
                )}
              >
                Get Started
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export { Navbar }
