import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Categories } from "@/components/categories"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      {/* Pre-Launch Badge */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-3">
            <Rocket className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-900 text-center">
              <span className="font-semibold">In Development:</span> AI-powered business operations platform for tech startups. Join the waitlist for early access.
            </p>
          </div>
        </div>
      </div>

      <main>
        <Hero />
        <Features />
        <Categories />
        <HowItWorks />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
