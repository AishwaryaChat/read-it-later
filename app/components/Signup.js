import React from 'react'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

class Signup extends React.Component {
  render () {
    return (
      <div className='row signup-form'>
        <div className='col s12'>
          <h2>Sign Up</h2>
        </div>
        <form className='col s12' action='/addUser' method='post'>
          <div className='row'>
            <div className='input-field col s6'>
              <input placeholder='FirstName' name='first_name' type='text' />
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input placeholder='Second Name' name='last_name' type='text' />
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input placeholder='Email ID' name='email_id' type='email' />
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input placeholder='Password' name='password' type='password' />
            </div>
          </div>
          <div className='row'>
            <div className='col s6'>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
