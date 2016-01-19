// Task 1
function checkAge(age) {
	var age = prompt("Enter age", "");
	if (age > 18) {
 		return true;
 	}  
 	return confirm('Родители разрешили?'); // - Version 1

 	return (age > 18) ? true : confirm('Родители разрешили?'); // - Version 2
 	return (age > 18) || confirm('Родители разрешили?'); // - Version 3
}
//alert(checkAge(20));

// Task 2
function min(a, b){
	return (a < b) ? a : b;
}
//alert(min (2, 3	));

//Task 3
function pow(x, n){	
	var result = x;
	for (var i = 1; i < n; i ++) {
		result *= n;
	}
	return result;
}
var x = prompt("Enter x", "");
var n = prompt("Enter n", "");

//alert(pow(x,n));