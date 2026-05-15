import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 100%; max-width: 500px; margin: 0 auto;
`;
const Input = styled.input`
  width: 100%; padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; color: #ffffff; font-size: 1rem;
  font-family: 'Inter', sans-serif; margin-bottom: 0.25rem;
  &:focus { outline: none; border-color: #7bdcff; }
  &::placeholder { color: rgba(255,255,255,0.4); }
  ${props => props.$error && `border-color: #ff6b6b;`}
`;
const Textarea = styled.textarea`
  width: 100%; padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; color: #ffffff; font-size: 1rem;
  font-family: 'Inter', sans-serif; margin-bottom: 0.25rem; resize: vertical; min-height: 150px;
  &:focus { outline: none; border-color: #7bdcff; }
  &::placeholder { color: rgba(255,255,255,0.4); }
  ${props => props.$error && `border-color: #ff6b6b;`}
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
const ErrorMsg = styled.span`
  display: block;
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
  margin-top: 0.25rem;
`;

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^[\d\s\-\+\(\)]{7,20}$/.test(phone);

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', phone: '', address: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required';
      case 'email':
        if (!value.trim()) return 'Email is required';
        return validateEmail(value) ? '' : 'Enter a valid email address';
      case 'phone':
        if (!value.trim()) return 'Phone is required';
        return validatePhone(value) ? '' : 'Enter a valid phone number';
      case 'message':
        if (!value.trim()) return 'Message is required';
        return value.trim().length >= 10 ? '' : 'Message must be at least 10 characters';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = ['name', 'email', 'phone', 'message'];
    const newErrors = {};
    const newTouched = {};
    let valid = true;

    fields.forEach(field => {
      newTouched[field] = true;
      const err = validate(field, values[field]);
      newErrors[field] = err;
      if (err) valid = false;
    });

    setTouched(prev => ({ ...prev, ...newTouched }));
    setErrors(prev => ({ ...prev, ...newErrors }));

    if (valid) {
      const form = e.target;
      const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nAddress: ${values.address}\n\n${values.message}`);
      window.location.href = `mailto:info@skyeyeaerial.com?subject=Drone Inquiry from ${values.name}&body=${body}`;
      alert('Thank you! Your inquiry has been sent. We will reply within one business day.');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit} noValidate>
      <Input
        type="text" name="name" placeholder="Full Name"
        $error={touched.name && errors.name}
        value={values.name}
        onChange={handleChange} onBlur={handleBlur}
      />
      {touched.name && errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}

      <Input
        type="email" name="email" placeholder="Email Address"
        $error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange} onBlur={handleBlur}
      />
      {touched.email && errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}

      <Input
        type="tel" name="phone" placeholder="Phone Number"
        $error={touched.phone && errors.phone}
        value={values.phone}
        onChange={handleChange} onBlur={handleBlur}
      />
      {touched.phone && errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}

      <Input type="text" name="address" placeholder="Property Address"
        value={values.address} onChange={handleChange}
      />

      <Textarea name="message" placeholder="Share the listing details, preferred date, and any shot priorities."
        $error={touched.message && errors.message}
        value={values.message}
        onChange={handleChange} onBlur={handleBlur}
      />
      {touched.message && errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}

      <SubmitBtn type="submit">Send Inquiry</SubmitBtn>
    </FormWrapper>
  );
};
export default ContactForm;