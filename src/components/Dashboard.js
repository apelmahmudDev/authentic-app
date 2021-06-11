import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
	const { currentUser, logout } = useAuth();
	const [error, setError] = useState('');
	const history = useHistory();

	// user logout

	const handleLogout = async () => {
		try {
			setError('');
			await logout();
			await history.push('/login');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title className='text-center'>User Profile</Card.Title>
					{/* will show error message on the ui */}
					{error && (
						<Alert className='text-center' variant='danger'>
							{error}
						</Alert>
					)}
					<div className='text-center' style={{ fontSize: '3.5rem' }}>
						🙎‍♂️
					</div>
					<div className='text-center'>
						<strong>Email:</strong> {currentUser.email}
					</div>
					<button className='btn btn-outline-secondary mt-3 mb-3 w-100'>
						<Link to='/update-profile'>Update Profile</Link>
					</button>
					<button
						onClick={handleLogout}
						className='btn btn-outline-default w-100'
					>
						<Link>Logout</Link>
					</button>
				</Card.Body>
			</Card>
		</>
	);
};

export default Dashboard;
