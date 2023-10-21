import { useRef, type FormEvent, type FC, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader } from "./Loader";
interface ContactMeFormProps {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
export const ContactMeForm: FC<ContactMeFormProps> = ({
  serviceId,
  templateId,
  publicKey,
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");
    if (!form.current) return;
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setLoading(false);
        form.current?.reset();
        setResult("Message sended successfully!");
      })
      .catch(() => {
        setLoading(false);
        setError("Error occured while sending email.");
      });
  };

  return (
    <form
      className="w-full h-full p-4 relative rounded-sm flex flex-col justify-center gap-3 bg-primary flex-1"
      onSubmit={sendEmail}
      ref={form}
    >
      <label htmlFor="name" className="labelText">
        Name
      </label>
      <input
        id="name"
        name="from_name"
        className="px-2 py-1 rounded-sm focus:outline-accent"
        placeholder="Type your name..."
        required
      />
      <label htmlFor="email" className="labelText">
        Email
      </label>
      <input
        id="email"
        name="email"
        required
        className="px-2 py-1 rounded-sm focus:outline-accent"
        placeholder="Type your email..."
      />
      <label htmlFor="message" className="labelText">
        Message
      </label>
      <textarea
        required
        id="message"
        name="message"
        className="px-2 py-1 focus:outline-accent rounded-sm"
        placeholder="Type your message..."
      ></textarea>
      <div className="text-white font-bold">
        {error}
        {result}
      </div>
      <button
        type="submit"
        className="p-2 flex gap-2 center rounded-md text-white bg-accent max-w-[200px] hover:shadow-accent"
      >
        {loading && <Loader size="sm" />}
        {loading ? "Sending" : "Send"}
      </button>
    </form>
  );
};
