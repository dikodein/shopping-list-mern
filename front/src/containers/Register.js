import React, { useState } from 'react'
import axios from 'axios'

import TextInput from '../components/TextInput'
import Form from '../components/Form'
import Button from '../components/Button'

export default function Register (props) {
  const [input, setInput] = useState({ firstName: '', lastName: '', email: '', password: '' })

  async function registerUser () {
    try {
      const payload = await axios.post(`http://localhost:4000/user/register`, input)
      console.log(payload)
      props.history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  function handleChange(placeholder, e) {
    setInput({ ...input, [placeholder]: e.target.value })
  }

  return (
    <div>
      <Form>
        <h1>Register here</h1>
        <TextInput type="text" placeholder="First Name" onChange={(e) => handleChange('firstName', e)} />
        <TextInput type="text" placeholder="Last Name" onChange={(e) => handleChange('lastName', e)} />
        <TextInput type="email" placeholder="Email" onChange={(e) => handleChange('email', e)} />
        <TextInput type="password" placeholder="Password" onChange={(e) => handleChange('password', e)} />
        <Button type="submit" label="Submit" onClick={registerUser} className="btn btn-danger" />
      </Form>
    </div>
  )
}