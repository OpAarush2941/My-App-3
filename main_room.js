const firebaseConfig = {
    apiKey: "AIzaSyBZym8c-GyDozG3a3zNosyw_qVnWcI2Zy4",
    authDomain: "my-app-d9588.firebaseapp.com",
    databaseURL: "https://my-app-d9588-default-rtdb.firebaseio.com",
    projectId: "my-app-d9588",
    storageBucket: "my-app-d9588.appspot.com",
    messagingSenderId: "285092260624",
    appId: "1:285092260624:web:369c03ab86cae92eb2d395"
  };
  
  
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "text_page.html";
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
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "text_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "login_page.html";
  }