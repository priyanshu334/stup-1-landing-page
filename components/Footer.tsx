import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t mt-24">
      <div className="container mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              EduFlow
            </h3>
            <p className="text-sm text-muted-foreground">
              A curriculum-aligned productivity platform
              built exclusively for CBSE teachers.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-foreground transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contact</h4>
            <p className="text-sm text-muted-foreground">
              support@eduflow.in
            </p>
            <p className="text-sm text-muted-foreground">
              Built for Indian educators 🇮🇳
            </p>
          </div>

        </div>

        {/* Divider */}
        <Separator className="my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} EduFlow. All rights reserved.
          </p>

          <p>
            Made with clarity for CBSE educators.
          </p>
        </div>

      </div>
    </footer>
  )
}