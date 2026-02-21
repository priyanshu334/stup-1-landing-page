import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple Pricing for CBSE Teachers
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free. Upgrade when you need unlimited
            question papers and lesson plans.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* FREE PLAN */}
          <Card>
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <p className="text-3xl font-bold mt-4">₹0</p>
              <p className="text-sm text-muted-foreground">
                Perfect for trying the platform
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <Feature text="5 generations per month" />
              <Feature text="CBSE aligned format" />
              <Feature text="Basic question paper export" />

              <Button className="w-full mt-6" variant="outline">
                Start Free
              </Button>
            </CardContent>
          </Card>

          {/* PRO PLAN */}
          <Card className="border-primary shadow-md relative">
            <div className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
              Most Popular
            </div>

            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <p className="text-3xl font-bold mt-4">
                ₹399
                <span className="text-base font-medium text-muted-foreground">
                  /month
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Save hours every week
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <Feature text="Unlimited generations" />
              <Feature text="Bloom’s taxonomy alignment" />
              <Feature text="Automatic mark distribution" />
              <Feature text="Lesson plans & worksheets" />
              <Feature text="Export to PDF & Word" />

              <Button className="w-full mt-6">
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Check className="w-4 h-4 text-primary" />
      <span>{text}</span>
    </div>
  )
}