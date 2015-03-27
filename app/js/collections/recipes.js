/*
 * collections/recipes.js
 @ A collection of all recipes
 */

var app = app || {};

(function() {
  'use strict';

  var Recipes = Backbone.Collection.extend({
    model: Recipe,
  });

})();
