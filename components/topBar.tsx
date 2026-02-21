"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./Mode-toggle"
import { useRouter } from "next/navigation"

export function Topbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          EduFlow
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="#features" className="hover:text-foreground transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-foreground transition">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-foreground transition">
            FAQ
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ModeToggle
           />
          <Button size="sm" onClick={()=>router.push("/form")}>
            Start Free
          </Button>
        </div>

      </div>
    </header>
  )
}