import React, { useEffect, useState }  from 'react';

import courseService from '../services/course.service'

const Courses = () => {

    const cursoService = new courseService()
    const [cursos, setCursos] = useState([])

    useEffect(() => {
        cursoService
            .getAllCourses()
            .then(response => {
                console.log(response)
            const nombresCursos = response.data.map(
							(elm) => elm.acf.nombre_del_curso
            );
                setCursos(nombresCursos)
        })
    },[])



    return (
        <div>
            {cursos && cursos.map(elm => (<p>{ elm}</p>))}
        </div>
    );
};

export default Courses;