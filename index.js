var toArray = require('toarray');


/**
 * Expose `Loader`.
 */

module.exports = Loader;


/**
 * Initialize a new `Loader`.
 *
 * @api public
 */

function Loader() {
  //do something
}


// Loader use
// ----------------

// Loader use the `express syntax` because...I love it! 
// The use function load a commonjs package by name and pass all
// the other parameters to the package constructor.
//
// To be load by the Loader, your commonjs package has to expose
// a constructor function.

/**
 * Load commonjs package.
 * @param  {name} name package name
 */

Loader.prototype.use = function(name) {
  var mod = require(name);
  if(typeof mod === 'function'){
    mod.apply(null, toArray(arguments, 1));
  }
  return this;
};


Loader.prototype.async = function(name) {
  //use bredele/lazy-loading
};