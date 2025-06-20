import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, subject, message } = req.body
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  // Configure your SMTP transporter (use environment variables in production)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER || "delucilondon@gmail.com",
      pass: process.env.SMTP_PASS || "innf wabp fkri sbrf", // Use an app password for Gmail
    },
  })

  try {
    await transporter.sendMail({
      from: `GOAT FZ LLC Website <${process.env.SMTP_USER || "delucilondon@gmail.com"}>`,
      to: "delucilondon@gmail.com",
      subject: `[GOAT FZ LLC Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    })
    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" })
  }
} 