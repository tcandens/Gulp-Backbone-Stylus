/*
 * models/ingredient.js
 @ Very simple model of ingredient
 */

(function() {
  'use strict';

  var Ingredient = Backbone.Model.extend({
    defaults: {
      'name': '',
      'quantity': null,
      'unit': null
    }
  });
})();
