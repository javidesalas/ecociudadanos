import axios from "axios";

export default class EcotripService {
	constructor() {
		this.api = axios.create({
			baseURL: process.env.REACT_APP_API_URL,
			withCredentials: true,
		});
	}
	getAllEcotrips = () => this.api.get("/ecotrips");
	getOneEcotrip = (ecotripId) => this.api.get(`/ecotrips/${ecotripId}`);
}
