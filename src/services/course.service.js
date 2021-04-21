import axios from "axios";

export default class CourseService {
	constructor() {
		this.api = axios.create({
			baseURL: process.env.REACT_APP_API_URL,
			withCredentials: true,
		});
	}
	getAllCourses = () => this.api.get("/cursos/");
	getOneCourse = (courseId) => this.api.get(`/cursos/${courseId}`);
}
