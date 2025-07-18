"use client"
import { useState, useCallback } from "react"
import { Send, Instagram, Linkedin, Github, Mail, Heart } from "lucide-react"
import AnalogClock from "./analog-clock"

export default function ContactForm() {
  const [tab, setTab] = useState("say-something")
  const [form, setForm] = useState({
    email: "",
    message: "",
    meetAt: "",
    time: "12:00",
  })
  const [status, setStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isNotRobot, setIsNotRobot] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleTimeChange = useCallback((time) => {
    setForm((prev) => ({ ...prev, time }))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (tab === "ask-date" && !isNotRobot) {
      setTab("say-something")
      setStatus("Please verify you're not a robot first!")
      return
    }

    setIsLoading(true)

    let messageToSend = ""
    let subject = ""

    if (tab === "ask-date") {
      messageToSend = `Hey! 💕\n\nLet's meet at ${form.meetAt} around ${form.time}.\n\n${form.message}`
      subject = `Date Request from ${form.email} 💖`
    } else {
      messageToSend = form.message
      subject = `Message from ${form.email}`
    }

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          message: messageToSend,
          subject: subject,
        }),
      })

      if (res.ok) {
        setStatus(tab === "ask-date" ? "Date request sent! 💕" : "Message sent successfully!")
        setForm({ email: "", message: "", meetAt: "", time: "12:00" })
        setIsNotRobot(false)
      } else {
        setStatus("Something went wrong.")
      }
    } catch (error) {
      setStatus("Failed to send message.")
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/this_is_ked/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kedron-lucas/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/k3Dron/k3Dron0.1", label: "GitHub" },
    { icon: Mail, href: "mailto:kedronportfolio@gmail.com", label: "Email" },
  ]

  return (
    <div className={`contact-container ${tab === "ask-date" ? "love-theme" : ""}`}>
      <div className="contact-content">

        {tab === "ask-date" && (
          <div className="floating-hearts">
            <Heart className="heart heart-1" />
            <Heart className="heart heart-2" />
            <Heart className="heart heart-3" />
          </div>
        )}

        <div className="contact-layout">
          <div className="contact-left">
            <div className="tab-buttons">
              <button
                className={`tab-button bebas ${tab === "say-something" ? "active" : ""}`}
                onClick={() => setTab("say-something")}
                type="button"
              >
                Say Something
              </button>
              <button
                className={`tab-button bebas ${tab === "ask-date" ? "active" : ""} ${tab === "ask-date" ? "date-tab" : ""}`}
                onClick={() => setTab("ask-date")}
                type="button"
              >
                ask out on a date? 💕
              </button>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {tab === "ask-date" && (
                <>
                  <div className="form-group">
                    <input
                      type="text"
                      name="meetAt"
                      placeholder="Location to meet at"
                      value={form.meetAt}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group clock-group">
                    <label className="clock-label">Pick a time:</label>
                    <AnalogClock onTimeChange={handleTimeChange} selectedTime={form.time} />
                  </div>
                </>
              )}

              <div className="form-group message-group">
                <textarea
                  name="message"
                  placeholder={tab === "ask-date" ? "What would you like to say? 💕" : "Whats on your mind?"}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows={6}
                />
              </div>

              <div className="form-footer">
                {tab === "ask-date" ? (
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="not-robot"
                      checked={isNotRobot}
                      onChange={(e) => setIsNotRobot(e.target.checked)}
                    />
                    <label htmlFor="not-robot">I am not a Male</label>
                  </div>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  className={`send-button bebas ${tab === "ask-date" ? "love-button" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                  <Send size={16} className="send-icon" />
                </button>
              </div>
            </form>

            {status && (
              <div className={`status-message ${status.includes("success") || status.includes("💕") ? "success" : "error"}`}>
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
