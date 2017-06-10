# generator-vue-plugin [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator generating vue plugin :rocket:

<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/jeneser/generator-vue-plugin/master/screenshot.gif" />
</p>
<br>

## Features

Please see our [package.json](https://github.com/jeneser/generator-vue-plugin/blob/master/package.json) for up to date information on what we support.

- Build library with Rollup + Babel + Uglify
- Webpack + vue-loader for single file Vue components.
- State preserving hot-reload
- State preserving compilation error overlay
- Lint-on-save with ESLint
- Source maps
- JavaScript minified with UglifyJS.
- HTML minified with html-minifier.
- CSS across all components extracted into a single file and minified with cssnano.

*For more information on what this generator can do for you, take a look at the [package.json](https://github.com/jeneser/generator-vue-plugin/blob/master/package.json) and [webpack templates](https://github.com/vuejs-templates/webpack)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-vue-plugin using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-vue-plugin
```

Then generate your new project:

```bash
yo vue-plugin
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## Contribute

Please make sure to read the [Contributing Guide](https://github.com/jeneser/generator-vue-plugin/blob/master/CONTRIBUTING.md) before making a pull request.

## License

MIT © Copyright (c) 2017 [Jeneser](https://github.com/jeneser)

[npm-image]: https://badge.fury.io/js/generator-vue-plugin.svg
[npm-url]: https://npmjs.org/package/generator-vue-plugin
[travis-image]: https://travis-ci.org/jeneser/generator-vue-plugin.svg?branch=master
[travis-url]: https://travis-ci.org/jeneser/generator-vue-plugin
[daviddm-image]: https://david-dm.org/jeneser/generator-vue-plugin.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jeneser/generator-vue-plugin
