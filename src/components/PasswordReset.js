import React, { useState } from 'react';
import { useRef } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const { passwordResetEmail } = useAuth();
	const emailRef = useRef();

	// submit user information for reset password
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setError('');
			setLoading(true);
			await passwordResetEmail(emailRef.current.value);
			setMessage('Check your email for further instructions');
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title className='text-center w-100'>Password Reset</Card.Title>
					{/* will show error message on the ui */}
					{error && (
						<Alert className='text-center' variant='danger'>
							{error}
						</Alert>
					)}
					{message && (
						<Alert className='text-center' variant='success'>
							{message}
						</Alert>
					)}
					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								required
								ref={emailRef}
							/>
						</Form.Group>
						<Button
							disabled={loading}
							variant='primary'
							type='submit'
							className='w-100'
						>
							Reset Password
						</Button>
						<Button variant='default' type='submit' className='w-100'>
							<Link to='/login'>Login</Link>
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
};

export default Signup;
