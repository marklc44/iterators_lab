var iterators = require('./iterators.js')

var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};

var sqrAndRoot = function(num) {
	return Math.sqrt(num * num);
};
var sqrOpts = function(num, action) {
	return action(num);
};


var sqrNumbers = iterators.map(myNumbers, square);
var absNumbers = iterators.map(sqrNumbers, sqrRoot);

var sqrNums = iterators.map(myNumbers, sqrOrRoot);
console.log(sqrNums);

var newSqrNumbers = iterators.map(myNumbers, 
	function(currNum, 
		function(currNum) {
		return currNum * currNum;
	})
});

var newAbsNumbers = iterators.map(myNumbers, function(currNum, function(currNum) {
		return Math.sqrt(currNum);
		}) {

});