import React, { useCallback, useContext } from 'react'
import { Redirect, Link } from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../Auth';
import styled from "styled-components";

export default function Login({ history }) {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const {email, password} = event.target.elements;
      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  const handleAnon = (e) => {
    firebase.auth().signInAnonymously();
  }

  return (
    <Container>
      <h1>Login</h1>
      
      <button onClick={handleAnon}>
          Sign In Anonymously
        </button>

      <LoginForm onSubmit={handleLogin}>
        <label>Email
          <input name='email' type='email' />
        </label>
        <label>Password
          <input name='password' type='password' />
        </label>
        <button type='submit'>Log In</button>
      </LoginForm>
      
        
     
      <h4>Don't have a login? <Link to='/SignUp'>
        <span className='little-link'> Sign Up</span></Link></h4>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
margin: 50px auto;
width: 500px;
padding: 30px;
background-color: var(--color-primary);
color: white;
border-radius: 15px;

.little-link{
    color:var(--color-light);
    &:hover{
        color:white;
    }
    text-decoration: none;
}
`;

const LoginForm = styled.form`
  margin: auto;

  input {
    display: block;
    padding: 5px;
    margin: 10px 0;
    

  }
  
`;


