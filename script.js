function firstChar(text) {
  // your code here
	if(text[0]=="" || text[0] ==" "){
		return text[1]
}else{
return text[0]
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
