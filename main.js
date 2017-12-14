// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvuoCwTvfmJJ_uMfdSUEW3kQH8whSy8Xg",
  authDomain: "contact-form-fb979.firebaseapp.com",
  databaseURL: "https://contact-form-fb979.firebaseio.com",
  projectId: "contact-form-fb979",
  storageBucket: "contact-form-fb979.appspot.com",
  messagingSenderId: "889555664595"
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