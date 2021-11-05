
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBuNZJOKspNY5q2J6n_Zej3R9bsRlIhmg8",
      authDomain: "classtest-b85dd.firebaseapp.com",
      projectId: "classtest-b85dd",
      storageBucket: "classtest-b85dd.appspot.com",
      messagingSenderId: "681710507604",
      appId: "1:681710507604:web:e90882693fcdc95daebfc1"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function adduser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

function logout()
{
      window.location = "index.html";
}