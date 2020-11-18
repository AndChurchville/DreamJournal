import React, { useCallback } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import styled from 'styled-components';

export default function SignUp({history}) {
    const handleRegister = useCallback(async event => {
        event.preventDefault();
        const {email, password } = event.target.elements;
        try {
            await firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(info => {
                return firebase.firestore().collection('users').doc(info.user.uid).set({
                    uid: info.user.uid,
                    username: email.value
                })
            });
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <SignUpWrapper>
            <h1>Sign Up</h1>
            <SignUpForm onSubmit={handleRegister}>
                <label>
                    Email
                    <input name='email' type='email' />
                </label>
                <label>
                    Password
                    <input name='password' type='password' />
                </label>
                <button type='submit'>Sign Up</button>
            </SignUpForm>

            <h4>Already have a login? <Link to='/Login'>
        <span className='little-link'>Log In</span></Link></h4>
        </SignUpWrapper>
    )
}



const SignUpWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 50px auto;
width: 500px;
padding: 30px;
background-color: #292730;
color: white;
border-radius: 15px;

.little-link{
    color:#837896;
    &:hover{
        color:white;
    }
    text-decoration: none;
}
`;

const SignUpForm = styled.form`
 margin: auto;

input {
  display: block;
  padding: 5px;
  margin: 10px 0;
  }

 
`;