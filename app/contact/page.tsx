/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react"

const infoData = [
  {tag:"Email", title:"support@gamelibrary.com", desc:"We'll reply within 24 hours",icon:Mail},
  {tag:"Phone", title:"+1 (555) 123-4567", desc:"Mon-Fri, 9am-6pm EST", icon:Phone},
  {tag:"Address", title:"123 Gaming Street", desc:"San Francisco, CA 94105", icon:MapPin},
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error")
      setErrorMessage("Please fill in all fields")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    setLoading(true)
    setStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-blue-100 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}

          {
            infoData.map((info)=>(
          <Card key={info.tag} className=" p-6 hover:border-blue-500 transition-colors">
            <div className="flex items-start gap-4">
              <info.icon className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-2">{info.tag}</h3>
                <p className="text-slate-400">{info.title}</p>
                <p className="text-slate-500 text-sm mt-1">{info.desc}</p>
              </div>
            </div>
          </Card>

            ))
          }

         
        </div>

        {/* Contact Form */}
        <Card className=" p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

          {status === "success" && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/50 rounded-lg flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-green-400 font-semibold">Message sent successfully!</p>
                <p className="text-green-300 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-red-400 font-semibold">Error</p>
                <p className="text-red-300 text-sm">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500"
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500 resize-none"
                disabled={loading}
              />
            </div>

            <Button
            variant={'outline'}
              type="submit"
              disabled={loading}
              className="w-full text-white font-semibold py-3 rounded-lg transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </main>
  )
}
