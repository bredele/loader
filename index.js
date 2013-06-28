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

function Loader(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
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
 * @api public
 */

Loader.prototype.use = function(name) {
  //hack because can't require from loader
  //var mod = require.modules[require.resolve(name)].exports;
  var mode = require(name);
  if(typeof mod === 'function'){
    mod.apply(null, toArray(arguments, 1));
  }
  return this;
};


Loader.prototype.async = function(name) {
  //use bredele/lazy-loading
};