export const mostrarLogin = () => {
  document.getElementById("signIn").classList.remove("mostrarGRL");
  document.getElementById("login").classList.add("mostrarGRL");
  document.getElementById("registration").classList.add("ocultarGRL");
};

export const mostrarSignIn = () => {
  document.getElementById("login").classList.remove("mostrarGRL");
  document.getElementById("signIn").classList.add("mostrarGRL");
  document.getElementById("registration").classList.add("ocultarGRL");
};

export const ocultarLoginSignIn = () => {
  document.getElementById("login").classList.remove("mostrarGRL");
  document.getElementById("signIn").classList.remove("mostrarGRL");
  document.getElementById("registration").classList.remove("ocultarGRL");
};
