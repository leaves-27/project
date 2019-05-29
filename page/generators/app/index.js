'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk'); //??
var yosay = require('yosay'); //??

//暴露了prompting、writing、install三个方法。

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();// ???

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the supreme ' + chalk.red('Test') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));//bind
  },
  _copyFile:function(names){
    for(var i = 0;i < names.length; i++){
      this.fs.copy(
        this.templatePath(names[i].src),
        this.destinationPath(names[i].dest)
      );
    } 
  },
  writing: {
    app: function () {
      var names = [{
        src:"_package.json",
        dest:"package.json"
      },{
        src:"_bower.json",
        dest:"bower.json"
      },{
        src:"_gulpfile.js",
        dest:"gulpfile.js"
      },{
        src:"bin",
        dest:"bin"
      },{
        src:"doc",
        dest:"doc"
      },{
        src:"tests",
        dest:"tests"
      },{
        src:"src",
        dest:"src"
      },{
        src:"etc",
        dest:"etc"
      }];

      this._copyFile(names);
    },
    projectfiles: function () {
      var names = [{
        src:"editorconfig",
        dest:".editorconfig"
      },{
        src:"jshintrc",
        dest:".jshintrc"
      },{
        src:"gitignore",
        dest:".gitignore"
      }];

      this._copyFile(names);
    }
  },
  install: function () {
    this.installDependencies();
  }
});
