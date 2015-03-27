/*
 * views/ingredient.js
 @ Added ingredients list within add recipe fieldset
 */

var app = app || {};

(function() {
  'use strict';

  var addedIngredient = Backbone.View.extend({
    tag: 'li',
    template: _.template( $('#added-ingredient').html() ),

  });

})();
