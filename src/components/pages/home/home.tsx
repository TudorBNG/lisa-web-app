import React from 'react';
import AuthenticationForm from '../../molecules/authentication-form/authentication-form';
import './home.style.css';

const Home = () => {
	return (
		<>
			<div className='home-page-container'>
				<div className='top-container'>
					<img
						className='heart-logo'
						src={'./heart-main-logo.png'}
						alt={'heart logo'}
					/>
				</div>
				<AuthenticationForm />
			</div>
		</>
	);
};

export default Home;
