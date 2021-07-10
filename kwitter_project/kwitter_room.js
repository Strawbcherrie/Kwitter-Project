localStorage.getItem("user_name");
document.getElementById("user_name_id").innerHTML="Welcome"+user_name ;

function addRoom() {
    room_name= document.getElementById("room_name_input").value;
    localStorage.setItem("room_name" , room_name);
    window.location="kwitter_room.html"
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
}