import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="container py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <Sparkles className="h-4 w-4" />
          AI-Powered Document Management
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Organize Your Startup from <span className="text-primary">Day One</span>
        </h1>

        <p className="mb-10 text-lg text-muted-foreground sm:text-xl md:text-2xl text-pretty max-w-3xl mx-auto leading-relaxed">
          AI-powered document management and expense tracking for tech startups. Upload receipts, track expenses, and
          generate tax-ready reports—all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
            Watch Demo
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
