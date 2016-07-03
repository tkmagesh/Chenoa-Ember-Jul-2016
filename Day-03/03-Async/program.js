var program = (function(){
	function addSync(x,y){
		console.log(`       [Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`       [Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[Consumer] triggering add operation`);
		var result = addSync(x,y);
		console.log(`[Consumer] result = ${result}`);
	}

	function addAsyncCallback(x,y,onResult){
		console.log(`       [Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`       [Service] returning result`);
			onResult(result);
		},3000);
	}

	function addAsyncCallbackClient(x,y){
		console.log(`[Consumer] triggering add operation`);
		addAsyncCallback(x,y,function(result){
			console.log(`[Consumer] result = ${result}`);
		});
	}

	function addAsyncPromise(x,y){
		console.log(`       [Service] processing ${x} and ${y}`);

		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`       [Service] returning result`);
				resolveFn(result);
			},3000);
		});
		return promise;
	}


	function addAsyncDeferredPromise(x,y){
		console.log(`       [Service] processing ${x} and ${y}`);

		var deferred = Promise.defer();

			setTimeout(function(){
				var result = x + y;
				console.log(`       [Service] returning result`);
				deferred.resolve(result);
			},3000);
		
		return deferred.promise;
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncCallbackClient : addAsyncCallbackClient,
		addAsyncPromise : addAsyncPromise
	}
})();