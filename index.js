
module.exports = function() {
  var arr = [];

  if (0 === arguments.length) {
    throw new Error('you have to pass some arrays');
  }

  if (1 === arguments.length) {
    return arguments[0];
  }

  for (var i = 0; i < arguments.length; i++) {
    Array.prototype.push.apply(arr, arguments[i]);
  }

  return arr;
};
