var firebaseConfig = {
    apiKey: "AIzaSyD01KC8Hm2xYPc7V2OSi-2TyCQyJWZgew0",
    authDomain: "kwitter-3d3cc.firebaseapp.com",
    databaseURL: "https://kwitter-3d3cc-default-rtdb.firebaseio.com",
    projectId: "kwitter-3d3cc",
    storageBucket: "kwitter-3d3cc.appspot.com",
    messagingSenderId: "522740465887",
    appId: "1:522740465887:web:98f05cf060f3578fdc696a"
  };

  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



