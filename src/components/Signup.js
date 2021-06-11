import React from 'react';
import { useRef } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Signup = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title className='text-center w-100'>Sign Up</Card.Title>
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
						<Button variant='primary' type='submit' className='w-100'>
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
};

export default Signup;
