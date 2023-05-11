import { APISendEmail } from "lib/apiCalls";

export const useSendEmail = () => {
  const emailSender = (email: object) => {
    return APISendEmail(email);
  };
  return emailSender;
};
