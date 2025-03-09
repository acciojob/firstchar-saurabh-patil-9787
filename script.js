function firstChar(s) {
  // your code here
	 s = s.trimStart();  // This trims spaces from the beginning of the string
  return s.length > 0 ? s[0] : '';

}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const s = prompt("Enter text:")


alert(firstChar(s));
