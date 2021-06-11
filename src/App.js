import { Container } from 'react-bootstrap';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import PasswordReset from './components/PasswordReset';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdateProfile from './components/UpdateProfile';

const App = () => {
	return (
		<Container>
			<div
				className='d-flex align-items-center justify-content-center'
				style={{ minHeight: '100vh' }}
			>
				<div className='w-100' style={{ maxWidth: '500px' }}>
					<Router>
						<AuthProvider>
							<Switch>
								<Route path='/signup' component={Signup} />
								<Route path='/login' component={Login} />
								<Route path='/forgot-password' component={PasswordReset} />
								<PrivateRoute exact path='/' component={Dashboard} />
								<PrivateRoute
									path='/update-profile'
									component={UpdateProfile}
								/>
							</Switch>
						</AuthProvider>
					</Router>
				</div>
			</div>
		</Container>
	);
};

export default App;
