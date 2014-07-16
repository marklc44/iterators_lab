# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max`: should return the maximum in an array, should return infinity for empty array
var x = [1,2,3,4].max();
[4]
* `min`: should return the minimum value in an array, should return infinity for empty array
var x = [1,2,3,4].min();
[1]
* `each`: should run a given action on each item in an array, should return the array
var x = [1,2,3,4].each(function(current, index) { console.log(current);});
1
2
3
4
* `map`: should call a given function once for each item in an array, in order and return the results
var x = [1,2,3,4].map(function(current, index) { return current + 1});
x = [2,3,4,5]
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - should call a function for each item in an array that returns true or false for each value in an array. It would return an array excluding the false values.
* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
var x = [1,2,3,4].filter(function(current) {
	return current < 2;
});
x = [2,3,4]
applies a function against an accumulator and each value of the array, and reduces to a single value
var y = [1,2,3].reduce(function(aggregate, current) {return aggregate + current})
y = 6
* `reject`: [note](http://underscorejs.org/#reject) - runs a function against an array and returns the numbers laying outside the condition specified

Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




