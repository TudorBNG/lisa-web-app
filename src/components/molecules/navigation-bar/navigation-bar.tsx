import React from 'react';

const NavigationBar = () => {
	return (
		<nav
			style={{
				width: '95%',
				paddingLeft: '5%',
				margin: '5%',
				borderRadius: '20px',
				border: '3px solid black',
			}}
			className='navbar navbar-expand-lg navbar-light bg-light'
		>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavDropdown'
				aria-controls='navbarNavDropdown'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarNavDropdown'>
				<ul className='navbar-nav' style={{ width: '100%' }}>
					<li
						className='nav-item'
						style={{ width: '30%', paddingRight: '10%' }}
					>
						<a className='nav-link' href='/home'>
							Home
						</a>
					</li>
					<li
						className='nav-item'
						style={{ width: '30%', paddingRight: '10%' }}
					>
						<a className='nav-link' href='/check-diagnosis'>
							Check diagnosis
						</a>
					</li>
					<li
						className='nav-item'
						style={{ width: '30%', paddingRight: '10%' }}
					>
						<a className='nav-link' href='/profile'>
							Profile
						</a>
					</li>
					<li
						className='nav-item'
						style={{ width: '30%', paddingRight: '10%' }}
					>
						<a className='nav-link' href='/'>
							Log out
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavigationBar;
