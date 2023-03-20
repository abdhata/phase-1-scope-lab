// Declare a global variable called customerName
var customerName = 'bob';

// Write a function to access and uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function to declare and assign a global variable called bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function to overwrite the value of the global variable bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a global constant called leastFavoriteCustomer
const leastFavoriteCustomer = 'John';

// Write a function to attempt changing the value of the global constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane';
}

