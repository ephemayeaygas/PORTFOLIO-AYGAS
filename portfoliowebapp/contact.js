

// Import and configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyACHmY18W-u7tf58g31g_P1zZrNH2o_lVQ",
  authDomain: "portfolio-9707b.firebaseapp.com",
  projectId: "portfolio-9707b",
  storageBucket: "portfolio-9707b.firebasestorage.app",
  messagingSenderId: "382679755527",
  appId: "1:382679755527:web:e4df262315da1c61f9f3a2",
  measurementId: "G-6M324R0RKB"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Form submission
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

// Save to Firestore
const saveMessages = (name, email, message) => {
  db.collection("contactForm").add({
    name: name,
    email: email,
    message: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    console.log("Message saved to Firestore");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
