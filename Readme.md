*This repository is a mirror of the [component](http://component.io) module [marcusandre/unite](http://github.com/marcusandre/unite). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/marcusandre-unite`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# unite

  Easily merge arrays.

## Installation

  Install with [component(1)](http://component.io):

    $ component install marcusandre/unite

## API

  Merge some arrays into on array:

  ```js
  var unite = require('unite');
  var arr = unite(['2', '4', '8'], ['b', 'd', 'h']);
  // ['2', '4', '8', 'b', 'd', 'h']
  ```

## License

  MIT
