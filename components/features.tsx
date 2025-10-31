import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Receipt, FileCheck, TrendingUp, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI Categorization",
    description: "Automatically categorize expenses and documents with advanced AI technology.",
  },
  {
    icon: Receipt,
    title: "Receipt Scanning",
    description: "Upload receipts and extract data instantly with OCR technology.",
  },
  {
    icon: FileCheck,
    title: "Document Management",
    description: "Organize all business documents across 14 operational categories.",
  },
  {
    icon: TrendingUp,
    title: "Expense Tracking",
    description: "Track spending in real-time with detailed analytics and insights.",
  },
  {
    icon: Shield,
    title: "Tax-Ready Reports",
    description: "Generate compliant reports ready for tax filing and audits.",
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    description: "Access your data anywhere with cloud synchronization.",
  },
]

export function Features() {
  return (
    <section id="features" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance mb-4">
          Everything You Need to Stay Organized
        </h2>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
          Powerful features designed specifically for tech startups and growing businesses.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-border/50 bg-card/50 backdrop-blur transition-all hover:shadow-lg hover:border-primary/20"
          >
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
