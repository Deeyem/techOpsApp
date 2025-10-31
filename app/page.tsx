import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Categories } from "@/components/categories"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
