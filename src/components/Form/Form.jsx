import React from "react";
import { useState } from "react";
import { validation } from "../validation";
import style from './Form.module.css';

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleOnChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation ({
          ...userData,
          [event.target.name] : event.target.value
        }))
        // setErrors(validation(userData));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
      }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
          <h1 class='titulo_login'>Welcome to the Rick And Morty project</h1>
          <img class="container" src= 'https://cdn.shopify.com/s/files/1/0042/7563/4222/collections/R_M_collab_logo.jpg?v=1623834383' alt='Rick And Morty'/>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="email"
            placeholder="Ingrese su Email"
            value={userData.email}
            onChange={handleOnChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <hr />
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="text"
            placeholder="Ingrese una password"
            value={userData.password}
            onChange={handleOnChange}
          />
          {errors.password && <p>{errors.password}</p>}
          <hr />
          <button>Submit</button>
        </form>
      );
}

export default Form;