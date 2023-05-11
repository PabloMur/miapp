import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID as string);

export default sgMail;
