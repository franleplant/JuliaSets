


var matrix_calc_factory = function (p){

	var i,j;

	var n = p.height;
	var m = p.width;
	var calc = p.calc;

	var M = Matrix(n,m);




	return function (A){

		for( i = 0; i < n; i++ ){
			
			for( j = 0; j < m; j++ ){

				M[i][j] = calc( A[i][j] );

			};

		};

		//M.showN();
		return M;

	}

}


//var matrix_calc = matrix_calc_factory({height: 100, width: 100, calc: fn});