'use strict';
var path = require('path');
var helpers = require('yeoman-test');

describe('generator-vue-plugin:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'vue-plugin'});
  });

  it('Start test');

});
