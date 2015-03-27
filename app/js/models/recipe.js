/*
 * models/recipes.js
 @ Basic model for a recipe
 */

(function() {

  'use strict';

  var Recipe = new Backbone.Model.extend({
    defaults: {
      'name': '',
      'serves': 1,
      'ingredients': [],
      'servedOn': [],
      'added': new Date()
    }
  });
})();
