
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

      <HomeNavbar />

      {/* HEADER */}
      <div
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #0d6efd, #084298)"
        }}
      >
        <div className="container">

          <h1 className="fw-bold">
            Contact Us
          </h1>

          <p className="lead mb-0">
            We would love to hear from you
          </p>

        </div>
      </div>


      {/* FORM SECTION */}
      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-md-7">

            <div className="card border-0 shadow-sm p-4">

              <form onSubmit={handleSubmit}>

                <h2 className="fw-bold text-primary text-center mb-4">
                  For any query, fill the following form
                </h2>


                {/* NAME */}
                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                </div>


                {/* EMAIL */}
                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                </div>


                {/* MESSAGE */}
                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>


      {/* CONTACT INFO */}
      <div className="container pb-5">

        <div className="row text-center g-4">

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 p-4">

              <h5 className="fw-bold text-primary">
                Email
              </h5>

              <p className="text-secondary mb-0">
                support@ems.com
              </p>

            </div>

          </div>


          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 p-4">

              <h5 className="fw-bold text-primary">
                Phone
              </h5>

              <p className="text-secondary mb-0">
                9876543210
              </p>

            </div>

          </div>


          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 p-4">

              <h5 className="fw-bold text-primary">
                Location
              </h5>

              <p className="text-secondary mb-0">
                Pune, India
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* FOOTER */}
      <div
        className="text-white text-center py-4"
        style={{
          background: "#0b1f3a"
        }}
      >
        <p className="mb-0">
          © 2026 Employee Management System
        </p>
      </div>

    </div>
  )
}
