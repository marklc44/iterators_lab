
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
    }// },
    // reduce: function(list, agg, curr) {
    //   var aggregate;

    //   for (var i = 0; i < list.length; i++) {
    //     return func(aggregate, currentItem);
    //   }
    // }
  };

  return api;
})();



module.exports = Iterators;