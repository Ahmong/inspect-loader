var _loaderUtils = require('loader-utils');
var _loaderUtils2 = _interopRequireDefault(_loaderUtils).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (global, name, factory) {
  if (typeof exports === 'object')
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    if (typeof module !== 'undefined') {
      module.exports = factory();
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(factory);
  } else {
    global[name] = factory.apply(this);
  }
}(this, "inspectLoader", function() {
  return loader;
}));

function loader(content) {
  try {
    return inspectLoader.bind(this)(content);
  } catch (err) {
    var errText = "Error in inspect-loader/index.js :";
    console.log(errText);
    console.log(err.stack);
    throw err;
  }
}

function inspectLoader(content) {
  var query = _loaderUtils2.getOptions(this) || {};
  if (query.label && typeof query.label === 'string') {
    console.log("inspect-loader(%s): resource= " + this.resource, query.label);
  } else {
    console.log("inspect-loader: resource= " + this.resource);
  }

  console.log("Content= '''\n" + content + "\n'''");

  return content;
}
