
var k = 8;
var fase = 210;
var M;
var msg = document.getElementById('message');

var msg_text = "Loading..."
var t = setInterval(function () {
	msg.textContent = msg.textContent === msg_text ? '' : msg_text;

}, 500);

var clock = document.getElementById('clock');
var time = 0;
var u = setInterval(function () {
		clock.textContent = time + " ms";
		time++;

}, 1);

var worker = new Worker('worker.js');

worker.addEventListener('message', function(e) {
	M = JSON.parse(e.data);
	clearInterval(t);
	clearInterval(u);
	msg.textContent = 'Done!';
	draw(M,k,fase);
}, false);

worker.postMessage(); // Send data to our worker.



