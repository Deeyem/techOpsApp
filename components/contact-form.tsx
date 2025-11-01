"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const getAutoResponse = (interest: string) => {
    const baseMessage = `Hi ${formData.fullName},

Thanks for your interest in Fintellion!

A few quick notes about where we are:

✨ Stage: Pre-launch concept, building our MVP
💰 Funding: Currently bootstrapped, seeking angel investors
🤝 Team: Seeking co-founders for equity partnership (no salary until funded)
🚀 Timeline: Launching Q1-Q2 2026

`
    
    let specificMessage = ""
    
    if (interest === "Technical Co-Founder" || interest === "Business Co-Founder") {
      specificMessage = "We're looking for full-time commitment and equity-based partnership. Are you able to commit full-time without salary initially?\n\n"
    } else if (interest === "Angel Investor") {
      specificMessage = "We're planning to raise our first angel round in Q1 2026. Typical check sizes are $25K-$100K. Does this align with your investment thesis?\n\n"
    } else {
      specificMessage = "Tell us more about how you'd like to be involved!\n\n"
    }
    
    return baseMessage + specificMessage + "I'll review your submission and get back to you within 48 hours.\n\nBest,\nFintellion Team"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      const autoResponseMessage = getAutoResponse(formData.interest)
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "93744123-8fd7-4838-a5e8-08ef017047c1",
          name: formData.fullName,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
          subject: `New Fintellion Interest: ${formData.interest} - ${formData.fullName}`,
          from_name: "Fintellion TechOps",
          replyto: formData.email,
          autoresponse: autoResponseMessage,
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            fullName: "",
            email: "",
            interest: "",
            message: "",
          })
        }, 5000)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to submit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
        <p className="text-muted-foreground">
          We've received your submission and sent you an email with next steps. We'll get back to you within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us in building the future of AI-powered business operations
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border shadow-lg">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-foreground">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="interest" className="block text-sm font-medium text-foreground">
              I'm interested as <span className="text-red-500">*</span>
            </label>
            <select
              id="interest"
              required
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select your interest...</option>
              <option value="Technical Co-Founder">💻 Technical Co-Founder (Equity partnership - building together full-time)</option>
              <option value="Business Co-Founder">📊 Business Co-Founder (Equity partnership - building together full-time)</option>
              <option value="Angel Investor">💰 Angel Investor (Providing seed capital for development)</option>
              <option value="Other Opportunity">🌟 Other Opportunity (Tell me about your interest!)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your background and why you're interested in Fintellion..."
              rows={4}
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Interest"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            We'll review your submission and get back to you within 48 hours.
          </p>
        </form>
      </div>
    </section>
  )
}
