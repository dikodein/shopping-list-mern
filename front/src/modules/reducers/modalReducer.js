const defaultState = {
  addItemModal: false,
  editItemModal: false,
  itemId: ''
}

const modalReducer = (state=defaultState, action) => {
  switch(action.type) {
    case "TOGGLE_MODAL": {
      return {
        ...state,
        ...action.data,
        itemId: ''
      }
    }
    case "EDIT_LIST_ID": {
      return {
        ...state,
        ...action.data
      }
    }
    default:
      return state
  }
}

export default modalReducer