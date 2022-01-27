var firebaseConfig = {
    apiKey: "AIzaSyDRDz_qRiAZmZTc08H98NAvtVuHlMrs1ew",
    authDomain: "chatapp-kwitter.firebaseapp.com",
    databaseURL: "https://chatapp-kwitter-default-rtdb.firebaseio.com",
    projectId: "chatapp-kwitter",
    storageBucket: "chatapp-kwitter.appspot.com",
    messagingSenderId: "346512150598",
    appId: "1:346512150598:web:e83d59c8743807e4f7fa47"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          localStorage.setItem("room_name" , room_name);
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          window.location = "kwitter_room.html";
        }

function logout(){
    window.location = "kwitter.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   Room_names = childKey;
   console.log("Room_names - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   });});}
getData();
function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html";
}
function updateLike(message_id){
    console.log(message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like: updated_likes
    });
}