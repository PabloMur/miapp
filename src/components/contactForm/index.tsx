import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("PORTAFOLIO");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // await emailSender();
    console.log("hol");
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
