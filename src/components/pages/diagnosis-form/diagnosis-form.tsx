import { useState } from 'react';
import { Form } from 'react-final-form';
import Input from '../../atoms/input/input';
import DiagnosisService from '../../services/diagnosis/diagnosis.service';
import './diagnosis-form.style.scss';

const DiagnosisForm = () => {
	const diagnosisService = new DiagnosisService();
	const [result, setResult] = useState(1);

	const onSubmit = async (event: any) => {
		const response = await diagnosisService.computeDiagnosis(event);
		console.log('Response: ', JSON.stringify(response));
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		response.status === 200 ? setResult(response.data.target) : '';
	};
	const formFields = [
		'age',
		'sex',
		'cp',
		'trestbps',
		'chol',
		'fbs',
		'restecg',
		'thalach',
		'exang',
		'oldpeak',
		'slope',
		'ca',
		'thal',
	];
	return (
		<>
			<Form
				onSubmit={onSubmit}
				validate={(values) => {
					const errors: any = {};
					formFields.forEach((element) =>
						!values[element] ? (errors[element] = 'Required') : ''
					);
					return errors;
				}}
				render={({ handleSubmit, submitting }) => (
					<form className='diagnosis-form' onSubmit={handleSubmit}>
						{formFields.map((element, index) => (
							<Input
								key={index}
								field={element}
								fieldLabel={element}
								type={'text'}
							/>
						))}
						<button
							className='submit-diagnosis-button'
							type={'submit'}
							disabled={submitting}
						>
							Check diagnosis
						</button>
						{result !== undefined && (
							<div className='display-result'>
								<p>
									Test Result:{' '}
									{result === 0
										? 'You are healthy'
										: 'You might need to see a doctor!'}
								</p>
							</div>
						)}
					</form>
				)}
			/>
		</>
	);
};

export default DiagnosisForm;
