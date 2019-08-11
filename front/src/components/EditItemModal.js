import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import modalAction from '../modules/actions/modalAction'

import TextInput from './TextInput'
import Button from './Button'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

function EditItemModal (props) {
  const [input, setInput] = useState({ name: '', quantity: 0 })

  useEffect(() => {
    if (props.itemId) getItem()
  }, [props.itemId])

  async function getItem () {
    const config = { headers: { authentication: cookies.get('SSID') }}
    const payload = await axios.get(`http://localhost:4000/shoplist/${props.itemId}`, config)
    setInput({ name: payload.data.name, quantity: payload.data.quantity })
  }

  function handleChange(placeholder, e) {
    setInput({ ...input, [placeholder]: e.target.value })
  }

  async function editItem () {
    try {
      const config = { headers: { authentication: cookies.get('SSID') } }
      const payload = await axios.put(`http://localhost:4000/shoplist/${props.itemId}`, input, config)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal isOpen={props.editItemModal} toggle={() => props.toggleModal('editItemModal', false)}>
      <ModalHeader toggle={() => props.toggleModal('editItemModal', false)}>
        Edit Item to Shopping List
      </ModalHeader>
      <ModalBody>
        <TextInput type="text" placeholder="Name" onChange={(e) => handleChange('name', e)} value={input.name} />
        <TextInput type="number" placeholder="Quantity" onChange={(e) => handleChange('quantity', e)} value={input.quantity} />
      </ModalBody>
      <ModalFooter>
      <Button type="submit" onClick={editItem} label="Edit" className="btn btn-danger" />
      </ModalFooter>
    </Modal>
  )
}

const mapStateToProps = state => ({
  editItemModal: state.modal.editItemModal,
  itemId: state.modal.itemId
})

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, modalStatus) => dispatch(modalAction.toggleModal(modalType, modalStatus))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItemModal)