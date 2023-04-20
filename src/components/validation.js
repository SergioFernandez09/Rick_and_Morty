export const validation = (userData) => {
    let errors = {};
  
    if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = "Por favor, revisa tu email";
    }

    if (!userData.email){
      errors.email = 'Ingrese su Email'
    }
  
    if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password =
        "La contraseña debe tener una longitud entre 6 y 10 caracteres";
    }
  
    return errors;
  };