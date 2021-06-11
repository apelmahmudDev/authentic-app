import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function UpdateProfile() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updatePassword, updateEmail } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	// submit signup info
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Password do not match!');
		}

		const promises = [];
		setLoading(true);
		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				history.push('/');
			})
			.catch(() => {
				setError('Faild to update your profile');
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<h2 className='text-center mb-4'>Update Profile</h2>
					{error && (
						<div className='alert alert-danger' role='alert'>
							{error}
						</div>
					)}
					<form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label htmlFor='exampleInputEmail1' className='form-label'>
								Email address
							</label>
							<input
								type='email'
								className='form-control'
								id='exampleInputEmail1'
								ref={emailRef}
								defaultValue={currentUser.email}
								required
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='exampleInputPassword1' className='form-label'>
								Password
							</label>
							<input
								type='password'
								className='form-control'
								id='exampleInputPassword1'
								ref={passwordRef}
								placeholder='Leave blank to kep the same'
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='passwordConfirm' className='form-label'>
								Password Confirmation
							</label>
							<input
								type='password'
								className='form-control'
								id='passwordConfirm'
								ref={passwordConfirmRef}
								placeholder='Leave blank to kep the same'
							/>
						</div>
						<button
							disabled={loading}
							type='submit'
							className='btn btn-primary w-100'
						>
							Update
						</button>
					</form>
				</div>
			</div>
			<div className='w-100 text-center mt-2'>
				<Link to='/'>Cancel</Link>
			</div>
		</>
	);
}

export default UpdateProfile;
