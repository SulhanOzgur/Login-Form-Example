import React, { useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const initialForm = {
  email: '',
  password: '',
  terms: false,
};

const errorMessages = {
  email: 'Please enter a valid email address',
  password: 'Password must be at least 8 characters long',
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({ email: false, password: false });
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const history = useHistory();

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = (password) => 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/.test(password);


  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    value = type === 'checkbox' ? checked : value;

    setForm({ ...form, [name]: value });
    setTouched({ ...touched, [name]: true });
  };


  useEffect(() => {
    setErrors({
        email: touched.email ? !validateEmail(form.email) : false,
        password: touched.password ? !validatePassword(form.password) : false,
      });

    setIsValid(
      validateEmail(form.email) && validatePassword(form.password) && form.terms
    );
  }, [form]);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) {
      alert('Please fill out the form correctly.');
      return;
    }

    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((res) => {
        const user = res.data.find(
          (item) => item.password === form.password && item.email === form.email
        );
        if (user) {
          setForm(initialForm);
          history.push('/success');
        } else {
          history.push('/error');
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={form.email}
          invalid={touched.email && errors.email}
        />
        {errors.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
          value={form.password}
          invalid={touched.password && errors.password}
        />
        {errors.password && (
          <FormFeedback>{errorMessages.password}</FormFeedback>
        )}
      </FormGroup>

      <FormGroup check>
        <Input
          id="terms"
          name="terms"
          checked={form.terms}
          type="checkbox"
          onChange={handleChange}
        />
        <Label htmlFor="terms" check>
          I agree to terms of service and privacy policy
        </Label>
      </FormGroup>

      <FormGroup className="text-center p-4">
        <Button color="primary" disabled={!isValid}>
          Sign In
        </Button>
      </FormGroup>
    </Form>
  );
}
