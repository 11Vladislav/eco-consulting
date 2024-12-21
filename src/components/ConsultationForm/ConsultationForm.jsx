import { useFormik } from "formik";
import * as Yup from "yup";
import { FormContainer, FormTitle, Form, Input, TextArea, Button, Error } from './ConsultationForm.styled.js';

export const ConsultationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Им*я обов*язково"),
      phone: Yup.string()
        .matches(/^\+?[0-9]{10,14}$/, "Введіть коректний телефон")
        .required("Телефон обов*язковий"),
      email: Yup.string()
        .email("Введіть коректний email")
        .required("Email обов*язковий"),
      message: Yup.string().required("Повідомлення обов*язково"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "925a343a-2bbe-4727-ad52-ead72b4c3f95",
          ...values,
        }),
      });

      if (response.ok) {
        alert("Повідомлення відправлене!");
        resetForm();
      } else {
        alert("Помилка відправки, спробуйте пізніше.");
      }
    },
  });
  return (
    <FormContainer>
      <FormTitle>Безкоштовна консультація фахівця</FormTitle>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Им*я</label>
        <Input
          type="text"
          name="name"
          placeholder="Ваше ім*я"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <Error>{formik.errors.name}</Error>
        ) : null}

          <label htmlFor="phone">Телефон</label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Ваш телефон"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.name && formik.errors.name ? (
          <Error>{formik.errors.name}</Error>
        ) : null}

        <label htmlFor="email">Email</label>
        <Input
         id="email"
          name="email"
          type="email"
          placeholder="Ваш email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}

        <label htmlFor="message">Повідомлення</label>
        <TextArea
          id="message"
          name="message"
          placeholder="Повідомлення"
          rows="4"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <Error>{formik.errors.message}</Error>
        ) : null}

        <Button type="submit">Надіслати</Button>
      </Form>
    </FormContainer>
  );
};





