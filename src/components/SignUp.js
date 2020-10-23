import React, { useCallback } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../firebase';

export default function SignUp({history}) {
    const handleRegister = useCallback(async event => {
        event.preventDefault();
        const {email, password } = event.target.elements;
        try {
            await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleRegister}>
                <label>
                    Email
                    <input name='email' type='email' />
                </label>
                <label>
                    Password
                    <input name='password' type='password' />
                </label>
                <button type='submit'>Sign Up</button>
            </form>

            <h4>Already have a login? <Link to='/Login'>
        <span>Log In</span></Link></h4>
        </div>
    )
}
