import React, { useState } from 'react';
import { useRef } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const { signup } = useAuth();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const history = useHistory();

	// submit user information for signup
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Password do not match!');
		}
		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			await history.push('/login');
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title className='text-center w-100'>Sign Up</Card.Title>
					{/* will show error message on the ui */}
					{error && (
						<Alert className='text-center' variant='danger'>
							{error}
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
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								required
								ref={passwordRef}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Confirm Password'
								required
								ref={passwordConfirmRef}
							/>
						</Form.Group>
						<Button
							disabled={loading}
							variant='primary'
							type='submit'
							className='w-100'
						>
							Sign Up
						</Button>
					</Form>
					<div className='text-center mt-2'>
						Already have an account ? <Link to='/login'>Login</Link>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default Signup;
