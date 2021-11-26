const toggle = document.querySelector('.toggle');
  	 const banner = document.querySelector('.banner');
  	 toggle.onclick = function(){
  	 toggle.classList.toggle('active');
  	 banner.classList.toggle('active');
  	}


document.getElementById("ok").onclick = function(){
	var myName = document.getElementById("myUserName").value;
	var myPass = document.getElementById("myPassword").value;
	function verify(myName){
	if(myName == "Eddy" && myPass =="123")
	{
		alert("You are the Developer");
	}
	else{
		alert("Unknown user");
	}
};
var verify = verify(myName);
}

window.addEventListener("load", function() {
    alert(" To see our works, you have to Login First.");
  })