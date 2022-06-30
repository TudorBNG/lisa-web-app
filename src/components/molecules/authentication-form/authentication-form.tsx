import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import Input from '../../atoms/input/input';
import UserService from '../../services/user/user.service';
import './authentication-form.style.scss';

const AuthenticationForm = () => {
	const navigate = useNavigate();

	const userService = new UserService();

	const onSubmit = async (event: any) => {
		navigate('/home');
		const response = await userService.getUserData(event);
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	};

	return (
		<div className='form-container'>
			<div className='authentication-container'>
				<Form
					onSubmit={onSubmit}
					validate={(values) => {
						const errors: any = {};
						if (!values.username) {
							errors.username = 'Required';
						}
						if (!values.password) {
							errors.password = 'Required';
						}

						return errors;
					}}
					render={({ handleSubmit, submitting }) => (
						<form className='log-in-form' onSubmit={handleSubmit}>
							<Input field='username' fieldLabel='Username' type={'text'} />
							<Input field='password' fieldLabel='Password' type={'password'} />
							<button
								className='log-in-button'
								type='submit'
								disabled={submitting}
							>
								Log in
							</button>
						</form>
					)}
				/>
				<div className='forgot-password'>
					<p className='forgot-password-text'>Forgot password? </p>
					<a className='forgot-password-link' href='/register'>
						Reset Password
					</a>
				</div>
			</div>
			<div className='bottom-container'>
				<div className='new-account-container'>
					<p className='new-account-text'>New member? </p>
					<a className='new-account-link' href='/register'>
						Become a member
					</a>
				</div>
			</div>
		</div>
	);
};

export default AuthenticationForm;
