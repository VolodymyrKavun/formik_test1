import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input, CustomDiv } from './LoginForm.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(12).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const LoginForm = () => {
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const { login, password } = e.target.elements;
  //     console.log(login.value, password.value);
  //   };
  const handleSubmit = (values, { resetForm }) => {
    console.log('🚀 ~ values', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component={CustomDiv} />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
