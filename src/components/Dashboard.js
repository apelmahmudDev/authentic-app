import React from 'react';
import { Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	const { currentUser } = useAuth();
	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title className='text-center'>User Profile</Card.Title>
					<div className='text-center' style={{ fontSize: '3.5rem' }}>
						🙎‍♂️
					</div>
					<div className='text-center'>
						<strong>Email:</strong> {currentUser.email}
					</div>
					<button className='btn btn-outline-secondary mt-3 mb-3 w-100'>
						<Link to='/update-profile'>Update Profile</Link>
					</button>
					<button className='btn btn-outline-default w-100'>
						<Link to='/logout'>Logout</Link>
					</button>
				</Card.Body>
			</Card>
		</>
	);
};

export default Dashboard;
