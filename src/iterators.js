
var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    },
    min: function(list) {
      var smallest = Infinity;

      for (var i = 0; i < list.length; i++) {
        if (smallest > list[i]) {
          smallest = list[i];
        }
      }
      return smallest;
    },
    reduce: function(list, action) {
      var previousVal = list[0];

      for (var i = 1; i < list.length; i++) {
        previousVal = action(previousVal, list[i]);
      }
      return previousVal;
    },
    each: function(list, action) {
      for (var i = 0; i < list.length; i++) {
        action(list[i], i);
      }
      return list;
    },
    map: function(list, action) {
      var newList = [];
      for (var i = 0; i < list.length; i++) {
        newList.push(action(list[i], i));
      }
      return newList;
    },
    filter: function(list, action) {
      var newList = [];
      for (var i = 0; i < list.length; i++) {
        if (action(list[i])) {
          newList.push(list[i]);
        }
      }
      return newList;
    },
    reject: function(list, action) {
      var newList = [];
      for (var i = 0; i < list.length; i++) {
        if (!action(list[i])) {
          newList.push(list[i]);
        }
      }
      return newList;
    }
    
  };

  return api;
})();



module.exports = Iterators;