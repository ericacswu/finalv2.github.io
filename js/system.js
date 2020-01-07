$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDx40UXAME-1xpnHN4wTB5F3Si-Su8_kGI",
    authDomain: "racketer-550bc.firebaseapp.com",
    databaseURL: "https://racketer-550bc.firebaseio.com",
    projectId: "racketer-550bc",
    storageBucket: "racketer-550bc.appspot.com",
    messagingSenderId: "496126925068",
    appId: "1:496126925068:web:c4014b5ec769d5b4f4d129",
    measurementId: "G-29ZYR0J3GV"
  };

  firebase.initializeApp(config);
  var dbRef = firebase.database().ref().child('object');
  
  const $email = $('#email');
  const $password = $('#password');
  const $btnSignIn = $('#btnSignIn');
  const $btnSignUp = $('#btnSignUp');
  const $btnSignOut = $('#btnSignOut');
  const $btnSubmit = $('#btnSubmit');
  const $signInfo = $('#sign-info');

  // SignIn
  $btnSignIn.click(function(e){
    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();
    // signIn
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(function(e){
      console.log(e.message);
      $signInfo.html(e.message);
    });
  });

  // SignUp
  $btnSignUp.click(function(e){
    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();
    // signUp
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(function(e){
      console.log(e.message);
      $signInfo.html(e.message);
    });
    promise.then(function(e){
      window.location.href = "./profile.html";
    });
  });

  // Listening Login User
  firebase.auth().onAuthStateChanged(function(user){
    if(user) {
      console.log(user);
      $signInfo.html(user.email+" is login...");
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);
      });
    } else {
      console.log("not logged in");
    }
  });

  // SignOut
  $btnSignOut.click(function(){
    firebase.auth().signOut();
    $signInfo.html('No one login...');
  });

  // Submit
  $btnSubmit.click(function(){
    const user = firebase.auth().currentUser;
    const $userName = $('#userName').val();
    const $photoURL = $('#photoURL').val();

    const promise = user.updateProfile({
      displayName: $userName,
      photoURL: $photoURL
    });
    promise.then(function() {
      console.log("Update successful.");
      window.location.href = "./index.html";
    });
  });
});
