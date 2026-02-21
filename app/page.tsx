"use client"
import { Button } from "@/components/ui/button"
import { HeroModel } from "@/components/hero-model"
import { PricingSection } from "@/components/PriceSection"
import { FAQSection } from "@/components/faqsection"
import { Footer } from "@/components/Footer"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <main className="pt-20">

      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Generate CBSE-Aligned
              Question Papers in Minutes
            </h1>

            <p className="text-lg text-muted-foreground">
              Save 3–5 hours every week by automating
              lesson plans, worksheets, mark distribution,
              and Bloom’s taxonomy alignment.
            </p>

            <div className="flex gap-4">
              <Button size="lg" onClick={() => router.push("/form")}>
                Start Free
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Built exclusively for CBSE teachers (Nursery–Class 10)
            </p>
          </div>

          {/* RIGHT 3D MODEL */}
          <div className="h-[400px] md:h-[500px]">
            <HeroModel />
          </div>

        </div>
      </section>
      <PricingSection/>
      <FAQSection/>
      <Footer/>
    </main>
  )
}