import React, {useEffect, useState} from 'react';
import firebase from './firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [awaiting, setAwating] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          setCurrentUser(user);
          setAwating(false);
        });
    }, []);

    if(awaiting){
      return <><p>Loading...</p></>
    }

    return (
      <AuthContext.Provider
        value={{
          currentUser
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}