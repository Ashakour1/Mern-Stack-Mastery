import React from 'react'
import { useState , useEffect} from 'react';

import {FaUser} from 'react-icons/fa'
function Register() {

    const [formData,setFormData] = useState({
        name : '',
        email : '',
        password : '',
        password2 : ''
    })

    const {name,email,password,password2} = formData;

    const onchange = (e) => {
        setFormData((prevState) => ({
            ...prevState,[
                e.target.name
            ]:e.target.value
        })) 

    }

    const onSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <>
    <section className="heading">
        <h1>
            <FaUser/> Register
        </h1>
        <p>Please create An account in Goal setter</p>
    </section>
    <section>
        <form onSubmit={onSubmit}>
           <div className="form-group">
           <input type="text" className="form-control" id="name" name='' value={name} placeholder='Enter Your name' onChange={onchange}/>
           </div>
           <div className="form-group">
           <input type="email" className="form-control" id="email" name='email' value={email} placeholder='Enter Your email' onChange={onchange}/>
           </div>
           <div className="form-group">
           <input type="password" className="form-control" id="password" name='password' value={password} placeholder='Enter password' onChange={onchange}/>
           </div>
           <div className="form-group">
           <input type="password" className="form-control" id="password2" name='password2' value={password2} placeholder='Enter  confirm password' onChange={onchange}/>
           </div>
           <div className="form-group">
            <button type="submit" className="btn btn-block">Register</button>
           </div>
        </form>
    </section>
    </>
  )
}

export default Register