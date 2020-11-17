/* global GT */
//global variables
var GT = {};
GT.currentView = {};
GT.account = {};


//global functions
GT.getDefaultRestrictedCategories = function(){
	var categories = [];
	if(!(account.user_type === 'InstructionalAdmin')){
		account.custom_categories.forEach(function(category){
			account.organization.custom_category_types.forEach(function(categoryType){
				if(category.custom_category_type_id === categoryType.id && categoryType.hides_learners){
					categories.push(category);
				}
			});
		});
	}
	return categories;
}

GT.shuffleArray = function(array) {
	'use strict';
	var m = array.length, t, i;

	// While there remain elements to shuffle…
	while (m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
};

GT.tileStatusClass = function(tile, statusDatum){
	var statusClass = '';
	if(statusDatum){
		if(statusDatum.passed === true){
			statusClass = 'passed';
		} else if(statusDatum.passed === false && 
				(statusDatum.number_of_attempts < tile.attempt_limit || 
				tile.attempt_limit === null) && 
				!statusDatum.no_submissions === true){
			statusClass = 'try-again';
		} else if(statusDatum.passed === false){
			statusClass = 'failed';
		} else if((tile.type === 'Quiz' || tile.type === 'Spark' || 
				tile.type === 'Assignment') && statusDatum.completed === true){
			statusClass = 'pending'
		} else if(statusDatum.completed === true){
			statusClass = 'done';
		}
	}
	return statusClass;
}

GT.splitHostname = function() {
	var result = {};
	var regexParse = new RegExp('([a-z\-0-9]{2,63})\.([a-z\.]{2,5})$');
	var urlParts = regexParse.exec(window.location.hostname);
	result.domain = urlParts[1];
	result.type = urlParts[2];
	result.subdomain = window.location.hostname.replace(result.domain + '.' + result.type, '').slice(0, -1);
	return result;
};

GT.redirectToSubDomain = function(){
	var domainParts = GT.splitHostname();
	if(window.account.organization.subdomain && window.account.external_account &&
	window.account.organization.subdomain !== domainParts.subdomain &&
	window.location.hostname !== 'localhost' && window.account.organization.subdomain_redirect){
		window.location.hostname = window.account.organization.subdomain + 
			'.' + window.location.hostname;
	}
};

GT.urlify = function(text) {
	if(text){
		var urlRegex = /(https?:\/\/[^\s]+)/g;
		return text.replace(urlRegex, function(url) {
			return '<a target="_blank" '+
			'class="text-link" href="' + url + '">' + url + '</a>';
		});
	}
};

GT.checkScrollBottom = function(){
	if($(window).scrollTop() >= ($(document).height() - $(window).height())*0.6){
		return true;
	}
	return false;
};

GT.debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//and aparently polyfills
if (!String.prototype.includes) {
	String.prototype.includes = function(search, start) {
		'use strict';
		if (typeof start !== 'number') {
		start = 0;
		}

		if (start + search.length > this.length) {
		return false;
		} else {
		return this.indexOf(search, start) !== -1;
		}
	};
}

//https://raw.githubusercontent.com/FabioVergani/js-Polyfill_forEach/master/forEach.js

(function(){
	var o=[];
	if('function' !== typeof o.forEach){
		o.constructor.prototype.forEach=function(callback,thisArg){
			if('function' !== typeof callback){
				throw new TypeError(callback+' is not a function!')
			}else{
				if('undefined' !== typeof thisArg){
					for(var e=thisArg,f=callback,i=0,m=this;i<m.length;++i){
						f.call(e,m[i],i,m)
					}
				}else{
					for(var f=callback,i=0,m=this;i<m.length;++i){
						f(m[i],i,m)
					}
				}
			}
		}
	}
})();

// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
	Object.defineProperty(Array.prototype, 'includes', {
	value: function(valueToFind, fromIndex) {

		if (this == null) {
		throw new TypeError('"this" is null or not defined');
		}

		// 1. Let O be ? ToObject(this value).
		var o = Object(this);

		// 2. Let len be ? ToLength(? Get(O, "length")).
		var len = o.length >>> 0;

		// 3. If len is 0, return false.
		if (len === 0) {
		return false;
		}

		// 4. Let n be ? ToInteger(fromIndex).
		//    (If fromIndex is undefined, this step produces the value 0.)
		var n = fromIndex | 0;

		// 5. If n ≥ 0, then
		//  a. Let k be n.
		// 6. Else n < 0,
		//  a. Let k be len + n.
		//  b. If k < 0, let k be 0.
		var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

		function sameValueZero(x, y) {
		return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
		}

		// 7. Repeat, while k < len
		while (k < len) {
		// a. Let elementK be the result of ? Get(O, ! ToString(k)).
		// b. If SameValueZero(valueToFind, elementK) is true, return true.
		if (sameValueZero(o[k], valueToFind)) {
			return true;
		}
		// c. Increase k by 1. 
		k++;
		}

		// 8. Return false
		return false;
	}
	});
}

// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
if (!Array.prototype.findIndex) {
	Object.defineProperty(Array.prototype, 'findIndex', {
		value: function(predicate) {
		// 1. Let O be ? ToObject(this value).
		if (this == null) {
			throw new TypeError('"this" is null or not defined');
		}

		var o = Object(this);

		// 2. Let len be ? ToLength(? Get(O, "length")).
		var len = o.length >>> 0;

		// 3. If IsCallable(predicate) is false, throw a TypeError exception.
		if (typeof predicate !== 'function') {
			throw new TypeError('predicate must be a function');
		}

		// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
		var thisArg = arguments[1];

		// 5. Let k be 0.
		var k = 0;

		// 6. Repeat, while k < len
		while (k < len) {
			// a. Let Pk be ! ToString(k).
			// b. Let kValue be ? Get(O, Pk).
			// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
			// d. If testResult is true, return k.
			var kValue = o[k];
			if (predicate.call(thisArg, kValue, k, o)) {
			return k;
			}
			// e. Increase k by 1.
			k++;
		}

		// 7. Return -1.
		return -1;
		},
		configurable: true,
		writable: true
	});
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
	Object.defineProperty(Array.prototype, 'find', {
	  value: function(predicate) {
		// 1. Let O be ? ToObject(this value).
		if (this == null) {
		  throw TypeError('"this" is null or not defined');
		}
  
		var o = Object(this);
  
		// 2. Let len be ? ToLength(? Get(O, "length")).
		var len = o.length >>> 0;
  
		// 3. If IsCallable(predicate) is false, throw a TypeError exception.
		if (typeof predicate !== 'function') {
		  throw TypeError('predicate must be a function');
		}
  
		// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
		var thisArg = arguments[1];
  
		// 5. Let k be 0.
		var k = 0;
  
		// 6. Repeat, while k < len
		while (k < len) {
			// a. Let Pk be ! ToString(k).
			// b. Let kValue be ? Get(O, Pk).
			// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
			// d. If testResult is true, return kValue.
			var kValue = o[k];
			if (predicate.call(thisArg, kValue, k, o)) {
			return kValue;
			}
			// e. Increase k by 1.
			k++;
		}
  
		// 7. Return undefined.
		return undefined;
		},
		configurable: true,
		writable: true
	});
}
//timestamp copypasta
// Handlebars.registerHelper('timestamp', function (t, options) {
// 	return t.split("T")[0];
// });