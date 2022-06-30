import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from '../molecules/navigation-bar/navigation-bar';
import DiagnosisForm from '../pages/diagnosis-form/diagnosis-form';
import Home from '../pages/home/home';
import RegistrationPage from '../pages/registration/registration';

function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<NavigationBar />} />
				<Route path='/profile' element={<NavigationBar />} />
				<Route
					path='/register'
					element={
						<>
							<RegistrationPage />
						</>
					}
				/>
				<Route
					path='/check-diagnosis'
					element={
						<>
							<NavigationBar />
							<DiagnosisForm />
						</>
					}
				/>
			</Routes>
		</Router>
	);
}

export default AppRouter;
