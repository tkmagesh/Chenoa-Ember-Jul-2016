	function add(x,y){
		function parseArg(n){
			if (n instanceof Array) return add.apply( this, n);
			if (typeof n === 'function') return parseArg(n());
			return isNaN(n) ? 0 : parseInt(n);
		}
	  	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1))
	}

function testAdd(){
	console.log(add(50,50)); //done
	console.log(add("40","60")); //done
	console.log(add("abc", 100)); //done

	console.log(add(function(){
		return 40;
	}, function(){
		return 60;
	})) //done

	console.log(add(function(){
		return 	"40";
	}, function(){
		return 60;
	})) //done

	console.log(add(function(){
		return "abc";
	}, function(){
		return 100;
	})) //done

	console.log(add(function(){ return function(){
		return 40;
	}}, function(){ return function(){
		return 60;
	}})); //done

	console.log(add(100)); //done

	console.log(add(10,20,30,40)); //done

	console.log(add([10,20],[30,40]))
	console.log(add(["10",20],[30,40]))
	console.log(add(function(){ return function(){
		return ["10",20];
	}}, function(){ return function(){
		return [30,40];
	}}));
	console.log(add([function(){ return function(){
		return ["10",20];
	}}, function(){ return function(){
		return [30,40];
	}}]));

}