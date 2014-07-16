var iterators = require('./iterators.js')

var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};

var sqrNumbers = iterators.map(myNumbers, square);
var absNumbers = iterators.map(sqrNumbers, sqrRoot);

// This is it!!!!!!!
var sqrNums = iterators.map(myNumbers, function(num) {
	return sqrRoot(square(num));
});
console.log(sqrNums);
