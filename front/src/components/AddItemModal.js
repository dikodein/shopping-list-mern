import React, { useState } from 'react'
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

function AddItemModal (props) {
  const [input, setInput] = useState({ name: '', quantity: 0 })

  function handleChange(placeholder, e) {
    setInput({ ...input, [placeholder]: e.target.value })
  }

  async function addItem () {
    try {
      const config = { headers: { authentication: cookies.get('SSID') } }
      const payload = await axios.post('http://localhost:4000/shoplist', input, config)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal isOpen={props.addItemModal} toggle={() => props.toggleModal('addItemModal', false)}>
      <ModalHeader toggle={() => props.toggleModal('addItemModal', false)}>
        Add Item to Shopping List
      </ModalHeader>
      <ModalBody>
        <TextInput type="text" placeholder="Name" onChange={(e) => handleChange('name', e)} />
        <TextInput type="number" placeholder="Quantity" onChange={(e) => handleChange('quantity', e)} />
      </ModalBody>
      <ModalFooter>
      <Button type="submit" onClick={addItem} label="Add" className="btn btn-danger" />
      </ModalFooter>
    </Modal>
  )
}

const mapStateToProps = state => ({
  addItemModal: state.modal.addItemModal
})

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, modalStatus) => dispatch(modalAction.toggleModal(modalType, modalStatus))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal)