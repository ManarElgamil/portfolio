import { NextRequest, NextResponse } from 'next/server'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, serviceType } = await request.json()

    // Initialize MailerSend client
    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY!,
    })

    // Create sender and recipient objects
    const sentFrom = new Sender(process.env.FROM_EMAIL!, 'Portfolio Contact Form')
    const recipients = [
      new Recipient(process.env.TO_EMAIL!, 'Manar Elgamil')
    ]

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Service Type:</strong> ${serviceType || 'General Inquiry'}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="color: #555; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 8px; font-size: 12px; color: #666;">
          <p style="margin: 0;">This email was sent from your portfolio contact form.</p>
          <p style="margin: 5px 0 0 0;">Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `

    const textContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Service Type: ${serviceType || 'General Inquiry'}
      
      Message:
      ${message}
      
      ---
      This email was sent from your portfolio contact form.
      Timestamp: ${new Date().toLocaleString()}
    `

    // Create EmailParams object
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`New Contact Form Submission - ${subject}`)
      .setHtml(htmlContent)
      .setText(textContent)
      .setReplyTo(new Recipient(email, name)) // Allow replying directly to the sender

    // Send email using MailerSend
    const response = await mailerSend.email.send(emailParams)

    console.log('Email sent successfully via MailerSend:', response)

    return NextResponse.json(
      { success: true, messageId: response.messageId },
      { status: 200 }
    )
  } catch (error) {
    console.error('MailerSend Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
