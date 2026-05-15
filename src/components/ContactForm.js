import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 100%; max-width: 500px; margin: 0 auto;
`;
const Input = styled.input`
  width: 100%; padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; color: #ffffff; font-size: 1rem;
  font-family: 'Inter', sans-serif; margin-bottom: 1rem;
  &:focus { outline: none; border-color: #7bdcff; }
  &::placeholder { color: rgba(255,255,255,0.4); }
`;
const Textarea = styled.textarea`
  width: 100%; padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; color: #ffffff; font-size: 1rem;
  font-family: 'Inter', sans-serif; margin-bottom: 1rem; resize: vertical; min-height: 150px;
  &:focus { outline: none; border-color: #7bdcff; }
  &::placeholder { color: rgba(255,255,255,0.4); }
`;
const SubmitBtn = styled.button`
  width: 100%; padding: 1rem;
  background: linear-gradient(135deg, #7bdcff, #f1c16b);
  color: #0a0f1a; font-weight: 700; font-size: 1rem;
  border: none; border-radius: 12px; cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(123,220,255,0.25); }
`;

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = encodeURIComponent(`Name: ${form.name?.value}\nEmail: ${form.email?.value}\nPhone: ${form.phone?.value}\nAddress: ${form.address?.value}\n\n${form.message?.value}`);
    window.location.href = `mailto:info@skyeyeaerial.com?subject=Drone Inquiry from ${form.name?.value}&body=${body}`;
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Full Name" required />
      <Input type="email" name="email" placeholder="Email Address" required />
      <Input type="tel" name="phone" placeholder="Phone Number" />
      <Input type="text" name="address" placeholder="Property Address" />
      <Textarea name="message" placeholder="Share the listing details, preferred date, and any shot priorities." required />
      <SubmitBtn type="submit">Send Inquiry</SubmitBtn>
    </FormWrapper>
  );
};
export default ContactForm;
