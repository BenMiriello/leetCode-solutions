Array.prototype.contains = function(obj){
  return this.indexOf(obj) > -1
};

require('fs').readdirSync(__dirname + '/').forEach(function(file) {
  if (file.match(/\.js$/) && !['index.test.js', 'index.js'].contains(file)) {
    const name = file.replace('.js', '');
    exports[name] = require('./' + file);
  }
});
