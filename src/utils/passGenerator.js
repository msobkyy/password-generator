const passGenerator = (length, hasUpperCase, hasNumbers, hasSympols) => {
  let lowLetters = "abcdefghijklmnopqrstuvwxyz";
  let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_|}{[]?/";

  let charset = lowLetters;
  charset = hasUpperCase ? charset + upperLetters : charset;
  charset = hasNumbers ? charset + numbers : charset;
  charset = hasSympols ? charset + symbols : charset;

  let password = [];
  for (let i = 0; i <= length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password.push(charset[randomIndex]);
  }
  return password.join("");
};

export default passGenerator;
