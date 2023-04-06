export const validateForm = (form) => {
    let errors = {};
  
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Por favor, revisa tu email";
    }
  
    if (form.password.length < 6 || form.password.length > 10) {
      errors.password =
        "La contraseña debe tener una longitud entre 6 y 10 caracteres";
    }
  
    return errors;
  };