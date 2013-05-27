
var draw = function (M,width,height,k,fase) {

	var i,j,v;
	var canvas = document.getElementsByTagName('canvas')[0];
	canvas.width = width;
	canvas.height = height;
	canvas = canvas.getContext("2d");

	var drawPixel = function (x,y,color) {


		canvas.fillStyle = color;
		canvas.fillRect(x,y,1,1);
	};



	var color = function (i) {
;

		var c = hsvToRgb( (k * i  + fase) % 360 , 100, 90 );

		return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
	};
/*
	var color = function (i) {


		var color = [

			"#FFC2E0", //pink
			"#FF99CC", //pink	
			"#FF6699", //pink
			"#FF6666", // pink
			"#FF3399", //pink
			"#CC0000", // red
			"#FF0000", // red
			"#FF3333", //orange
			"#FF3300", //orange
			"#FF6600", // orange
			"#FF9933", // orange
			"#FFD633", // yellow
			"#FFFF00", // yellow
			"#99FF33", //green
			"#00CC00", //green
			"#00FF00", //green
			"#00FFCC", //green
			"#00CCFF", //blue
			"#0099FF", //blue
			"#0000FF", //blue
			"#3333FF", //blue
			"#6600FF", //violet
			"#6600CC", //violet
			"#3D007A", //violet
			"#290052", //violet
		];

		return color[i] || "#000000";

*/
/*
		var color = {
			pink: "#FF6666",
			red: "#FF0000",
			orange: "#FF6600",
			yellow: "#FFFF00",
			green_yellow: "#99FF33",
			green: "#19FF19",
			blue_green: "#00E6B8",
			blue: "#0000FF",
			violet_light: "#8A00E6",
			violet: "#2E004C",
			black: "#000000"
		};


		// Si el numero de iteraciones es Inifinity => el punto pertenece al conjunto
		if(i === Infinity){ return color.black};

		// para los puntos que no pertenecen al conjunto
		if ( i <= 1) return color.pink;
		if ( i <= 2) return color.red;
		if ( i <= 3) return color.orange;
		if ( i <= 4) return color.yellow;
		if ( i <= 5) return color.green_yellow;
		if ( i <= 11) return color.green;
		if ( i <= 14) return color.blue_green;
		if ( i <= 20) return color.violet_light;
		
		return color.violet;

		*/

	//};
	for( i = 0; i < height; i++ ){
		for( j = 0; j < width; j++ ){
			v = color(M[i][j]); // en realidad esto no es mas v  de velocidad sino que es i de iteraciones (TODO)
			
			drawPixel(i, j, v);
		};

	};

	return;
};