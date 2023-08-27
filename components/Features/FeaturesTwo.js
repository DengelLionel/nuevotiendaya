export default function FeaturesTwo({ title, descripcion }) {
	return (
	  <div className="container ">
		<div className="row">
		  <div className="col-md-6 col-lg-4 col-12 w-100">
			<div className="single-core-feature">
			  <div className="icon">
				{/* Agrega el contenido del icono si es necesario */}
			  </div>
			  <div className="content">
				<h3>{title}</h3>
				<p>{descripcion}</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
  }
  