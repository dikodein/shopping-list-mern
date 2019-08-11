import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import modalAction from '../modules/actions/modalAction'

import Button from './Button'
import EditItemModal from './EditItemModal'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

function Card (props) {
  async function deleteConfirmation (item) {
    const confirm = window.confirm(`Are you sure want to delete this item? \n ${item.name}`)
    if (confirm) {
      const config = { headers: { authentication: cookies.get('SSID') }}
      const { data } = await axios.delete(`http://localhost:4000/shoplist/${item._id}`, config)
      console.log(data)
      window.location.reload()
    }
  }

  return (
    <div className="border d-flex p-3">
      <div>{props.item.name}</div>
      <div className="mx-auto">{props.item.quantity}</div>
      <div className="ml-auto">
        <Button type="button" className="btn btn-warning" label="Update" 
          onClick={() => { props.toggleModal('editItemModal', true); props.editListId(props.item._id) }} />
        <Button className="ml-3 btn btn-secondary" label="Delete" onClick={() => deleteConfirmation(props.item)} />
      </div>
      <EditItemModal />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, modalStatus) => dispatch(modalAction.toggleModal(modalType, modalStatus)),
  editListId: (itemId) => dispatch(modalAction.editListId(itemId))
})

export default connect(null, mapDispatchToProps)(Card)