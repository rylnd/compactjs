var compact = function(array) {
  var copy = [];

  array.forEach(function(element) {
    if (element) {
      copy.push(element);
    }
  })

  return copy;
}

module.exports = compact;
