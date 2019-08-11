import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import modalAction from '../modules/actions/modalAction'

import Button from '../components/Button'
import AddItemModal from './AddItemModal'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

function Navbar (props) {
  function logout () {
    props.history.push('/login')
    cookies.remove('SSID')
  }

  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">ShoppingList App</a>
        <Button type="button" onClick={() => props.toggleModal('addItemModal', true)} label="Add Item" className="btn btn-dark ml-3" />
        <Button type="button" onClick={logout} label="Logout" className="btn btn-dark ml-auto" />
      </div>
      <AddItemModal />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, modalStatus) => dispatch(modalAction.toggleModal(modalType, modalStatus))
})

export default connect(null, mapDispatchToProps)(withRouter(Navbar))