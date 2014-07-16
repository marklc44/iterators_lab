var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){
  describe('#max', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  })

  describe('#min', function() {
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the minimum in an array', function() {
      expect(Iterators.min(myArr)).to.equal(22);
    })
    it('should return Infinity', function() {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    })
  })

  describe('#reduce', function() {
    var myArr;
    beforeEach(function(){
      myArr = [1,2,3,4];
    });
    it('should return one value aggregating members of an array', function() {
      expect(Iterators.reduce(myArr, function(agg, currItem) {
        agg + currItem;
      })).to.equal(10);
    })

  })

  describe('#each', function() {
    var myArr = [1,2,3,4];
    var x = 0;

    it('should call a function on each item in an array and return original array', function() {
      Iterators.each(myArr, function(currItem, index) { 
        x += currItem;
      });
      expect(x).to.equal(10);
    });
  });

  describe('#map', function() {
    var myArr = [1,2,3,4];

    it('should call a function on each item in an array and return the result', function() {
      expect(Iterators.map(myArr, function(currItem) {return currItem + 1})).to.deep.equal([2,3,4,5]);
      
    });
  });


});















