import { useState } from "react";
import { FormContainer, FormTitle, Form, Input, TextArea, Button } from './ConsultationForm.styled.js';

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <FormContainer>
      <FormTitle>Безкоштовна консультація фахівця</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Ваше ім*я"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Ваш емейл"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Ваш телефон"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Повідомлення"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Надіслати</Button>
      </Form>
    </FormContainer>
  );
};





