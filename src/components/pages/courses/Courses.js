import React, { useEffect, useState } from "react";

import courseService from "../../../services/course.service";
import CourseCard from "./CourseCard";

const Courses = () => {
	const cursoService = new courseService();
	const [cursos, setCursos] = useState([]);

	useEffect(() => {
		cursoService
			.getAllCourses()
			.then((response) => {
				console.log(response);
				const cursosData = response.data.map((elm) => {
					const cursoData = {
						id: elm.id,
						nombre: elm.acf.nombre_del_curso,
						objetivo: elm.acf.objetivo,
						inicio: elm.acf.inicio,
						dirigido: elm.acf.dirigido,
						imagen: elm.acf.imagen,
					};
					return cursoData;
				});
				setCursos(cursosData);
			})
			.catch((err) => console.log("ERROOOOOR", err));
	}, []);

	return (
		<div className="main">
			{cursos && cursos.map((elm) => <CourseCard {...elm} key={elm.id} />)}
		</div>
	);
};

export default Courses;