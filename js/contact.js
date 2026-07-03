const form = document.getElementById("contactForm");

const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();

const email = document.getElementById("email").value.trim();

const phone = document.getElementById("phone").value.trim();

const text = document.getElementById("message").value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phonePattern = /^[0-9]+$/;

if(
name === "" ||
email === "" ||
phone === "" ||
text === ""
){

message.style.color = "red";

message.textContent = "Please fill in all fields.";

return;

}

if(!emailPattern.test(email)){

message.style.color = "red";

message.textContent = "Invalid email address.";

return;

}

if(!phonePattern.test(phone)){

message.style.color = "red";

message.textContent = "Phone number must contain only digits.";

return;

}

message.style.color = "green";

message.textContent = "Message sent successfully!";

form.reset();

});