const defaultState = {
  groupName: '',
  members: [],
  loading: false,
  error: false
}

function groupReducer(state = defaultState, action) {
  const {type, payload} = action

  switch (type) {
    case 'SET_GROUP_NAME':
      return {
        ...state,
        groupName: payload
      }
    case 'FETCH_GROUP_DATA_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_GROUP_DATA_SUCCESS':
      return {
        ...state,
        members: payload,
        loading: false
      }
    case 'FETCH_GROUP_DATA_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default groupReducer
