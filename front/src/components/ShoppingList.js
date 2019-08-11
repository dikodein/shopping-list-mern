import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../components/Card'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default function ShoppingList (props) {
  const [list, setList] = useState([])
  useEffect(() => {
    getList()
  }, [])
  async function getList() {
    try {
      const config = { headers: { authentication: cookies.get('SSID') }}
      const payload = await axios.get('http://localhost:4000/shoplist/user', config)
      setList([...payload.data])
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <div className="container mt-5">
      {
        list.length > 0 ?
        list.map(item => (
          <Card item={item} />
        ))
        : <div className="text-center">There are no item yet.</div>
      }
    </div>
  )
}