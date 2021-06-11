import { Container } from 'react-bootstrap';
import Signup from './components/Signup';

const App = () => {
	return (
		<Container>
			<div
				className='d-flex align-items-center justify-content-center'
				style={{ minHeight: '100vh' }}
			>
				<div className='w-100' style={{ maxWidth: '500px' }}>
					<Signup />
				</div>
			</div>
		</Container>
	);
};

export default App;
