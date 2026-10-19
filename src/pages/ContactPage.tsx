import { zodResolver } from '@hookform/resolvers/zod'
import { BriefcaseBusiness as Linkedin, Check, CodeXml as Github, Copy, ExternalLink, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import PageMeta from '../components/common/PageMeta'
import { personal } from '../data/personal'
import { submitContactMessage } from '../services/contactService'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter at least 2 characters.').max(100, 'Please keep your name under 100 characters.'),
  email: z.string().trim().email('Please enter a valid email address.').max(254, 'Email address is too long.'),
  subject: z.string().trim().min(3, 'Please enter a subject.').max(120, 'Please keep your subject under 120 characters.'),
  message: z.string().trim().min(10, 'Please enter at least 10 characters.').max(3000, 'Please keep your message under 3000 characters.'),
})

type ContactFormValues = z.infer<typeof contactSchema>

function ContactPage() {
  const [submitError, setSubmitError] = useState('')
  const [copyStatus, setCopyStatus] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError('')
    try {
      await submitContactMessage(values)
    } catch (error) {
      setSubmitError(error instanceof Error
        ? `${error.message} Please contact me directly using the email link.`
        : 'Unable to send your message. Please contact me directly using the email link.')
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopyStatus('Email address copied.')
    } catch {
      setCopyStatus('Could not copy automatically. Select and copy the email address above.')
    }
  }

  return (
    <>
      <PageMeta
        title="Contact"
        description="Contact Sathu Dinesh about frontend development opportunities and projects."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow-dot" />Contact</p>
          <h1 className="page-title">Let’s start a conversation.</h1>
          <p className="page-lede">Have a question, a project, or a frontend opportunity? Send a note below or connect through one of my profiles.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <div>
              <p className="section-kicker">Find me online</p>
              <h2 className="section-title">Choose what works for you.</h2>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon"><Mail size={16} aria-hidden="true" /></div>
              <div>
                <h3>Email</h3>
                <a
                  className="email-address"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open Gmail to email ${personal.email}`}
                  title="Open a new Gmail message"
                >
                  {personal.email} <ExternalLink size={12} aria-hidden="true" />
                </a>
                <div className="email-actions">
                  <a className="email-client-link" href={`mailto:${personal.email}`}>Use default email app</a>
                  <button className="copy-email-button" type="button" onClick={copyEmail}>
                    {copyStatus === 'Email address copied.' ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
                    {copyStatus === 'Email address copied.' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                {copyStatus && (
                  <p className={`copy-status${copyStatus.startsWith('Could not') ? ' is-error' : ''}`} role="status">
                    {copyStatus}
                  </p>
                )}
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon"><Linkedin size={16} aria-hidden="true" /></div>
              <div><h3>LinkedIn</h3><a href={personal.linkedIn} target="_blank" rel="noreferrer">linkedin.com/in/sathudineshyadav</a></div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon"><Github size={16} aria-hidden="true" /></div>
              <div><h3>GitHub</h3><a href={personal.github} target="_blank" rel="noreferrer">github.com/sdineshyadav</a></div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <p className="section-kicker">Send a message</p>
              <h2 className="section-title">Tell me what’s on your mind.</h2>
            </div>
            <div className="form-grid">
              <div className="form-field">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input className="form-control" id="contact-name" autoComplete="name" placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} {...register('name')} />
                {errors.name && <p className="field-error" id="contact-name-error" role="alert">{errors.name.message}</p>}
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input className="form-control" id="contact-email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} {...register('email')} />
                {errors.email && <p className="field-error" id="contact-email-error" role="alert">{errors.email.message}</p>}
              </div>
              <div className="form-field form-field-full">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input className="form-control" id="contact-subject" placeholder="What is this about?" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'contact-subject-error' : undefined} {...register('subject')} />
                {errors.subject && <p className="field-error" id="contact-subject-error" role="alert">{errors.subject.message}</p>}
              </div>
              <div className="form-field form-field-full">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea className="form-control" id="contact-message" placeholder="A few details about your message..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} {...register('message')} />
                {errors.message && <p className="field-error" id="contact-message-error" role="alert">{errors.message.message}</p>}
              </div>
            </div>
            {submitError && <p className="form-status" role="alert">{submitError}</p>}
            <p className="form-help">This form is not connected to an email service and will not send your message. Use the email link instead.</p>
            <button className="button button-primary" type="submit" disabled={isSubmitting}>
              <Send size={14} aria-hidden="true" />
              {isSubmitting ? 'Checking…' : 'Send message'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactPage
