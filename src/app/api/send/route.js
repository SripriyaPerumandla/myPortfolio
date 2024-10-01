// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: 'Hello world',
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `, // Use HTML as a string
    });

    return res.status(200).json(data); // Use the correct response object
  } catch (error) {
    console.error('Error sending email:', error); // Log the error
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}
