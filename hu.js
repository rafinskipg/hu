!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.hu=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
{
    var _ns_ = {
            id: 'hu.lib.array',
            doc: void 0
        };
}
var isContainsVector = exports.isContainsVector = function isContainsVector(vector, element) {
        return vector.indexOf(element) >= 0;
    };
var isVectorEqual = function isVectorEqual(x, y) {
    return isVector(x) && isVector(y) && x.length === y.length && function loop() {
        var recur = loop;
        var xsø1 = x;
        var ysø1 = y;
        var indexø1 = 0;
        var countø1 = x.length;
        do {
            recur = indexø1 < countø1 ? isEquivalent((xsø1 || 0)[indexø1], (ysø1 || 0)[indexø1]) ? (loop[0] = xsø1, loop[1] = ysø1, loop[2] = inc(indexø1), loop[3] = countø1, loop) : false : true;
        } while (xsø1 = loop[0], ysø1 = loop[1], indexø1 = loop[2], countø1 = loop[3], recur === loop);
        return recur;
    }.call(this);
};
},{}],2:[function(_dereq_,module,exports){
{
    var _ns_ = {
            id: 'hu.lib.common',
            doc: void 0
        };
}
var objToStr = Object.prototype.toString;
var nativeFinite = this.isFinite;
var isBrowser = exports.isBrowser = typeof(window) === 'object';
var toStr = function toStr(x) {
    return objToStr.call(x);
};
var isNull = exports.isNull = function isNull(x) {
        return x === null;
    };
var isUndef = exports.isUndef = function isUndef(x) {
        return typeof(x) === 'undefined' || x === void 0 || isNull(x);
    };
var isBool = exports.isBool = function isBool(x) {
        return x === true || x === false || toString.call(x) === '[object Boolean]';
    };
var isNumber = exports.isNumber = function isNumber(x) {
        return typeof(x) === 'number';
    };
var isFinite = exports.isFinite = function isFinite(x) {
        return nativeFinite(parseFloat(x));
    };
var isSymbol = exports.isSymbol = function isSymbol(x) {
        return typeof(x) === 'symbol';
    };
var isFunction = exports.isFunction = function isFunction(x) {
        return typeof(x) === 'function';
    };
var isFn = exports.isFn = isFunction;
var isString = exports.isString = function isString(x) {
        return toStr(x) === '[object String]';
    };
var isDate = exports.isDate = function isDate(x) {
        return toStr(x) === '[object Date]';
    };
var isRegExp = exports.isRegExp = function isRegExp(x) {
        return toStr(x) === '[object RegExp]';
    };
var isObject = exports.isObject = function isObject(x) {
        return toStr(x) === '[object Object]';
    };
var isArgs = exports.isArgs = function isArgs(x) {
        return toStr(x) === '[object Arguments]';
    };
var isArray = exports.isArray = isFn(Array.isArray) ? Array.isArray : function (x) {
        return toStr(x) === '[object Array]';
    };
var isError = exports.isError = function isError(x) {
        return toStr(x) === '[object Error]';
    };
var isPlainObject = exports.isPlainObject = function isPlainObject(x) {
        return isObject(x) && isObject(Object.getPrototypeOf(x)) && isNil(Object.getPrototypeOf(Object.getPrototypeOf(x)));
    };
var isElement = exports.isElement = function isElement(x) {
        return isBrowser ? toStr(x).indexOf('Element') >= 0 : false;
    };
var isMutable = exports.isMutable = function isMutable(x) {
        return isObject(x) || isArray(x) || isError(x) || isArgs(x) || isDate(x) || isFunction(x);
    };
var isEmpty = exports.isEmpty = function isEmpty(x) {
        return isUndef(x) || x.length === 0;
    };
var isPrimitive = exports.isPrimitive = function isPrimitive(x) {
        return isNull(x) || isBool(x) || isString(x) || isNumber(x) || isSymbol(x);
    };
var isIterable = exports.isIterable = function isIterable(x) {
        return isObject(x) || isArray(x) || isArgs(x);
    };
var log = exports.log = function log() {
        var args = Array.prototype.slice.call(arguments, 0);
        return console.log.apply(console, args);
    };
},{}],3:[function(_dereq_,module,exports){
{
    var _ns_ = {
            id: 'hu.src.index',
            doc: void 0
        };
    var hu_src_common = _dereq_('./common');
    var common = hu_src_common;
    var hu_src_string = _dereq_('./string');
    var string = hu_src_string;
    var hu_src_number = _dereq_('./number');
    var number = hu_src_number;
    var hu_src_array = _dereq_('./array');
    var array = hu_src_array;
    var hu_src_object = _dereq_('./object');
    var object = hu_src_object;
}
module.exports = object.extend.apply(void 0, [
    common,
    object,
    string,
    number,
    array
]);
},{"./array":1,"./common":2,"./number":4,"./object":5,"./string":6}],4:[function(_dereq_,module,exports){
{
    var _ns_ = {
            id: 'hu.lib.number',
            doc: void 0
        };
}
var max = exports.max = Math.max;
var min = exports.min = Math.min;
var isOdd = exports.isOdd = function isOdd(n) {
        return n % 2 === 1;
    };
var isEven = exports.isEven = function isEven(n) {
        return n % 2 === 0;
    };
},{}],5:[function(_dereq_,module,exports){
{
    var _ns_ = {
            id: 'hu.lib.object',
            doc: void 0
        };
    var hu_lib_common = _dereq_('./common');
    var isObject = hu_lib_common.isObject;
    var isIterable = hu_lib_common.isIterable;
}
var hasOwn = Object.prototype.hasOwnProperty;
var has = exports.has = function has(obj, prop) {
        return hasOwn.call(obj, prop);
    };
var extend = exports.extend = function extend(target) {
        var origins = Array.prototype.slice.call(arguments, 1);
        'Assigns own enumerable properties of source\n  object(s) to the destination object.';
        target = isObject(target) ? target : {};
        origins.reduce(function (origin, o, index) {
            isObject(origin) ? Object.keys(origin).forEach(function (name) {
                return target[name] = origin[name];
            }) : void 0;
            return origins[index + 1];
        }, origins[0]);
        return target;
    };
var each = exports.each = function each(obj, cb, ctx) {
        isIterable(obj) ? Object.keys(obj).forEach(function (index) {
            return cb(obj[index], index, obj);
        }) : void 0;
        return obj;
    };
var clone = exports.clone = function clone(obj) {
        obj = isObject(obj) ? obj : {};
        return obj;
    };
var keys = exports.keys = function keys(dictionary) {
        return Object.keys(dictionary);
    };
var vals = exports.vals = function vals(dictionary) {
        return keys(dictionary).map(function (key) {
            return (dictionary || 0)[key];
        });
    };
var keyValues = exports.keyValues = function keyValues(dictionary) {
        return keys(dictionary).map(function (key) {
            return [
                key,
                (dictionary || 0)[key]
            ];
        });
    };
var dictionary = exports.dictionary = function dictionary() {
        var pairs = Array.prototype.slice.call(arguments, 0);
        return function loop() {
            var recur = loop;
            var keyValuesø1 = pairs;
            var resultø1 = {};
            do {
                recur = keyValuesø1.length ? (function () {
                    resultø1[keyValuesø1[0]] = keyValuesø1[1];
                    return loop[0] = keyValuesø1.slice(2), loop[1] = resultø1, loop;
                })() : resultø1;
            } while (keyValuesø1 = loop[0], resultø1 = loop[1], recur === loop);
            return recur;
        }.call(this);
    };
var map = exports.map = function map(source, cb) {
        return Object.keys(source).reduce(function (target, key) {
            (target || 0)[key] = cb((source || 0)[key]);
            return target;
        }, {});
    };
var merge = exports.merge = function merge() {
        return Object.create(Object.prototype, Array.prototype.slice.call(arguments).reduce(function (descriptor, dictionary) {
            isObject(dictionary) ? Object.keys(dictionary).forEach(function (key) {
                return (descriptor || 0)[key] = Object.getOwnPropertyDescriptor(dictionary, key);
            }) : void 0;
            return descriptor;
        }, Object.create(Object.prototype)));
    };
var isEqual = function isEqual() {
    switch (arguments.length) {
    case 1:
        var x = arguments[0];
        return true;
    case 2:
        var x = arguments[0];
        var y = arguments[1];
        return x === y || (isNil(x) ? isNil(y) : isNil(y) ? isNil(x) : isString(x) ? isString(y) && x.toString() === y.toString() : isNumber(x) ? isNumber(y) && x.valueOf() === y.valueOf() : isFn(x) ? false : isBool(x) ? false : isDate(x) ? isDateEqual(x, y) : isVector(x) ? isVectorEqual(x, y, [], []) : isRePattern(x) ? isPatternEqual(x, y) : 'else' ? isDictionaryEqual(x, y) : void 0);
    default:
        var x = arguments[0];
        var y = arguments[1];
        var more = Array.prototype.slice.call(arguments, 2);
        return function loop() {
            var recur = loop;
            var previousø1 = x;
            var currentø1 = y;
            var indexø1 = 0;
            var countø1 = more.length;
            do {
                recur = isEqual(previousø1, currentø1) && (indexø1 < countø1 ? (loop[0] = currentø1, loop[1] = (more || 0)[indexø1], loop[2] = inc(indexø1), loop[3] = countø1, loop) : true);
            } while (previousø1 = loop[0], currentø1 = loop[1], indexø1 = loop[2], countø1 = loop[3], recur === loop);
            return recur;
        }.call(this);
    }
};
var isDeepEqual = exports.isDeepEqual = isEqual;
var isObjectEqual = function isObjectEqual(x, y) {
    return isObject(x) && isObject(y) && function () {
        var xKeysø1 = keys(x);
        var yKeysø1 = keys(y);
        var xCountø1 = xKeysø1.length;
        var yCountø1 = yKeysø1.length;
        return xCountø1 === yCountø1 && function loop() {
            var recur = loop;
            var indexø1 = 0;
            var countø1 = xCountø1;
            var keysø1 = xKeysø1;
            do {
                recur = indexø1 < countø1 ? isEquivalent((x || 0)[(keysø1 || 0)[indexø1]], (y || 0)[(keysø1 || 0)[indexø1]]) ? (loop[0] = inc(indexø1), loop[1] = countø1, loop[2] = keysø1, loop) : false : true;
            } while (indexø1 = loop[0], countø1 = loop[1], keysø1 = loop[2], recur === loop);
            return recur;
        }.call(this);
    }.call(this);
};
},{"./common":2}],6:[function(_dereq_,module,exports){
{
    var _ns_ = {
            id: 'hu.lib.string',
            doc: void 0
        };
    var hu_lib_common = _dereq_('./common');
    var isString = hu_lib_common.isString;
}
var EOL = /[\n|\r]/;
void 0;
var lines = exports.lines = function lines(x) {
        return isString(x) ? x.split(EOL) : x;
    };
var unlines = exports.unlines = function unlines(x) {
        return isString(x) ? x.join(EOL) : x;
    };
var words = exports.words = function words(x) {
        return isString(x) ? x.split(/[ ]+/) : x;
    };
var unwords = exports.unwords = function unwords(x) {
        return isString(x) ? x.join(' ') : x;
    };
var chars = exports.chars = function chars(x) {
        return isString(x) ? x.split('') : x;
    };
var unchars = exports.unchars = function unchars(x) {
        return isString(x) ? x.join('') : x;
    };
var subs = exports.subs = function subs(x, start, end) {
        return isString(x) ? x.substring(start, end) : x;
    };
var reverse = exports.reverse = function reverse(x) {
        return isString(x) ? x.split('').reverse().join('') : x;
    };
var repeat = exports.repeat = function repeat(n, x) {
        return n > 0 ? x + repeat(n - 1, x) : '';
    };
},{"./common":2}]},{},[3])
(3)
});