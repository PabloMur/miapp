import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.module.css";
import {
  contactFormEmailAtom,
  contactFormMessageAtom,
  contactFormNameAtom,
  contactFormSubjectAtom,
} from "atoms/atoms";
import { useRecoilState } from "recoil";

//

const sendTestRequest = async (msj: any) => {
  const url = "https://send2.vercel.app/api/hello";
  const data = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(msj),
  });
  const googleData = await data.json();
  return googleData;
};
//

const ContactForm = () => {
  const [name, setName] = useRecoilState(contactFormNameAtom);
  const [email, setEmail] = useRecoilState(contactFormEmailAtom);
  const [message, setMessage] = useRecoilState(contactFormMessageAtom);
  const [subject, setSubject] = useRecoilState(contactFormSubjectAtom);

  const test = async () => {
    await sendTestRequest({
      email,
      message,
      subject,
      name,
    });
    alert("Mensaje Enviado Correctamente");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await test();
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <TextField
        label="Nombre"
        variant="outlined"
        margin="normal"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Correo electrónico"
        variant="outlined"
        required
        margin="normal"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Mensaje"
        variant="outlined"
        margin="normal"
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
        multiline
        rows={4}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default ContactForm;
