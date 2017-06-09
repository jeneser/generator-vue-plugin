'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the shining ' + chalk.red('generator-vue-plugin') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your plugin name',
        default: 'vue-plugin'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
        default: ''
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Package keywords (comma to split)',
        default: ''
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author\'s Name',
        default: ''
      },
      {
        type: 'input',
        name: 'email',
        message: 'Author\'s Email',
        default: ''
      },
      {
        type: 'input',
        name: 'repository',
        message: 'Project homepage url',
        default: ''
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Author\'s Homepage',
        default: ''
      },
      {
        type: 'input',
        name: 'license',
        message: 'License',
        default: 'MIT'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.name + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }
  }

  _getCamelCaseName(name) {

    if (name.indexOf('-')) {
      let _tempName = name.toLowerCase().split('-');

      for(let i = 1; i < _tempName.length; i++) {
        _tempName[i] = _tempName[i].substring(0, 1).toUpperCase() +
        _tempName[i].substring(1)
      }

      return _tempName.join('')
    } else {
      return name
    }

  }

  writing() {
    this.log(this.props);

    this._writingPackageJSON();
    this._writingREADME();
    this._writingBabelrc();
    this._writingGitignore();
    this._writingSrc();
  }

  _writingPackageJSON() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name,
        description: this.props.description,
        keywords: this.props.keywords.split(","),
        author: this.props.author,
        email: this.props.email,
        repository: this.props.repository,
        homepage: this.props.homepage,
        license: this.props.license
      }
    );
  }

  _writingREADME() {
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author,
        year: new Date().getFullYear()
      }
    );
  }

  _writingBabelrc() {
    this.fs.copyTpl(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc')
    );
  }

  _writingGitignore() {
    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
  }

  _writingSrc() {
    this.fs.copyTpl(
      this.templatePath('src/index.js'),
      this.destinationPath('src/' + this.props.name + '.js'),
      {
        name: this.props.name,
        author: this.props.author,
        license: this.props.license,
        camelCaseName: this._getCamelCaseName(this.props.name),
        year: new Date().getFullYear()
      }
    );
  }

  install() {
    this.installDependencies({bower: false});
  }
};
