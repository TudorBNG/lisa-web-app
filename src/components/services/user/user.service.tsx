import { UserLogInData } from '../../interfaces/user/user.interface';
import APIService from '../api/api.service';

class UserService {
	api: APIService;

	constructor() {
		this.api = new APIService();
	}

	getUserData = async (userData: UserLogInData) => {
		const response = await this.api.get('/users', { params: userData });
		return { status: response.status, data: response.data };
	};
}

export default UserService;
