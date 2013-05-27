var k = 10;
var fase = 230;
var M;

var worker = new Worker('worker.js');

worker.addEventListener('message', function(e) {
	M = JSON.parse(e.data);
	draw(M,k,fase)
}, false);

worker.postMessage(); // Send data to our worker.