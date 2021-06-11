import { Container } from 'react-bootstrap';
import Signup from './components/Signup';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
							</Switch>
						</AuthProvider>
					</Router>
				</div>
			</div>
		</Container>
	);
};

export default App;
