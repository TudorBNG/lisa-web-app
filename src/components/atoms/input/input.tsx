import { useState } from 'react';
import { Field } from 'react-final-form';
import './input.style.scss';

interface InputProperties {
	field: string;
	fieldLabel: string;
	type: string;
}

const Input = ({ field, fieldLabel, type }: InputProperties) => {
	const [valid, setValid] = useState(true);
	return (
		<Field
			key={field}
			name={field}
			parse={(value: any) => {
				!value ? setValid(false) : setValid(true);
				return value;
			}}
		>
			{({ input, meta }) => (
				<div style={{ display: 'block', width: '100%', textAlign: 'start' }}>
					<div className='input-container'>
						<label className='input-label' htmlFor={fieldLabel}>
							{fieldLabel}{' '}
						</label>
						<input
							className={`input-field input-${
								!valid || meta?.submitError ? `invalid` : `valid`
							}-text`}
							type={type}
							{...input}
						/>
					</div>
				</div>
			)}
		</Field>
	);
};

export default Input;
