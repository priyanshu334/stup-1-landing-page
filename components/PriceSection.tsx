import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">

        {/* Section Header – made more benefit-driven & urgent */}
        <div className="text-center space-y-5 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Stop Spending Hours on Question Papers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create perfect CBSE-aligned question papers, lesson plans and worksheets in minutes — not hours.
          </p>
          <p className="text-lg font-medium text-primary">
            Free to start. Upgrade for unlimited power when youre ready.
          </p>
        </div>

        {/* Pricing Cards – 2 plans still, but better differentiation */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* FREE PLAN – positioned as generous trial */}
          <Card className="border-border flex flex-col">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Starter</CardTitle>
              <p className="text-5xl font-bold mt-6">₹0</p>
              <p className="text-base text-muted-foreground mt-1">
                forever — no credit card needed
              </p>
            </CardHeader>

            <CardContent className="flex-1 space-y-5 pt-6">
              <div className="space-y-4">
                <Feature text="5 full generations per month" />
                <Feature text="100% CBSE-aligned formatting & structure" />
                <Feature text="Basic PDF export (watermarked)" />
                <Feature text="Standard difficulty levels" />
                <Feature text="Community support" />
              </div>

              <Button className="w-full mt-8 text-base py-6" variant="outline" size="lg">
                Start Free Today
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                Perfect for trying before committing
              </p>
            </CardContent>
          </Card>

          {/* PRO PLAN – hero plan with badge, better value copy */}
          <Card className="border-primary shadow-xl relative scale-105 md:scale-110 transition-all">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-full text-sm shadow-md flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Most Popular
            </div>

            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Pro</CardTitle>
              <div className="mt-6">
                <p className="text-5xl font-bold">
                  ₹399
                  <span className="text-2xl font-normal text-muted-foreground">/month</span>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  or ₹3990/year – save 17%
                </p>
              </div>
              <p className="text-base font-medium mt-3 text-primary">
                Everything teachers need to teach smarter
              </p>
            </CardHeader>

            <CardContent className="flex-1 space-y-5 pt-6">
              <div className="space-y-4">
                <Feature text="Unlimited generations — never hit a limit" />
                <Feature text="Bloom’s Taxonomy levels + difficulty control" />
                <Feature text="Smart auto mark distribution & blueprint" />
                <Feature text="Ready-to-use lesson plans & worksheets" />
                <Feature text="Clean PDF + Word export (no watermark)" />
                <Feature text="Priority support & new features first" />
                <Feature text="Coming soon: Student performance insights" />
              </div>

              <Button className="w-full mt-8 text-base py-6" size="lg">
                Get Pro – Start Saving Time Today
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                30-day money-back guarantee
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Optional small trust / FAQ teaser row – common in good SaaS pages */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            Trusted by 2,000+ CBSE teachers • Secure payments • Cancel anytime
          </p>
          <Button variant="link" className="text-primary">
            Have questions? → See full comparison or FAQs
          </Button>
        </div>

      </div>
    </section>
  )
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-base">
      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
      <span>{text}</span>
    </div>
  )
}