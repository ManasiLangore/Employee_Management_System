// import React from 'react'
import React, { useState } from 'react'

export default function ContactUS() {

    const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message Submitted Successfully!")
    
    // reset form
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div>
        <h1>this is Contact us page</h1>
        <div style={{fontFamily:"Arial", padding:"40px"}}>

      {/* Heading */}
      <div style={{textAlign:"center", marginBottom:"30px"}}>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us</p>
      </div>

      {/* Form */}
      <form 
        onSubmit={handleSubmit}
        style={{
          maxWidth:"500px",
          margin:"auto",
          display:"flex",
          flexDirection:"column",
          gap:"15px"
        }}
      >

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          style={{padding:"10px"}}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={{padding:"10px"}}
        />

        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          required
          style={{padding:"10px"}}
        />

        <button
          type="submit"
          style={{
            padding:"10px",
            background:"#0d6efd",
            color:"white",
            border:"none",
            cursor:"pointer"
          }}
        >
          Submit
        </button>

      </form>

      {/* Contact Info */}
      <div style={{textAlign:"center", marginTop:"40px"}}>
        <p>Email: support@ems.com</p>
        <p>Phone: 9876543210</p>
      </div>

    </div>
        
    </div>
  )
}
