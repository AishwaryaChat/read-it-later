import React from 'react'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

class Login extends React.Component {
  render () {
    return (
      <div className='row signup-form'>
        <div className='col s12'>
          <h2>Log In</h2>
        </div>
        <form className='col s12' action='/checkUser' method='post'>
          <div className='row'>
            <div className='input-field col s6'>
              <input placeholder='Email ID' name='email_id' type='text' />
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input placeholder='Password' name='password' type='password' />
            </div>
          </div>
          <div className='row'>
            <div className='col s6'>
              <button type='submit'>Log In</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
