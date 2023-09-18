import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.module.css";
import {
    contactFormEmailAtom,
    contactFormMessageAtom,
    contactFormNameAtom,
} from "atoms";
import { useRecoilState } from "recoil";
import { useSendEmail } from "hooks/uiHooks";

const ContactForm = () => {
    const emailSender = useSendEmail();

    const [name, setName] = useRecoilState(contactFormNameAtom);
    const [email, setEmail] = useRecoilState(contactFormEmailAtom);
    const [message, setMessage] = useRecoilState(contactFormMessageAtom);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await emailSender();
        setEmail("");
        setName("");
        setMessage("");
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
