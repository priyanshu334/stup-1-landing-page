"use client"
import { Button } from "@/components/ui/button"
import { HeroModel } from "@/components/hero-model"
import { PricingSection } from "@/components/PriceSection"  // assuming renamed or fixed typo
import { FAQSection } from "@/components/faqsection"
import { Footer } from "@/components/Footer"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main className="pt-20">

      {/* HERO SECTION – bigger impact */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* LEFT – Text + CTA stack – improved hierarchy */}
          <div className="space-y-8 md:space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              CBSE Question Papers
              <br />
              <span className="text-primary">Ready in Minutes,</span> Not Weekends
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Stop spending 3–5 hours (or entire weekends) creating balanced papers.
              Generate perfect CBSE-aligned question papers, lesson plans, worksheets — with auto mark distribution and Bloom’s levels — in under 5 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                className="text-lg py-7 px-10"
                onClick={() => router.push("/form")}
              >
                Start Free – No Card Needed
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg py-7 px-10"
                onClick={() => router.push("/demo")}  // assuming you have or will add a demo route
              >
                Watch 60-Second Demo
              </Button>
            </div>

            <div className="space-y-3">
              <p className="text-base font-medium text-primary">
                Built exclusively for CBSE teachers (Nursery – Class 10)
              </p>
              <p className="text-sm text-muted-foreground">
                Join 1,000+ teachers saving hours every week • Cancel anytime
              </p>
            </div>
          </div>

          {/* RIGHT – 3D Model – keep as visual hook */}
          <div className="relative h-[380px] sm:h-[450px] md:h-[520px] lg:h-[580px] mt-8 md:mt-0">
            <HeroModel />
          </div>

        </div>
      </section>

      {/* Rest of the page */}
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}