
var draw = function (M,k,fase) {

	var i,j,v;
	var height = M.length;
	var width = M[0].length;
	var canvas = document.getElementsByTagName('canvas')[0];
	canvas.width = width;
	canvas.height = height;
	canvas = canvas.getContext("2d");

	var drawPixel = function (x,y,color) {


		canvas.fillStyle = color;
		canvas.fillRect(x,y,1,1);
	};



	var color = function (i) {

		var c = hsvToRgb( (k * i  + fase) % 360 , 100, 90 );

		return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
	};

	for( i = 0; i < height; i++ ){
		for( j = 0; j < width; j++ ){
			v = color(M[i][j]); // en realidad esto no es mas v  de velocidad sino que es i de iteraciones (TODO)
			
			drawPixel(i, j, v);
		};

	};

	return;
};