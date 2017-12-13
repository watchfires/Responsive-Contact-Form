// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYn5vQbRAy5SMwYKCMRT_26RuU85J5AMU",
  authDomain: "contact-form-60d93.firebaseapp.com",
  databaseURL: "https://contact-form-60d93.firebaseio.com",
  projectId: "contact-form-60d93",
  storageBucket: "contact-form-60d93.appspot.com",
  messagingSenderId: "289786501439"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save the message
  saveMessage(name, company, email, phone, message);

  // Show alert that form was submitted
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form data after submission
  document.getElementById('contact-form').reset();
}

// Get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save the message to Firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}