import Link from "next/link"
import { GrapeIcon as Goat, Mail, Phone, MapPin } from "lucide-react"

const footerNavs = {
  services: [
    { href: "#services-ecommerce", label: "E-commerce Solutions" },
    { href: "#services-marketing", label: "Marketing Services" },
    { href: "#services-webdesign", label: "Web Design" },
  ],
  company: [
    { href: "#our-brands", label: "Our Brands" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
}

const contactDetails = {
  email: "Info@goatfzllc.com",
  phones: ["+971 551470288", "+971 52 848 5773"],
  address:
    "FDCW0558, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates",
}

export default function Footer() {
  return (
    <footer className="bg-transparent text-slate-400 py-12 md:py-16 border-t border-slate-700/50">
      {/* Dark mode bg, text, border */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-100">
            {/* Light text */}
            <Goat className="h-8 w-8 text-primary" />
            <span>GOAT FZ-LLC</span>
          </Link>
          <p className="text-sm">
            Elevating businesses with cutting-edge e-commerce, marketing, and web design solutions in the UAE.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Services</h3> {/* Light text */}
          <ul className="space-y-2">
            {footerNavs.services.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Company</h3> {/* Light text */}
          <ul className="space-y-2">
            {footerNavs.company.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Contact Us</h3> {/* Light text */}
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
              <a href={`mailto:${contactDetails.email}`} className="hover:text-primary transition-colors">
                {contactDetails.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
              <div>
                {contactDetails.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block hover:text-primary transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
              <span>{contactDetails.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-slate-700/50 text-center text-sm">
        {/* Dark mode border */}
        <p>&copy; {new Date().getFullYear()} GOAT FZ-LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}
