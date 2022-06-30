import axios from 'axios';
import APIService from '../api/api.service';

class DiagnosisService {
	api: APIService;

	constructor() {
		this.api = new APIService();
	}

	computeDiagnosis = async (diagnosisData: any) => {
		const response = await axios.post('http://localhost:8889/userData', {
			params: diagnosisData,
		});
		return { status: response.status, data: response.data };
	};
}

export default DiagnosisService;
