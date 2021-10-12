import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login'>
            <div>
                <h2>Please Register</h2>
                <form>
                    <input type="email" name="" placeholder='Your Email' id="" />
                    <input type="password" name="" id="" placeholder='Your Password' />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <br /> <Link to='/login'>Please Login</Link></p>
                ---------------------------
                <div style={{textAlign:'center'}} className="btn-regular">Log In With Google</div>
            </div>
        </div>
    );
};

export default Register;