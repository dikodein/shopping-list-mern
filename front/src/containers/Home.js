import React from 'react'

import Navbar from '../components/Navbar'
import ShoppingList from '../components/ShoppingList'

export default function Home (props) {
  return (
    <div>
      <Navbar />
      <ShoppingList />
    </div>
  )
}