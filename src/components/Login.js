import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <h1> This is the login page</h1>

      <h4>Don't have a login? <Link to='/SignUp'>
        <span>Sign Up</span></Link></h4>
    </div>
  )
}
