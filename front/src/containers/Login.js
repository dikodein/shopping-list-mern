import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Form from '../components/Form'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default function Login (props) {
  const [input, setInput] = useState({ email: '', password: '' })

  useEffect(() => {
    if (cookies.get('SSID')) props.history.push('/')
  }, [])

  async function registerUser () {
    try {
      const payload = await axios.post(`http://localhost:4000/user/login`, input)
      console.log(payload)
      cookies.set('SSID', payload.data.token)
      props.history.push('/')
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
        <h1>Login here</h1>
        <TextInput type="email" placeholder="Email" onChange={(e) => handleChange('email', e)} />
        <TextInput type="password" placeholder="Password" onChange={(e) => handleChange('password', e)} />
        <Button type="submit" label="Go" onClick={registerUser} className="btn btn-danger" />
      </Form>
    </div>
  )
}