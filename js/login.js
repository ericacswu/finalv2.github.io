// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDx40UXAME-1xpnHN4wTB5F3Si-Su8_kGI",
  authDomain: "racketer-550bc.firebaseapp.com",
  databaseURL: "https://racketer-550bc.firebaseio.com",
  projectId: "racketer-550bc",
  storageBucket: "racketer-550bc.appspot.com",
  messagingSenderId: "496126925068",
  appId: "1:496126925068:web:c4014b5ec769d5b4f4d129",
  measurementId: "G-29ZYR0J3GV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Register Dom Elements
const $email = $('#email');
const $password = $('#password');
const $btnSignIn = $('#btnSignIn');
const $btnSignUp = $('#btnSignUp');
const $btnSignOut = $('#btnSignOut');
const $signInfo = $('#sign-info');

//SignIn
$btnSignIn.click(function(e){
  auth.signInWithEmailAndPassword($email.val(), $password.val())
  .catch(function(e){
    $signInfo.html(e.message);
  })
})

//SignUp
$btnSignIn.click(function(e){
  auth.createUserWithEmailAndPassword($email.val(), $password.val())
  .catch(function(e){
    $signInfo.html(e.message);
  })
})

//Lisening Login User
auth.onAuthStateChanged(function(user){
  if(user) {
    $signInfo.html(`${user.email} is login...`);
    console.log(user);
  } else {
    console.log("not logged in");
  }
})

//SignOut
$btnSignOut.click(function(){
  auth.signOut();
  $email.val('');
  $password.val('');
  $signInfo.html('No one login...');
})