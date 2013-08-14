describe('unite', function () {

  var assert = require('assert');
  var unite = require('unite');

  it('should throw if no arguments submitted', function() {
    try {
      unite();
    } catch (err) {
      assert(err.message == 'you have to pass some arrays');
    }
  });

  it('should send the array back if ust one submitted', function() {
    var a = [2, 4, 8];
    var ret = unite(a);
    assert(ret.length == 3);
    assert(ret[0] == 2);
    assert(ret[1] == 4);
    assert(ret[2] == 8);
  });

  it('should prepend numbers with zeros', function () {
    var a = [2, 4, 8];
    var b = ['b', 'd', 'h'];
    var ret = unite(a, b);
    assert(ret.length == 6);
    assert(ret[0] == 2);
    assert(ret[1] == 4);
    assert(ret[2] == 8);
    assert(ret[3] == 'b');
    assert(ret[4] == 'd');
    assert(ret[5] == 'h');
  });

});
