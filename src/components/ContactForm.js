import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormWrapper = styled.form`
  width: 100%; max-width: 500px; margin: 0 auto;
`;
const Input = styled.input`
  width: 100%; padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; color: #ffffff; font-size: 1rem;
  font-family: 'Inter', sans-serif; margin-bottom: 1rem;
  &:focus { outline: none; border-color: #00d4ff; }
  &::placeholder { color: rgba(255,255,255,0.4); }
`;
const Textarea = styled.textarea`
  width: 100%; padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; color: #ffffff; font-size: 1rem;
  font-family: 'Inter', sans-serif; margin-bottom: 1rem; resize: vertical; min-height: 150px;
  &:focus { outline: none; border-color: #00d4ff; }
  &::placeholder { color: rgba(255,255,255,0.4); }
`;
const SubmitBtn = styled(motion.button)`
  width: 100%; padding: 1rem;
  background: linear-gradient(135deg, #00d4ff, #00ff88);
  color: #0a0f1a; font-weight: 700; font-size: 1rem;
  border: none; border-radius: 12px; cursor: pointer;
  font-family: 'Inter', sans-serif;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,212,255,0.4); }
`;

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = encodeURIComponent(`Name: ${form.name?.value}\nEmail: ${form.email?.value}\n\n${form.message?.value}`);
    window.location.href = `mailto:aaryan@skyeyeaerial.com?subject=Drone Inquiry from ${form.name?.value}&body=${body}`;
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <Textarea name="message" placeholder="Tell us about your property..." required />
      <SubmitBtn whileTap={{ scale: 0.98 }} type="submit">Send Message</SubmitBtn>
    </FormWrapper>
  );
};
export default ContactForm;