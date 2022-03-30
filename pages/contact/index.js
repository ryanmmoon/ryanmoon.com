// Modules
import Link from 'next/link'
import Axios from 'axios'

import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

function Contact() {

  const router = useRouter()

  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [check, setCheck] = useState('')
  const [errors, setErrors] = useState({})

  const data = { check, name, subject, company, email, message }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post('/api/contact', data)
      router.push('/contact/success')
      //window.location.reload();
    } catch (err) {
      console.log(err)
    }
  }

  const SEO = {
    title: 'Contact - Ryan Moon',
    description: 'Please feel free to email me or fill out the form below and I will get back to you as soon as possible.',
  
    openGraph: {
        title: 'Contact - Ryan Moon',
        description: 'Please feel free to email me or fill out the form below and I will get back to you as soon as possible.',
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
      <div className="contact">
        <h1>Let&apos;s talk</h1>
        <p>Please feel free to email <Link href={"mailto:hello@" + process.env.HOST_DOMAIN}>
          <a>{"hello@" + process.env.HOST_DOMAIN}</a>
          </Link> or fill out the form below and I will get back to you as soon as possible.
        </p>

        <hr />

        <form>

          <input type="text" name="check" className="check" onChange={e => setCheck(e.target.value)} />

          <div className="input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="Your name" value={name} />
          </div>

          <div className="input">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" onChange={e => setSubject(e.target.value)} placeholder="Choose subject" value={subject} />
          </div>

          <div className="input">
            <label htmlFor="company">Company</label>
            <input type="text" name="company" onChange={e => setCompany(e.target.value)} placeholder="Your company" value={company} />
          </div>

          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email address" value={email} />
          </div>

          <div className="input message">
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" onChange={e => setMessage(e.target.value)} placeholder="Start typing here" value={message} />
          </div>

          <a type="submit" onClick={handleSubmit}>Submit<span className="icon-arrow-right"></span></a>

        </form>
      </div>
    </>
  )
}

export default Contact