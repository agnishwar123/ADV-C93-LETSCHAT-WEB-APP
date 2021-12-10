// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDfJ5-Hi_-I46Kmi1a80khYAoZfSYnYRnA",
    authDomain: "kwitter-beff5.firebaseapp.com",
    databaseURL: "https://kwitter-beff5-default-rtdb.firebaseio.com",
    projectId: "kwitter-beff5",
    storageBucket: "kwitter-beff5.appspot.com",
    messagingSenderId: "219386264277",
    appId: "1:219386264277:web:d97d294930d783c2f4005c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "  + user_name + " !";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+ Room_names +" onclick = 'redirectToRoomName(this.id)'> # "+ Room_names +" </div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding user"
        });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function adduser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}