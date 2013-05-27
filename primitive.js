//escribir todas las funciones de z como el modulo, Re, Im, etc, etc 

var Complex = function (Re,Im) {
	var that = {};

	var x = Re;
	var y = Im;

	var ret_factory = function (variable) {

		return function (newValue) {
			variable = newValue || variable;
			return variable;
		};

	};

	that.Re = ret_factory(x);

	that.Im = ret_factory(y);

	that.add = function (z2) {
		var Re = that.Re() + z2.Re();
		var Im = that.Im() + z2.Im();
		return Complex(Re ,Im);

	};

	that.multiply = function (z2){

		var a = that.Re();
		var b = that.Im();
		var c = z2.Re();
		var d = z2.Im();

		var Re = a*c - b*d;
		var Im = a*d + b*c;

		return Complex(Re ,Im);
	};

	that.pow = function (exp){
		if(exp < 2) return that;

		var z = that.multiply(that);
		var j;
		for( j = 2; j < exp; j++){
			z = z.multiply(that);
		};


		return z;
	};

	that.self = " " + x + " + " + y + "i";

	that.module = function (){

		return Math.sqrt( square(x) + square(y) );
	};

	return that;
}



var square = function (x) {

	return x*x;

};

var bound = function (min, value, max) {
	var x = value;


	x = x < min ? min : x;
	x = x > max ? max : x;

	return x;
};

var Matrix = function (n_rows, m_cols){
	var that = [];

	var i,j;
	var n = n_rows;
	var m = m_cols;

	that.forAll = function (fn) {

		var i_old, j_old;

		var iterator = fn || function () {return Complex(0,0)};

		for( i = 0; i < n; i++ ){
			that[i] = [];
			for (j=0; j < m;j++){


				i_old = bound(0, i-1, Infinity);
				j_old = bound(0, j-1, Infinity);

				// cuadrados
				//that[i][j] = iterator(i,j,that[i_old][j_old]);
				that[i][j] = iterator(i,j,that[i][j_old]);
			};
		};

		return that;
	};

	that.show = function () {
		var row = [];
		for (i=0; i < n; i++){
			for (j=0; j < m; j++){
				row[j] = that[i][j].self
			};
			console.log(i + " " + row);
		};
		console.log("---------------------------")
	};

	that.showN = function () {
		var row = [];
		for (i=0; i < n; i++){
			for (j=0; j < m; j++){
				row[j] = that[i][j]
			};
			console.log(i + " " + row);
		};
		console.log("---------------------------")
	};

	that.forAll();

	return that;
};

