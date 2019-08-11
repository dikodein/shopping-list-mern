const toggleModal = (modalType, modalStatus) => {
  return dispatch => {
    const data = { [modalType]: modalStatus }
    dispatch({ type: "TOGGLE_MODAL", data })
  }
}

const editListId = (itemId) => {
  return dispatch => {
    const data = { itemId }
    dispatch({ type: "EDIT_LIST_ID", data })
  }
}

export default {
  toggleModal,
  editListId
}