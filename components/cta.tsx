import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="container py-24 md:py-32">
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur">
        <CardContent className="p-12 md:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance mb-6">
            Ready to Organize Your Business?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto mb-10 leading-relaxed">
            Join hundreds of tech startups using TechOps to stay organized from day one. Start your free trial today—no
            credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
