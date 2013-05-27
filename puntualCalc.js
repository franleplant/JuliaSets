

var puntual_calc_factory = function (p) {
	

	var c = p.c;
	var tolerance = p.tolerance; 
	var max_iteration = p.max_iteration; 


	var z,w = Complex(0,0);

	var i;
	var Im,Re;


	return function (zi){

		z =  zi;

		for( i = 1; i < max_iteration; i++){

			w = z.pow(2).add(c);

			if( w.module() > 2) break;

			z = Complex( w.Re(), w.Im() );	
			
		};
		return i;

	};


};




