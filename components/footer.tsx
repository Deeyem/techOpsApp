import { Brain, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Brain className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">TechOps</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AI-powered document management and expense tracking for tech startups.
            </p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Principal Business Address</p>
                <address className="not-italic leading-relaxed">
                  150 N Radnor Chester Rd, Ste F200
                  <br />
                  Radnor, PA 19087
                </address>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://fintellion.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Fintellion
                </Link>
              </li>
              <li>
                <Link
                  href="https://fintellion.ai/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Legal Notices
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal & Disclaimers</h3>
            <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Pre-Launch Notice:</span> TechOps is in development by Fintellion LLC. Features subject to change.
              </p>
              <p>
                <span className="font-semibold text-foreground">Disclaimers:</span> For informational purposes only. Not providing financial, legal, or professional advice.
              </p>
              <p>
                <Link
                  href="https://fintellion.ai/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Full Legal Notices →
                </Link>
              </p>
              <p>
                <span className="font-semibold text-foreground">Privacy:</span> Contact form data processed via Web3Forms for response purposes only.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="text-center text-xs text-muted-foreground space-y-2">
            <p>&copy; {new Date().getFullYear()} Fintellion LLC. All rights reserved.</p>
            <p className="max-w-3xl mx-auto">
              TechOps is a product of Fintellion LLC. The content on this site and its associated pages is for informational and educational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
