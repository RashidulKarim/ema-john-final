import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import './login.css';
const Login = () => {
    const {signInWithGoogle, signInWithGithub} = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    

    const logInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            history.push(location.state?.from)
        })
    }
    const logInWithGithub = () => {
        signInWithGithub()
        .then(result => {
            history.push(location.state?.from)
        })
    }
    return (
        <div className='login'>
            <div>
                <h2>Please Login</h2>
                <form>
                    <input type="email" name="" placeholder='Your Email' id="" />
                    <input type="password" name="" id="" placeholder='Your Password' />
                    <input type="submit" value="Submit" />
                </form>
                <p>don't have a account? <br /> <Link to='/register'>Please register</Link></p>
                --------------------------- <br />
                <button onClick={logInWithGoogle}  className="btn-regular">Log In With Google</button> <br /> <br />
                <button onClick={logInWithGithub}  className="btn-regular">Log In With Github</button>
            </div>
        </div>
    );
};

export default Login;