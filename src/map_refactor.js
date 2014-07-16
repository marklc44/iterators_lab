var iterators = require('./iterators.js')

var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};

// this takes the sqrt of the square returning abs
var sqrAndRoot = function(num) {
	return Math.sqrt(num * num);
};

// this might work for sqrt, square or both
// this is turning into map, but shouldn't
var sqrOpts = function(list, square, sqrRoot) {
	var newList = [];
	for (var i = 0; i < list.length; i++) {
		var sqrNumber = square(list[i]);
		newList.push(sqrRoot(sqrNumber));
	}
	return newList;
};


var sqrNumbers = iterators.map(myNumbers, square);
var absNumbers = iterators.map(sqrNumbers, sqrRoot);

// calling sqrOrRoot to return abs
var sqrNums = iterators.map(myNumbers, sqrAndRoot);
console.log(sqrNums);

// calling sqrOpts
var newAbsNumbers = iterators.map(myNumbers, sqrOpts(myNumbers, square, sqrRoot));
console.log(newAbsNumbers);
