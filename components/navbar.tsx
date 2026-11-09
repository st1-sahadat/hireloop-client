"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Logo from "../app/asset/logo.png"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSession, signOut } from "@/lib/auth-client"

// Matches the "Hireloop 2.0" design: eyebrow links + auth actions inside a
// floating dark pill on the right of the logo.
const NAV_LINKS = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
] as const

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false);
  const { data: session } = useSession();

  console.log('user session in navbar', session)

  React.useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])


  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" aria-label="HireLoop home" className="block shrink-0">
          <Image
            src={Logo}
            alt="HireLoop"
            width={160}
            height={44}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop */}
        <nav
          aria-label="Main navigation"
          className="hidden h-17 items-center gap-6 rounded-lg border border-white/10 bg-[#1A1A1F] px-6 pt-2 pb-2 lg:flex"
        >
          <ul className="flex items-center gap-5">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(link.href + "/")

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-base tracking-[-0.0125rem] transition-colors hover:text-white",
                      active
                        ? "font-bold text-[#EDEDEF] underline underline-offset-3"
                        : "text-[#EDEDEF]/90"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Separator */}
          <div aria-hidden className="h-px w-6 bg-[#A8A8A8]/40" />
          <div className="flex items-center gap-4">
            {session?.user ?
              <>
                <span className="text-[#EDEDEF]">Welcome, {session.user.name}!</span>
                <Button
                  onClick={handleSignOut}
                  nativeButton={false}
                  className="h-9.5 rounded-[8px] bg-transparent px-4 text-lg font-semibold text-[#645AFF] hover:bg-white/5 hover:text-[#645AFF]"
                >
                  Sign Out
                </Button>
              </>
              : <>
                <Button
                  render={<Link href="/sign-in" />}
                  nativeButton={false}
                  className="h-9.5 rounded-[8px] bg-transparent px-4 text-lg font-semibold text-[#645AFF] hover:bg-white/5 hover:text-[#645AFF]"
                >
                  Sign In
                </Button>
                <Button
                  render={<Link href="/sign-up" />}
                  nativeButton={false}
                  className="h-13 rounded-[8px] bg-[#5C53FE] px-6 text-lg font-medium text-[#EDEDEF] shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-[#7B74FF]"
                >
                  Get Started
                </Button>
              </>}
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          aria-expanded={open}
          aria-controls="site-navbar-mobile"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "size-11 rounded-lg border border-white/10 bg-[#1A1A1F] text-[#EDEDEF] hover:bg-white/5 hover:text-white lg:hidden"
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile panel */}
      {open ? (
        <div
          id="site-navbar-mobile"
          className="mx-auto mt-3 flex max-w-7xl flex-col gap-2 rounded-lg border border-white/10 bg-[#1A1A1F] p-4 shadow-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(link.href + "/")

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base tracking-[-0.0125rem] transition-colors hover:bg-white/5 hover:text-white",
                      active
                        ? "font-bold text-[#EDEDEF] underline underline-offset-3"
                        : "text-[#EDEDEF]/90"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div aria-hidden className="h-px w-full bg-[#A8A8A8]/40" />

          <div className="flex flex-col gap-2">
            <Button
              render={<Link href="/sign-in" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="h-11 rounded-[8px] border border-white/10 bg-transparent px-4 text-lg font-semibold text-[#645AFF] hover:bg-white/5 hover:text-[#645AFF]"
            >
              Sign In
            </Button>
            <Button
              render={<Link href="/sign-up" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="h-13 rounded-[8px] bg-[#5C53FE] px-6 text-lg font-medium text-[#EDEDEF] shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-[#7B74FF]"
            >
              Get Started
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

// ShadeCn Create Navbar
// "use client"
// import * as React from "react"
// import Link from "next/link"
// import { MenuIcon } from "lucide-react"
// import { Logo } from "@/components/manyExport"
// import { Button, buttonVariants } from "@/components/ui/button"
// import {
//   Sheet,
//   SheetContent,
//   // SheetDescription,
//   SheetHeader,
//   // SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import { cn } from "@/lib/utils"

// const navigation = [
//   { label: "Browse Jobs", href: "/jobs" },
//   { label: "Company", href: "/company" },
//   { label: "Pricing", href: "/pricing" },
// ]  


// function Navbar() {
//   const [menuOpen, setMenuOpen] = React.useState(false)

//   return (
//     <header className="sticky top-0 z-50 bg-[#050505]">
//       <nav
//         aria-label="Main navigation"
//         className=" flex h-16  items-center justify-between gap-6 rounded-xl border border-border/70 bg-card/80  shadow-lg shadow-black/5 backdrop-blur-xl supports-backdrop-filter:bg-card/70 sm:px-6"
//       >
//         {/* Image logo */}
//         <Logo />
//         {/* Nav Link */}
//         <div className="hidden items-center gap-8 md:flex">
//           <ul className="flex items-center gap-8">
//             {navigation.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <span aria-hidden className="h-6 w-px bg-border" />

//           <div className="flex items-center gap-4">
//             <Link
//               href="/sign-in"
//               className="text-sm font-medium text-brand-purple transition-colors hover:text-brand-purple/80"
//             >
//               Sign In
//             </Link>
//             <Button
//               render={<Link href="/sign-up" />}
//               nativeButton={false}
//               className="h-10 rounded-lg bg-brand-purple px-5 text-white shadow-lg shadow-brand-purple/25 hover:bg-brand-purple-hover"
//             >
//               Get Started
//             </Button>
//           </div>
//         </div>

//         <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
//           <SheetTrigger
//             render={
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="md:hidden"
//                 aria-label="Open navigation menu"
//               />
//             }
//           >
//             <MenuIcon />
//           </SheetTrigger>

//           <SheetContent side="right" className="gap-0 p-0">
//             <SheetHeader className="border-b p-5">
//               <Logo />
//               {/* <SheetTitle className="sr-only">Navigation menu</SheetTitle>
//               <SheetDescription className="sr-only">
//                 Browse the HireLoop website
//               </SheetDescription> */}
//             </SheetHeader>

//             <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto p-3">
//               <ul className="flex flex-col gap-1">
//                 {navigation.map((item) => (
//                   <li key={item.href}>
//                     <Link
//                       href={item.href}
//                       onClick={() => setMenuOpen(false)}
//                       className="flex rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             <div className="flex flex-col gap-2 border-t p-4">
//               <Link
//                 href="/sign-in"
//                 onClick={() => setMenuOpen(false)}
//                 className={cn(buttonVariants({ variant: "outline" }), "h-10 w-full")}
//               >
//                 Sign In
//               </Link>
//               <Link
//                 href="/sign-up"
//                 onClick={() => setMenuOpen(false)}
//                 className={cn(
//                   buttonVariants(),
//                   "h-10 w-full bg-brand-purple text-white hover:bg-brand-purple-hover"
//                 )}
//               >
//                 Get Started
//               </Link>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </nav>
//     </header>
//   )
// }

// export { Navbar }
