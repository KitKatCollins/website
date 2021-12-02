//Katherine Collins Javascript//

// type writer effect//

function typingEffect(element,speed){
let text=element.innerHTML;
element.innerHTML="";
var i=0;
var timer=setInterval(function(){
if (i<text.length){
element.append(text.charAt(i))
i++;
}else{
clearInterval(timer);
}
},speed)
}
const pre=document.querySelector('pre');
typingEffect(pre,150);


// Email Validadtion//

submitButton.addEventListener('click', clickListener);
function emailValidate(email) {
	return email.includes('@');
}
function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	if(emailValidate(emailText) !== true) {
		console.log("please re-enter e-mail address");
		return false;
	}
	console.log('Thanks for your message');
}


