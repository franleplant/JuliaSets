

addEventListener('message', function(e) {


	
	importScripts('primitive.js');
	importScripts('puntualCalc.js');
	importScripts('matrixCalc.js');
	importScripts('init.js');

	

  	postMessage(JSON.stringify(M));
  }, false);