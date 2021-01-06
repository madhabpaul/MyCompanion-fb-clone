import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
	//dispatching; pulling info from data layer
	const [ state, dispatch ] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					//pushing data into the data layer

					type: actionTypes.SET_USER,
					user: result.user
				});

				// console.log(result)
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__logo">
				<img
					className="logo1"
					src="https://i.ibb.co/JzZNGrH/dc85b003-3fc5-4563-96a1-698fa35d1881-150x150.png"
					border="0"
				/>


			</div>
			<Button type="submit" onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
