// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "lib/sendgrid";

type Flag = {
  sent: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Flag>
) {
  const { email, name, subject, message } = req.body;
  const msg = {
    to: "polillomurillo@gmail.com", // Change to your recipient
    from: "pablomurillo.sp@gmail.com", // Change to your verified sender
    subject: subject,
    html: `
    <h1>Desde Portfolio</h1>
    <h3>De parte de: ${name}</h3>
    <h3>Mensaje:</h3>
    <p>${message}</p>
    <h3>Remitente: ${email}</h3>
    `,
  };
  try {
    await sgMail.send(msg);
    res.status(200).json({ sent: true });
  } catch (error) {
    res.status(400).json({ sent: false });
    console.error(error);
  }
}
