

var puntual_calc_factory = function (p) {
	

	var c = p.c;
	var tolerance = p.tolerance; 
	var max_iteration = p.max_iteration; 


	var z,w = Complex(0,0);

	var i;
	var Im,Re;


	var delta;


	return function (zi){

		z =  zi;

		for( i = 1; i < max_iteration; i++){


			Re =  square( z.Re() ) - square( z.Im() ) + c.Re() ; 
			Im = 2 * z.Re() * z.Im() + c.Im();

			w = Complex(Re, Im);


			delta = w.module() - z.module();

			// No pertenece al conjunto
			if( w.module() > 2) break;
			//console.log(w.self);
			
/*			if (delta <= 0 + tolerance) {
				//Pertenece al conjunto
				i = Infinity;
				break;

			};
			*/

			z = Complex( w.Re(), w.Im() );	
			
		};
		return i;

	};


};




