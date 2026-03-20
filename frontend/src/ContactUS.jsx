import React, { useState } from 'react'
import HomeNavbar from './HomeNavbar'

export default function ContactUS() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message Submitted Successfully!")

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div>
      <HomeNavbar></HomeNavbar>

      {/* HEADER */}
      <div className="bg-primary text-white text-center p-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="lead">We would love to hear from you</p>
      </div>

      {/* FORM SECTION */}
      <div className="container mt-5">
        <div className="row justify-content-center">

          <div className="col-md-6">
            <div className="card shadow p-4">

              <form onSubmit={handleSubmit}>
                <h1>For any query fill following form </h1>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="container mt-5">
        <div className="row text-center">

          <div className="col-md-4">
            <h5>📧 Email</h5>
            <p>support@ems.com</p>
          </div>

          <div className="col-md-4">
            <h5>📞 Phone</h5>
            <p>9876543210</p>
          </div>

          <div className="col-md-4">
            <h5>📍 Location</h5>
            <p>Pune, India</p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-primary text-white text-center p-3 mt-5">
        <p>© 2026 Employee Management System</p>
      </div>

    </div>
  )
}