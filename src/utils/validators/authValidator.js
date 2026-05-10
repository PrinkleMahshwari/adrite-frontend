// auth form validation
// backend rules follow kar rahe hain

// email validation

export const validateEmail = (email) => {

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

// password validation

export const validatePassword = (password) => {

  // password requirements:
  // minimum 8 characters
  // uppercase
  // lowercase
  // number
  // special character

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return regex.test(password);
};