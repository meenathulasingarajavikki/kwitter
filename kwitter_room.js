
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDs1RKox6TjmoGwygjNadddHaWu_FXfhT4",
  authDomain: "kwitter-44f5a.firebaseapp.com",
  databaseURL: "https://kwitter-44f5a-default-rtdb.firebaseio.com",
  projectId: "kwitter-44f5a",
  storageBucket: "kwitter-44f5a.appspot.com",
  messagingSenderId: "172843344363",
  appId: "1:172843344363:web:49bc2c9ef16605096739ae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
 function addRoom(){
 room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update( {
  purpose:"adding room name"
 });
 localStorage.setItem("room_name",room_name);
 window.location="kwitter_page.html";
 }



function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}