"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast" // Assuming you have a useToast hook

const contactDetails = {
  email: "Info@goatfzllc.com",
  phones: ["+971 551470288", "+971 52 848 5773"],
  address:
    "FDCW0558, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates",
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to learn more? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 p-8 bg-slate-800/50 rounded-xl shadow-lg border border-slate-700"
          >
            <h3 className="text-2xl font-semibold text-slate-100">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-100">Email</h4>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-100">Phone</h4>
                  {contactDetails.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-slate-400 hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-100">Address</h4>
                  <p className="text-slate-400">{contactDetails.address}</p>
                </div>
              </div>
            </div>
            {/* Optional: Add a small map embed here if desired */}
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="space-y-6 p-8 bg-slate-800/50 rounded-xl shadow-lg border border-slate-700"
    >
      <div>
        <Label htmlFor="name" className="text-slate-200">
          Full Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 bg-slate-700 border-slate-600 text-slate-100 focus:border-primary"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-slate-200">
          Email Address
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 bg-slate-700 border-slate-600 text-slate-100 focus:border-primary"
        />
      </div>
      <div>
        <Label htmlFor="subject" className="text-slate-200">
          Subject
        </Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 bg-slate-700 border-slate-600 text-slate-100 focus:border-primary"
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-slate-200">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 bg-slate-700 border-slate-600 text-slate-100 focus:border-primary"
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </motion.form>
  )
}
