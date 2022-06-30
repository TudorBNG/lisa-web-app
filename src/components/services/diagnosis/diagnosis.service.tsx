import axios from 'axios';
import APIService from '../api/api.service';

class DiagnosisService {
	api: APIService;

	constructor() {
		this.api = new APIService();
	}

	computeDiagnosis = async (diagnosisData: any) => {
		try {
			const response = await axios.post('http://localhost:8889/userData', {
				params: diagnosisData,
			});
		} catch (error) {}
		return { status: 200, data: { target: Math.round(Math.random()) } };
	};
}

export default DiagnosisService;
