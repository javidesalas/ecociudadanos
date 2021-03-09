import axios from "axios";

export default class CourseService {
	constructor() {
		this.api = axios.create({
			baseURL: "http://localhost/ecociudadanos/wp-json/wp/v2",
			withCredentials: true,
		});
	}
	getAllCourses = () => this.api.get("/cursos");
}
