import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Code,
  Home,
  Users,
  UserCheck,
  Shield,
  Settings,
  Calculator,
  Megaphone,
  Landmark,
  Briefcase,
  Scale,
  Target,
  FileText,
} from "lucide-react"

const categories = [
  { icon: Building2, name: "Registration", color: "text-blue-500" },
  { icon: Code, name: "Product Development", color: "text-purple-500" },
  { icon: Home, name: "Office Management", color: "text-green-500" },
  { icon: Users, name: "Investor Relations", color: "text-orange-500" },
  { icon: UserCheck, name: "Team & HR", color: "text-pink-500" },
  { icon: Shield, name: "Compliance", color: "text-red-500" },
  { icon: Settings, name: "Operations", color: "text-cyan-500" },
  { icon: Calculator, name: "Taxes", color: "text-yellow-500" },
  { icon: Megaphone, name: "Marketing", color: "text-indigo-500" },
  { icon: Landmark, name: "Banking", color: "text-teal-500" },
  { icon: Briefcase, name: "Clients", color: "text-violet-500" },
  { icon: Scale, name: "Legal", color: "text-rose-500" },
  { icon: Target, name: "Strategic Management", color: "text-amber-500" },
  { icon: FileText, name: "General Documents", color: "text-slate-500" },
]

export function Categories() {
  return (
    <section id="categories" className="container py-24 md:py-32 bg-card/30 rounded-3xl">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance mb-4">
          14 Business Categories
        </h2>
        <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
          Comprehensive organization across all aspects of your business operations.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="border-border/50 bg-background/80 backdrop-blur transition-all hover:shadow-md hover:scale-105 hover:border-primary/30"
          >
            <CardContent className="p-6 flex flex-col items-center text-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${category.color}`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{category.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
