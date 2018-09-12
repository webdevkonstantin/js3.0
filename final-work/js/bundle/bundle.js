(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(e) {
  var sliderTop = require('../parts/sliderTop');
  var sliderBottom = require('../parts/sliderBottom');
  var modals    = require('../parts/modals');
  var sizesHover = require('../parts/sizesHover');
  var blocksLoad = require('../parts/blocksLoad');
  var portfolioFilter = require('../parts/portfolioFilter');
  var calculator = require('../parts/calculator');
  var accordion = require('../parts/accordion');
  var burgerMenu = require('../parts/burgerMenu');
  var forms = require('../parts/forms');

  sliderTop();
  sliderBottom();
  modals();
  sizesHover();
  blocksLoad();
  portfolioFilter();
  calculator();
  accordion();
  burgerMenu();
  forms();
});
},{"../parts/accordion":41,"../parts/blocksLoad":42,"../parts/burgerMenu":43,"../parts/calculator":44,"../parts/forms":45,"../parts/modals":46,"../parts/portfolioFilter":47,"../parts/sizesHover":48,"../parts/sliderBottom":49,"../parts/sliderTop":50}],2:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],3:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_hide":18,"./_wks":35}],4:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":21}],5:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":29,"./_to-iobject":31,"./_to-length":32}],6:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],7:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],8:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":2}],9:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],10:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":14}],11:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":16,"./_is-object":21}],12:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":7,"./_ctx":8,"./_global":16,"./_hide":18,"./_redefine":26}],13:[function(require,module,exports){
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"./_wks":35}],14:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],15:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":9,"./_fails":14,"./_hide":18,"./_redefine":26,"./_wks":35}],16:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],17:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],18:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":10,"./_object-dp":24,"./_property-desc":25}],19:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":10,"./_dom-create":11,"./_fails":14}],20:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":6}],21:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],22:[function(require,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_cof":6,"./_is-object":21,"./_wks":35}],23:[function(require,module,exports){
module.exports = false;

},{}],24:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":4,"./_descriptors":10,"./_ie8-dom-define":19,"./_to-primitive":33}],25:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],26:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":7,"./_global":16,"./_has":17,"./_hide":18,"./_uid":34}],27:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":7,"./_global":16,"./_library":23}],28:[function(require,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_defined":9,"./_is-regexp":22}],29:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":30}],30:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],31:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":9,"./_iobject":20}],32:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":30}],33:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":21}],34:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],35:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":16,"./_shared":27,"./_uid":34}],36:[function(require,module,exports){
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_descriptors":10,"./_object-dp":24}],37:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":15}],38:[function(require,module,exports){
// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = require('./_is-regexp');
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

},{"./_fix-re-wks":15,"./_is-regexp":22}],39:[function(require,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":12,"./_fails-is-regexp":13,"./_string-context":28}],40:[function(require,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_add-to-unscopables":3,"./_array-includes":5,"./_export":12}],41:[function(require,module,exports){
"use strict";

function accordion() {
  var accordion = document.getElementById('accordion'),
      underline = accordion.getElementsByTagName('span'),
      heading = accordion.getElementsByClassName('accordion-heading'),
      block = accordion.getElementsByClassName('accordion-block'),
      otherBlock = 0;

  for (var i = 0; i < block.length; i++) {
    block[i].classList.add('animated');
    block[i].classList.add('ui-accordion-content-active');

    if (i !== 0) {
      block[i].style.display = 'none';
    } else {
      heading[i].classList.add('ui-accordion-header-active');
    }
  }

  accordion.addEventListener('click', function (e) {
    block[otherBlock].classList.add('fade-out');
    setTimeout(function () {
      for (var k = 0; k < underline.length; k++) {
        if (e.target === underline[k]) {
          if (heading[k].classList.contains('ui-accordion-header-active')) {
            clearBlock();
            break;
          }

          clearBlock();
          heading[k].classList.add('ui-accordion-header-active');
          block[k].classList.remove('fade-out');
          block[k].classList.add('fade-in');
          block[k].style.display = 'block';
        }
      }
    }, 200);
  });

  function clearBlock() {
    for (var j = 0; j < block.length; j++) {
      heading[j].classList.remove('ui-accordion-header-active');
      block[j].style.display = 'none';
    }
  }
}

module.exports = accordion;
},{}],42:[function(require,module,exports){
"use strict";

function blocksLoad() {
  var btn = document.querySelector('.button-styles'),
      blocks = document.getElementsByClassName('styles-block');
  btn.addEventListener('click', function (e) {
    // btn.remove();
    btn.parentElement.removeChild(btn);

    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].parentElement.classList.contains('hidden-lg')) {
        blocks[i].parentElement.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
        blocks[i].parentElement.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
      }
    }
  });
}

module.exports = blocksLoad;
},{}],43:[function(require,module,exports){
"use strict";

function burgerMenu() {
  var burgerButton = document.getElementsByClassName('burger')[0],
      burgerMenu = document.getElementsByClassName('burger-menu')[0],
      headerMenu = document.getElementsByClassName('header-menu')[0],
      burgerButtonImg = burgerButton.getElementsByTagName('img')[0],
      burgerButtonSpan = burgerButton.getElementsByTagName('span')[0];
  window.addEventListener('resize', function () {
    if (this.innerWidth <= 768) {
      headerMenu.style.display = 'none';
    } else {
      headerMenu.style.display = 'block';
    }
  });
  burgerMenu.style.display = 'none';
  burgerButton.style.display = 'block';
  headerMenu.style.display = 'block';
  document.body.addEventListener('click', function (event) {
    showMenuBurger(event);
  });
  document.body.addEventListener('tap', function (event) {
    showMenuBurger(event);
  });

  function showMenuBurger(event) {
    if (event.target === burgerButton || event.target === burgerButtonImg || event.target === burgerButtonSpan) {
      if (burgerMenu.style.display === 'none') {
        burgerMenu.style.display = 'block';
      } else if (burgerMenu.style.display === 'block') {
        burgerMenu.style.display = 'none';
      }
    } else {
      burgerMenu.style.display = 'none';
    }
  }
}

module.exports = burgerMenu;
},{}],44:[function(require,module,exports){
"use strict";

function calculator() {
  var selectSize = document.getElementById('size'),
      selectMaterial = document.getElementById('material'),
      selectOptions = document.getElementById('options'),
      inputPromocode = document.querySelector('.promocode'),
      totalValue = document.querySelector('.calc-price'),
      promocode = document.getElementById('promocode').innerText,
      discount = false,
      sizeSum = 0,
      materialSum = 0,
      optionsSum = 0,
      total = 0;
  selectSize.addEventListener('change', function () {
    sizeSum = +this.value;
    getTotalPrice();
  });
  selectMaterial.addEventListener('change', function () {
    materialSum = +this.value;
    getTotalPrice();
  });
  selectOptions.addEventListener('change', function () {
    optionsSum = +this.value;
    getTotalPrice();
  });
  inputPromocode.addEventListener('input', function () {
    discount = this.value.trim().toUpperCase() === promocode;
    getTotalPrice();
  });

  function getTotalPrice() {
    if (sizeSum !== 0 && materialSum !== 0) {
      total = sizeSum * materialSum + optionsSum;
      if (discount) total = total * 0.7;
      total = Math.round(total);
      totalValue.innerHTML = "<h3>" + total + "р.</h3>";
    } else if (sizeSum === 0 && materialSum !== 0) {
      total = 0;
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины';
    } else if (sizeSum !== 0 && materialSum === 0) {
      total = 0;
      totalValue.innerHTML = 'Для расчета нужно выбрать материал картины';
    } else {
      total = 0;
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
    }
  }
}

module.exports = calculator;
},{}],45:[function(require,module,exports){
"use strict";

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.function.name");

function forms() {
  function formsEnable(index, styleText) {
    var message = {
      loading: 'Идет отправка сообщения...',
      success: 'Спасибо! Мы с Вами свяжемся!',
      failure: 'Ошибка! Что-то пошло не так...'
    },
        form = document.getElementsByTagName('form')[index],
        input = form.getElementsByTagName('input'),
        textarea = form.getElementsByTagName('textarea')[0],
        statusMsg = document.createElement('div');
    statusMsg.classList.add('status');
    statusMsg.style.cssText = styleText;

    if (textarea) {
      textarea.addEventListener('input', function () {
        if (this.name == 'message') {
          return this.value = this.value.replace(/[A-Za-z]/g, '');
        }
      });
    }

    for (var i = 0; i < input.length; i++) {
      input[i].addEventListener('input', function () {
        if (this.name == 'name' || this.name == 'message') {
          return this.value = this.value.replace(/[A-Za-z]/g, '');
        } else if (this.name == 'phone') {
          this.value = this.value.replace(/[A-Za-z]/g, '');
          this.value = this.value.replace(/[а-яА-ЯёЁ]/g, '');
        }
      });
      input[i].addEventListener('focus', function () {
        if (this.name === 'phone' && this.value.includes('+') === false) {
          this.value = '+7 ';
        }
      });
      input[i].addEventListener('keypress', function () {
        if (this.name === 'phone') {
          this;
          var old = 0;
          var curLen = this.value.length;

          if (curLen < old) {
            old--;
            return;
          }

          if (curLen == 3) this.value += "(";
          if (curLen == 7) this.value += ")-";
          if (curLen == 12) this.value += "-";
          if (curLen == 15) this.value += "-";
          if (curLen > 17) this.value = this.value.substring(0, this.value.length - 1);
          old++;
        }
      });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // AJAX

      var request = new XMLHttpRequest(),
          formData = new FormData(form);
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          form.appendChild(statusMsg);
          statusMsg.innerHTML = message.loading;
          statusMsg.style.display = 'block';
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            for (var j = 0; j < form.children.length; j++) {
              form.children[j].style.display = 'none';
            }

            statusMsg.innerHTML = message.success;
            form.appendChild(statusMsg);
            statusMsg.style.display = 'block'; // Добавляем контент на страницу
          } else {
            for (var k = 0; k < form.children.length; k++) {
              form.children[k].style.display = 'none';
            }

            statusMsg.innerHTML = message.failure;
            form.appendChild(statusMsg);
            statusMsg.style.display = 'block';
          }
        }
      };

      for (var l = 0; l < input.length; l++) {
        input[l].value = ''; //Очищаем поля ввода
      }

      for (var t = 0; t < textarea.length; t++) {
        textarea[t].value = '';
      }
    });
  }

  formsEnable(1, "text-align: center; \ font-weight: bold; \ font-size: 60px;");
  formsEnable(2, "text-align: center; \ font-weight: bold; \ font-size: 30px;");
  formsEnable(3, "text-align: center; \ font-weight: bold; \ font-size: 30px;");
}

module.exports = forms;
},{"core-js/modules/es6.function.name":36,"core-js/modules/es6.regexp.replace":37,"core-js/modules/es6.string.includes":39,"core-js/modules/es7.array.includes":40}],46:[function(require,module,exports){
"use strict";

function modals() {
  var buttonsDesign = document.getElementsByClassName('button-design'),
      overlayDesign = document.querySelector('.popup-design'),
      closeDesign = document.querySelector('.popup-design .popup-close'),
      buttonsConsult = document.getElementsByClassName('button-consultation'),
      overlayConsult = document.querySelector('.popup-consultation'),
      closeConsult = document.querySelector('.popup-consultation .popup-close'),
      buttonGift = document.querySelector('.fixed-gift'),
      overlayGift = document.querySelector('.popup-gift'),
      closeGift = document.querySelector('.popup-gift .popup-close'),
      allButtons = document.getElementsByTagName('button'),
      clickCount = 0,
      userTime = 60000,
      // пользователь находится на странице 60 секунд
  popupOpened = false; // Отсчет 60 секунд

  setTimeout(function () {
    console.log('Прошло 60 секунд');

    if (!popupOpened) {
      showModal(overlayConsult);
    }
  }, userTime); // Проверяем сколько раз нажимали кнопки (кроме кнопок закрыть)

  var _loop = function _loop(i) {
    allButtons[i].addEventListener('click', function () {
      if (!allButtons[i].classList.contains('popup-close') && !allButtons[i].classList.contains('main-next-btn') && !allButtons[i].classList.contains('main-prev-btn')) {
        clickCount++;
        console.log('clickCount: ', clickCount);
      }
    });
  };

  for (var i = 0; i < allButtons.length; i++) {
    _loop(i);
  } // Проверяем, что находимся внизу страницы, сколько раз нажимали кнопки и есть ли еще подарок


  window.addEventListener('scroll', function () {
    var buttonGift = document.querySelector('.fixed-gift');

    if (buttonGift !== null && clickCount === 0 && document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
      showModal(overlayGift); // buttonGift.remove();

      buttonGift.parentElement.removeChild(buttonGift);
    }
  }); // Проходимся циклом по всем кнопкам "Заказать..."

  for (var i = 0; i < buttonsDesign.length; i++) {
    showModalByButton(buttonsDesign[i], overlayDesign);
  }

  closeModalByButton(closeDesign, overlayDesign);
  closeModalByOverlay(overlayDesign); //-----------------------------------------------------------------------
  // Проходимся циклом по всем кнопкам "Подробнее..."

  for (var _i = 0; _i < buttonsConsult.length; _i++) {
    showModalByButton(buttonsConsult[_i], overlayConsult);
  }

  closeModalByButton(closeConsult, overlayConsult);
  closeModalByOverlay(overlayConsult); //----------------------------------------------------------------------
  //Нажатие на "Подарок"

  buttonGift.addEventListener('click', function () {
    showModal(overlayGift); // buttonGift.remove();

    buttonGift.parentElement.removeChild(buttonGift);
  });
  closeModalByButton(closeGift, overlayGift);
  closeModalByOverlay(overlayGift); //-----------------------------------------------------------------------

  function showModal(popup) {
    popupOpened = true;
    popup.style.display = 'block';
    popup.classList.add('animated', 'fadeIn');
    document.body.style.overflow = 'hidden';
  }

  function showModalByButton(button, popup) {
    button.addEventListener('click', function () {
      showModal(popup);
    });
  }

  function closeModalByButton(button, popup) {
    button.addEventListener('click', function () {
      popupOpened = false;
      popup.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  function closeModalByOverlay(overlay) {
    overlay.addEventListener('click', function (event) {
      if (this == event.target) {
        popupOpened = false;
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
}

module.exports = modals;
},{}],47:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.split");

function portfolioFilter() {
  var portfolioMenu = document.querySelector('ul.portfolio-menu'),
      worksAll = document.getElementsByClassName('portfolio-block all'),
      worksNo = document.querySelector('.portfolio-no'); // Пробегаемся циклом по всем пунктам меню

  var _loop = function _loop(i) {
    portfolioMenu.children[i].addEventListener('click', function () {
      var btnClassName = portfolioMenu.children[i].className.split(" "),
          worksCount = 0; // Проходимся циклом по всем работам портфолио

      for (var j = 0; j < worksAll.length; j++) {
        if (worksAll[j].classList.contains(btnClassName[0])) {
          worksAll[j].style.display = 'block';
          worksCount++;
        } else {
          worksAll[j].style.display = 'none';
        }
      } // Если выбрана вкладка с работами, то отображаются работы,
      // если их нет, тогда отображаем надпись


      worksCount ? worksNo.style.display = 'none' : worksNo.style.display = 'block'; // Удаляем у всех пунктов меню класс active

      for (var k = 0; k < portfolioMenu.children.length; k++) {
        portfolioMenu.children[k].classList.remove('active');
      } // Добавляем нажатому класс active


      portfolioMenu.children[i].classList.add('active');
    });
  };

  for (var i = 0; i < portfolioMenu.children.length; i++) {
    _loop(i);
  }
}

module.exports = portfolioFilter;
},{"core-js/modules/es6.regexp.split":38}],48:[function(require,module,exports){
"use strict";

function sizesHover() {
  var sizes = document.getElementsByClassName('sizes-block');

  var _loop = function _loop(i) {
    sizes[i].addEventListener('mouseenter', function () {
      var img = sizes[i].children[0];
      sizes[i].children[1].style.display = 'none';
      sizes[i].children[2].style.display = 'none';
      sizes[i].children[3].style.display = 'none';
      img.src = "img/sizes-" + (i + 1) + "-1.png";
    });
    sizes[i].addEventListener('mouseleave', function () {
      var img = sizes[i].children[0];
      sizes[i].children[1].style.display = 'block';
      sizes[i].children[2].style.display = 'block';
      sizes[i].children[3].style.display = 'block';
      img.src = "img/sizes-" + (i + 1) + ".png";
    }); // Тап в мобильной версии

    sizes[i].addEventListener('tap', function () {
      if (sizes[i].children[1].style.display == 'block') {
        var img = sizes[i].children[0];
        sizes[i].children[1].style.display = 'none';
        sizes[i].children[2].style.display = 'none';
        sizes[i].children[3].style.display = 'none';
        img.src = "img/sizes-" + (i + 1) + "-1.png";
      } else {
        var _img = sizes[i].children[0];
        sizes[i].children[1].style.display = 'block';
        sizes[i].children[2].style.display = 'block';
        sizes[i].children[3].style.display = 'block';
        _img.src = "img/sizes-" + (i + 1) + ".png";
      }
    });
  };

  for (var i = 0; i < sizes.length; i++) {
    _loop(i);
  }
}

module.exports = sizesHover;
},{}],49:[function(require,module,exports){
"use strict";

function sliderBottom() {
  var slideIndex = 1,
      slides = document.getElementsByClassName('feedback-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlide(n) {
    clearInterval(timerID);
    showSlides(slideIndex += n);
    timerID = setInterval(function () {
      showSlides(slideIndex += 1);
    }, 7000);
  }

  prev.addEventListener('click', function () {
    plusSlide(-1);
  });
  next.addEventListener('click', function () {
    plusSlide(1);
  });
  var timerID = setInterval(function () {
    plusSlide(1);
  }, 7000);
}

module.exports = sliderBottom;
},{}],50:[function(require,module,exports){
"use strict";

function sliderTop() {
  var slideIndex = 1,
      delay = 5000,
      lock = false,
      run,
      slides = document.getElementsByClassName('main-slider-item');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  } // автоматическое пролистывание изображений


  function autoSlide() {
    if (lock === true) {
      lock = false;
      window.clearInterval(run);
    } else if (lock === false) {
      lock = true;
      run = setInterval(function () {
        plusSlides(1);
      }, delay);
    }
  }

  autoSlide(); // по нажатию на изображение можем остановить слайдшоу

  for (var i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function () {
      autoSlide();
    });
  }
}

module.exports = sliderTop;
},{}]},{},[1]);
