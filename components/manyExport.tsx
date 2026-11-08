import Image from "next/image"
import Link from "next/link"
import logo from "@/app/asset/logo.png"
import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={logo}
        alt="HireLoop"
        loading="eager"
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  )
}
export { Logo }
