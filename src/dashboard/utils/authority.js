/**
export const authority = {
    getElementsByClass(classnames) {
        var classobj = newArray();
        var classint = 0;
        var tags = document.getElementsByTagName("*");
        for (var i in tags) {
            if (tags[i].nodeType == 1) {
                if (tags[i].getAttribute("class") == classnames) {
                    classobj[classint] = tags[i];
                    classint++;
                }
            }
        }
        return classobj;
    },

    cloneObj(oldObj) { //复制对象方法
        if (typeof(oldObj) != 'object') return oldObj;
        if (oldObj == null) return oldObj;
        var newObj = {};
        for (var i in oldObj)
            newObj[i] = cloneObj(oldObj[i]);
        return newObj;
    },

    extendObj() { //扩展对象
        var args = arguments;
        if (args.length < 2) return;
        var temp = cloneObj(args[0]); //调用复制对象方法
        for (var n = 1; n < args.length; n++) {
            for (var i in args[n]) {
                temp[i] = args[n][i];
            }
        }
        return temp;
    }
}

*/

var authority = function() {
    var copyIsArray,
        toString = Object.prototype.toString,
        hasOwn = Object.prototype.hasOwnProperty;

    var class2type = {
            '[object Boolean]' : 'boolean',
            '[object Number]' : 'number',
            '[object String]' : 'string',
            '[object Function]' : 'function',
            '[object Array]' : 'array',
            '[object Date]' : 'date',
            '[object RegExp]' : 'regExp',
            '[object Object]' : 'object'
        },
        type = function(obj) {
            return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
        },
        isWindow = function(obj) {
            return obj && typeof obj === "object" && "setInterval" in obj;
        },
        isArray = Array.isArray || function(obj) {
            return type(obj) === "array";
        },
        isPlainObject = function(obj) {
            if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
                return false;
            }
            if (obj.constructor && !hasOwn.call(obj, "constructor")
                && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
            var key;
            for (key in obj) {
                //
            }
            return key === undefined || hasOwn.call(obj, key);
        },
        extend = function(deep, target, options) {
            for (var name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) { continue; }
                if (deep && copy
                    && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && isArray(src) ? src : [];
                    } else {
                        clone = src && isPlainObject(src) ? src : {};
                    }
                    target[name] = extend(deep, clone, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
            return target;
        };
    return { extend : extend };
}();


