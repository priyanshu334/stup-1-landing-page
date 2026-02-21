import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">

          <AccordionItem value="item-1">
            <AccordionTrigger>
              Is this platform aligned with CBSE curriculum?
            </AccordionTrigger>
            <AccordionContent>
              Yes. The platform is designed specifically for CBSE
              (Nursery–Class 10). Question papers, worksheets,
              and lesson plans follow CBSE structure and
              recommended academic patterns.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Does it follow Bloom’s Taxonomy?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Questions are structured across different
              cognitive levels such as remembering, understanding,
              applying, and analyzing to maintain proper
              academic distribution.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I edit the generated content?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. You can review, edit, and customize
              all generated content before exporting it.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              What export formats are supported?
            </AccordionTrigger>
            <AccordionContent>
              You can export question papers and lesson plans
              in PDF and Word format (Pro plan).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Is there a free plan available?
            </AccordionTrigger>
            <AccordionContent>
              Yes. You can start with 5 free generations per
              month. Upgrade anytime for unlimited access.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

      </div>
    </section>
  )
}