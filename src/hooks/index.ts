import { APISendEmail } from "lib/apiCalls";

export const useSendEmail = () => {
  const emailSender = () => {
    return APISendEmail();
  };
  return emailSender;
};
