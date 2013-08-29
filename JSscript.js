
  //  function to test input values with RegEx
function testValue( strVariable, Regex ) 
{
	return Regex.test(strVariable);			
}



function submitForm() 
{
	var email = document.getElementById('email');
	var firstName = document.getElementById('firstName');
	var lastName = document.getElementById('lastName');
	var comments = document.getElementById('comments');
	var errors_found = false;
	var firstNamePass = false;
	var lastNamePass = false;
	var emailPass = false;
	var commentsPass = false;



	// checks the validation for the first name input box

	if ( firstName.value.length == 0)  //  first name must be givin
	{
		err_firstName.innerHTML = "<em>*Please fill in your First Name</em>";
		firstName.className = "bad";
		firstNamePass = false;
	} else if (testValue( firstName.value, /^([A-z][^ ])+$/ ) == false )  //  a valid first name must be givin with no spaces
	{
		err_firstName.innerHTML = "<em>*Please fill in your First Name correctly</em>";
		firstName.className = "bad";
		firstNamePass = false;
	
	} else {
		err_firstName.innerHTML = "";
		firstName.className = "good";
		firstNamePass = true;
	}


	// checks the validation for the last name input box
	if ( lastName.value.length == 0 )  //  last name must be givin
	{
		err_lastName.innerHTML = "<em>*Please fill in your Last Name</em>";
		lastName.className = "bad";
		lastNamePass = false;
	}else if (testValue( lastName.value, /[a-zA-Z]+/ ) == false )  //  a valid last name must be givin
		{
			err_lastName.innerHTML = "<em>*Please fill in your Last Name correctly</em>";
		lastName.className = "bad";
		lastNamePass = false;
		
		} else {
		err_lastName.innerHTML = "";
		lastName.className = "good";
		lastNamePass = true;
	}

	// checks the validation for the email input box should have @ and . within it to be true
	if ( email.value.length == 0 )  // email must be givin
	{
		err_email.innerHTML = "<em>*Please fill in your email</em>";
		email.className = "bad";
		errors_found = true;
		emailPass = false;
	} else if (testValue( email.value, /^([A-z])([A-z0-9.]*)([@]{1})([A-z0-9])+([.]{1})([A-z]{3})$/ ) == false )  //  a valid email must be givin
	{
		err_email.innerHTML = "<em>*Email address givin is not valid</em>";
		email.className = "bad";
		errors_found = true;
		emailPass = false;
	} else {
		err_email.innerHTML = "";
		email.className = "good";
		emailPass = true;
	}

	// checks the validation of the comments textarea and to ensure theres no more than 150 charecters
	if ( comments.value.length == 0) // comments must be ovr 0 charecters long
	{
		err_comment.innerHTML = "<em>*Please add some comments</em>";
		comments.className = "bad";
		commentsPass = false;
	} else if ( comments.value.length > 150 )  //  comments must be under 150 charecters long
	{
		err_comment.innerHTML = "<em>*No more than 150 letters please</em>";
		comments.className = "bad";
		commentsPass = false;
	} else if (testValue( comments.value, /^([^<>])+$/ ) == false )  //  comments cannot contain HTML code
	{
		err_comment.innerHTML = "<em>*No HTML code please</em>";
		comments.className = "bad";
		commentsPass = false;
	} else {
		err_comment.innerHTML = "";
		comments.className = "good";
		commentsPass = true;
	}

	// if an error is found within the email input box a messege will be displayed
	if (errors_found == true){
		alert("Email is invalid");
	}

	if (firstNamePass == true && lastNamePass == true && emailPass == true && commentsPass == true)
	{
		var firstNameResults = "<li>First Name: " + firstName.value + "</li>";
		var lastNameResults = "<li>Last Name: " + lastName.value + "</li>";
		var emailResults = "<li>Email: " + email.value + "</li>";
		var commentsResults = "<li>Comments: " + comments.value + "</li>";
		
		document.getElementById("MyFormID").style.display = "none";

		document.getElementById("conformation").innerHTML = "<h1>CONFORMATION PAGE</h1><br /><ul>" + firstNameResults + lastNameResults + emailResults + commentsResults + "</ul>";

		//form.style.display = "none";
		console.log(firstNameResults);
		console.log(lastNameResults);
		console.log(emailResults);
		console.log(commentsResults);
	}
}  //  end submit function

























