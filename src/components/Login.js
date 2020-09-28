import React, {useState, useEffect} from 'react';
import {firebase} from '../firebase';

//setting up a login 

export default function Login() {
    const {user, setUser} = useState('');
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    const {emailError, setEmailError} = useState('');
    const {passwordError, setPasswordError}= useState('');
    const {hasLogin, setHasLogin} = useState(false);

    //handle the login if the user alread has a account
    const handleLogin = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-diasbled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth.wrong-password":
              setPasswordError(err.message);
              break;
          }
        });
    };

    //create the account
    const createSignIn = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
    };

    // //Anonymously sign up 
    // const anonSignIn = () =>{
    //     firebase.auth().signInAnonymously().catch((err) => {

    //     })
    // }

    const handleLogout = () => {
        firebase.auth().signOut();
    }

    const authListener = () => {S
        firebase.auth().onAuthStateChanged((user) =>{
            if (user){
                setUser(user);
            }S
        }
        )
    }


    return (
        <div>
            
        </div>
    )
}
