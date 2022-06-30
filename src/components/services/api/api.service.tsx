import axios from 'axios';

class APIService {
	path: string;

	constructor() {
		this.path = 'http://localhost:5000';
	}

	get = async (endpoint: string, headers?: object) => {
		return await axios.get(this.path + endpoint, headers);
	};

	post = async (endpoint: string, body: object, headers?: object) => {
		return await axios.post(this.path + endpoint, body, headers);
	};

	put = async (endpoint: string, body: object, headers?: object) => {
		return await axios.put(this.path + endpoint, body, headers);
	};

	delete = async (endpoint: string, headers?: object) => {
		return await axios.delete(this.path + endpoint, headers);
	};
}

export default APIService;
