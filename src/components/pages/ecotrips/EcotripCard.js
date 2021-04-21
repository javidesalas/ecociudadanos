import React from "react";
import {Link} from 'react-router-dom'

const EcotripCard = ({ id, nombre, objetivo, inicio, dirigido, imagen }) => {
	return (
        <div className="card" style={{ width: "18rem" }}>
			<img src={imagen} className="card-img-top" alt={nombre} />
			<div className="card-body">
				<h5 className="card-title">{nombre}</h5>
				<p className="card-text">{objetivo}</p>
				<ul class="list-group list-group-flush">
                    <li class="list-group-item">Próxima edición: { inicio }</li>
				</ul>
				<Link to={`/cursos/${id}`} className="btn btn-primary" >
                    Ver curso
                    </Link>
			</div>
		</div>
	);
};

export default EcotripCard;
