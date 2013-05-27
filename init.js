
var height = 1000,
	width = 1000;

var range = 3;
var z0 = Complex(range/2,range/2);
// console.log dentro del worker:  throw JSON.stringify({data:"algo paso aca"})

var resolution = range/width;

var c = Complex(0.279, 0);

var max_iteration = 100;


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


var M = matrix_calc(A);