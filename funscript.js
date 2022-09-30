/* prompt for user's major, then display greeting*/
var userMajor;
function askForMajor(){
	/*changes done after Assignment 4 submission:
		added global variable above
		took prompt out of document.write to allow variable assignment for later use
		added default input if user does not enter anything*/
	userMajor = prompt("What is your major?","");
	if (userMajor==null || userMajor==""){userMajor="all"}
	document.write("Great! We love " + userMajor
		+ " majors in this club!")
	}

function majorInParagraph(){
	/*added after assignment 4 submission to make first paragraph on mainpage make sense*/
	if (userMajor=="all"){
		document.write("seriously, <em>any</em> major");
	}
	else{
		document.write("<em>including <script>document.write(userMajor)</script></em>");
	}
}
