import axios from "axios";

export default class CourseService {
	constructor() {
		this.api = axios.create({
			baseURL: "http://158.69.125.119/~ecociuda/wp-json/wp/v2/cursos",
			withCredentials: true,
		});
	}
	getAllCourses = () => this.api.get("/");
	getOneCourse = (courseId) => this.api.get(`/${courseId}`);
}
