import { APISendEmail } from "lib/apiCalls";

export const useSendEmail = () => {
  const emailSender = (email: object) => {
    const emailSent = APISendEmail(email);
    return emailSent;
  };
  return emailSender;
};
