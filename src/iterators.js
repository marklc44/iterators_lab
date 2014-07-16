
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
      var aggregate = null;
      var newVal;

      for (var i = 0; i < list.length; i++) {
        newVal = action(aggregate, list[i]);
      }
      return newVal;
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
    }
  };

  return api;
})();



module.exports = Iterators;