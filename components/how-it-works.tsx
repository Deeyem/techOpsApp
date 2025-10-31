import { Card, CardContent } from "@/components/ui/card"
import { Upload, Sparkles, Download, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Documents",
    description: "Drag and drop receipts, invoices, and business documents into TechOps.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Categorization",
    description: "Our AI automatically categorizes and extracts data from your documents.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Review & Approve",
    description: "Quickly review AI suggestions and approve or adjust categorizations.",
  },
  {
    icon: Download,
    step: "04",
    title: "Generate Reports",
    description: "Export tax-ready reports and financial summaries with one click.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance mb-4">
          How TechOps Works
        </h2>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
          Get started in minutes with our simple four-step process.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="border-border/50 bg-card/50 backdrop-blur h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
