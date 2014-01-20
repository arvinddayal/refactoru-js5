var names = []
var phone = []
var street = []



var starter = parseInt(prompt("How many disaster victims do you wish to enter?","0"));
	for (i = 0; i < starter; i++) {

	var getNames = prompt("Enter victims name:");
		names.push(getNames);

	var getPhone = prompt("Enter victims phone number:");
		phone.push(getPhone);

	var getStreet = prompt("Enter victims street");
		street.push(getStreet);
};

console.log(names);
console.log(phone);
console.log(street);



// for (var i = 0; i < starter.length; i = starter.length)