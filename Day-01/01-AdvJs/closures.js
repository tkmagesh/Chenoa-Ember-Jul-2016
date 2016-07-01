
function spinnerFactory(){
	var counter = 0;
	function up(){
		return ++counter;
	}
	function down(){
		return --counter;
	}
	return {
		up : up,
		down : down
	}
}

function getPrimeFinder(){
	var cache = {};
	function checkPrime(n){
		console.log('processing ', n);
		if ( n <= 3) return true;
		for(var i = 2; i <= (n/2); i++)
			if (n % i === 0) return false
		return true;
	}
	return function (n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
}
var isPrime = getPrimeFinder();

function getOddEvenFinder(){
	var cache = {};
	function checkOddOrEven(n){
		console.log('processing ', n);
		return n % 2 === 0 ? 'even' : 'odd';
	}
	return function (n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkOddOrEven(n);
		return cache[n];
	}
}

function memoize(fn){
	var cache = {};
	
	return function (){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = fn.apply(this,arguments);
		return cache[key];
	}
}

function before(times, fn){
	var cache = null;
	return function(){
		if (times-- >= 0)
			cache = fn.apply(this,arguments);
		return cache;
	}
}