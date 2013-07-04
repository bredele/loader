var toArray = require('toarray');


/**
 * Expose `Loader`.
 */

module.exports = Loader;


/**
 * Initialize a new `Loader`.
 * @param {Function} require function
 *
 * @api public
 */

function Loader(loader) {
  this.loader = loader;
}


// Loader use
// ----------------

// 


/**
 * Load commonjs package.
 * @param  {name} name package name
 * @api public
 */

Loader.prototype.use = function(name) {
  var mode = loader(name);
  if(typeof mod === 'function'){
    mod.apply(null, toArray(arguments, 1));
  }
  return this;
};


Loader.prototype.async = function(name) {
  //use bredele/lazy-loading
};