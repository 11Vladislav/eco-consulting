import { useFormik } from 'formik';
import * as Yup from 'yup';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState, useRef } from 'react';
import {
  FormContainer, FormTitle, Form, Input, TextArea, Button, Error,
  Honeypot, 
} from './ConsultationForm.styled.js';

const cleanPhone = (v) => (v ? v.replace(/[\s()-]/g, '') : v);

export const ConsultationForm = () => {
  const [captchaToken, setCaptchaToken] = useState('');
  const captchaRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      consent: false,
      botcheck: false,          // honeypot: человек его не видит
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required("Ім'я обов'язкове"),
      phone: Yup.string()
        .transform(cleanPhone)
        .matches(/^(\+38|38)?0\d{9}$/, 'Введіть коректний номер, напр. +380938334280')
        .required("Телефон обов'язковий"),
      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Введіть коректний email')
        .required("Email обов'язковий"),
      message: Yup.string().trim().required("Повідомлення обов'язкове"),
      consent: Yup.boolean().oneOf([true], 'Потрібна ваша згода на обробку даних'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: '2ad14e2f-a367-49d0-905d-1268b191e6e9',
             'h-captcha-response': captchaToken, 
            subject: 'Нова заявка з сайту',
            name: values.name,
            phone: cleanPhone(values.phone),
            email: values.email,
            message: values.message,
            consent: 'Так, згоден на обробку персональних даних',
            botcheck: values.botcheck,
          }),
        });

        if (response.ok) {
          alert('Повідомлення відправлене!');
          resetForm();
          captchaRef.current?.resetCaptcha();
          setCaptchaToken('');
        } else {
          alert('Помилка відправки, спробуйте пізніше.');
        }
      } catch {
        alert("Помилка з'єднання, спробуйте пізніше.");
      }
    },
  });

  const err = (field) =>
    formik.touched[field] && formik.errors[field] ? <Error>{formik.errors[field]}</Error> : null;
    
  return (
    <FormContainer>
      <FormTitle>Безкоштовна консультація фахівця</FormTitle>
      <Form onSubmit={formik.handleSubmit} noValidate>
        <Input
          id="name" name="name" type="text"
          placeholder="Ваше ім'я" aria-label="Ваше ім'я"
          autoComplete="name"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {err('name')}

        <Input
          id="phone" name="phone" type="tel" inputMode="tel"
          placeholder="Ваш телефон" aria-label="Ваш телефон"
          autoComplete="tel"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {err('phone')}

        <Input
          id="email" name="email" type="email"
          placeholder="Ваш email" aria-label="Ваш email"
          autoComplete="email"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {err('email')}

        <TextArea
          id="message" name="message" rows="4"
          placeholder="Повідомлення" aria-label="Повідомлення"
          autoComplete="off"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {err('message')}

        {/* honeypot: скрыто от людей и от клавиатуры */}
        <Honeypot
          type="checkbox" name="botcheck" tabIndex={-1}
          autoComplete="off" aria-hidden="true"
          checked={formik.values.botcheck}
          onChange={formik.handleChange}
        />

        <HCaptcha ref={captchaRef}
            sitekey="d0b4a05c-e6a6-45ec-a046-492c5b821252"
            languageOverride="uk"
            onVerify={setCaptchaToken}
            onExpire={() => setCaptchaToken('')}
            
      />
       <Button type="submit" disabled={formik.isSubmitting || !captchaToken}>
          {formik.isSubmitting ? 'Надсилаємо...' : 'Надіслати'}
        </Button>
        
      </Form>
    </FormContainer>
  );
};




