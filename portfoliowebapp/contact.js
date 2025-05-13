 const firebaseConfig = {
    apiKey: "AIzaSyACHmY18W-u7tf58g31g_P1zZrNH2o_lVQ",
    authDomain: "portfolio-9707b.firebaseapp.com",
    databaseURL: "https://portfolio-9707b-default-rtdb.firebaseio.com",
    projectId: "portfolio-9707b",
    storageBucket: "portfolio-9707b.firebasestorage.app",
    messagingSenderId: "382679755527",
    appId: "1:382679755527:web:e4df262315da1c61f9f3a2",
    measurementId: "G-6M324R0RKB"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
  e.preventDefault();

 var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, email, message);
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
}, 3000);
   document.getElementById("contactForm").reset();
}
const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();
 newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};
  
const getElementVal = (id) => {
  return document.getElementById(id).value;
};