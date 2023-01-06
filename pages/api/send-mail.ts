// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail';

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



sgMail.setApiKey("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");

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
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })
  // Return a success response to the client
  res.status(200).send('Success');
};

export default sendMail;