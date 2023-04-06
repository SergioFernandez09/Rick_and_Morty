import React from "react";
import { useState } from "react";
import { validateForm } from "./validation";

const Form = (props) => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleOnChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        setErrors(validateForm(form));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(form);
      }

    return (
        <form onSubmit={handleSubmit}>
          <h1>Holi, soy el Form</h1>
    
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="email"
            placeholder="ingrese su mail"
            value={form.email}
            onChange={handleOnChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <hr />
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="text"
            placeholder="ingrese una password"
            value={form.password}
            onChange={handleOnChange}
          />
          {errors.password && <p>{errors.password}</p>}
          <hr />
          <button>Submit</button>
        </form>
      );
}

export default Form;