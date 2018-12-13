function myFunction() {
	var name=document.getElementById("name").value;
	var comment=document.getElementById("comment").value;
	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	console.log(name);
	if(name=="")
	{
		document.getElementById("name").focus();
		return false;
	}
	else if(comment="")
	{
		document.getElementById("comment").focus();
		return false;
	}
	else if(!male && !female)
	{
		document.getElementById("male").focus();
		return false;
	}
	else
		return true;
		/*
	
	console.log(male);
	if(!male && !female)
		alert("select gender");*/
	 
}