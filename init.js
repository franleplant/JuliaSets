
var height = 300,
	width = 300;
var resolution = 0.005;
var c = Complex(0.279, 0);
var z0 = Complex(1,1.2);
var max_iteration = 1000;


var n = height;
var m = width;


var puntual_calc = puntual_calc_factory({c: c, max_iteration: max_iteration})

var matrix_calc = matrix_calc_factory({height: n, width: m, calc: puntual_calc});

var A = Matrix(n,m);



A.forAll(function (i,j,z_old){
	var delta = resolution;

	var Re =  i * delta - z0.Re();
	var Im =  j * delta - z0.Im();


	return Complex(Re,Im);
});
// console.log("a show")
// A.show();

var M = matrix_calc(A);