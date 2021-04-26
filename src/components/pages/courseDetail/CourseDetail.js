import React, { useState, useEffect } from "react";
import courseService from "../../../services/course.service";

const CourseDetail = ({ match }) => {
	const cursoService = new courseService();
	const [curso, setCurso] = useState([]);

	useEffect(() => {
		cursoService.getOneCourse(match.params.cursoId).then((response) => {
			console.log(response);
			const cursoData = {
				id: response.data.id,
				nombre: response.data.acf.nombre_del_curso,
				objetivo: response.data.acf.objetivo,
				metodo: response.data.acf.metodo[0],
				inicio: response.data.acf.inicio,
				duracion: response.data.acf.duracion,
				dirigido: response.data.acf.dirigido,
				lugar: response.data.acf.lugar,
				transmitido: response.data.acf.transmitido,
				diploma: response.data.acf.diploma,
				costo: response.data.acf.costo,
				participantes: response.data.acf.participantes,
				programa: response.data.acf.programa,
				inscripcion: response.data.acf.inscripcion,
				imagen: response.data.acf.imagen,
			};
			setCurso(cursoData);
		});
	}, []);

    return (
			<div>
				<img src={curso.imagen} alt={curso.nombre} />
				<h1>{curso.nombre}</h1>
				<p>{curso.objetivo}</p>
				<p>metodo: {curso.metodo}</p>
				<p>inicio:{curso.inicio}</p>
				<p>duracion:{curso.duracion}</p>
				<p>dirigido:{curso.dirigido}</p>
				<p>lugar:{curso.lugar}</p>
				<p>transmitido:{curso.transmitido}</p>
				<p>diploma:{curso.diploma}</p>
				<p>costo:{curso.costo}</p>
				<p>participantes:{curso.participantes}</p>
				<a href={curso.programa}>Descarga el programa</a> <br/>
				<a href={curso.inscripcion}> Formulario de inscripcion</a>
			</div>
		);
};

export default CourseDetail;