// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail';

const dotenv = require('dotenv').config();

// type Data = {
  // name: string
// }
// 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }



sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (req:NextApiRequest, res:NextApiResponse) => {
  // Extract the form data from the request body
  const { name, email, message } = req.body;
  console.log(req.body)
  console.log(name)

  // Send the email using the SendGrid API
  await sgMail.send({
    to: 'hoqrafat@gmail.com',
    from: 'syed47@student.sust.edu',
    subject: `Portfolio leads: ${name}`,
    text: `Email: ${email} Message: ${message}`,
  })
  .then((response) => {
    return res.status(200).json({
      success: true,
    });
  })
  .catch((error) => {
    console.error(error)
  })
  // Return a success response to the client
};

export default sendMail;