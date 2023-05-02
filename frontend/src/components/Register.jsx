import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='container d-flex justify-content-between mt-5'>
            <div className='flex-fill'>
                <h3>signup as an customer</h3>
                <Link to="/costumer/signup" className='btn btn-warning'>Signup</Link>
            </div>
            <div className='flex-fill'  >
                <h3>signup as a pemilik kos</h3>
                <Link to="/pemilikKos/signup" className='btn btn-warning'>Signup</Link>
            </div>
        </div>
    )
}

export default Register
