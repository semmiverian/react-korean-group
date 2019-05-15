import axios from 'axios'

export function setGroupName(name) {
  return {
    type: 'SET_GROUP_NAME',
    payload: name
  }
}

export function memberLoading() {
  return {
    type: 'FETCH_GROUP_DATA_LOADING'
  }
}

export function successMember(data) {
  return {
    type: 'FETCH_GROUP_DATA_SUCCESS',
    payload: data
  }
}

export function errorMember(data) {
  return {
    type: 'FETCH_GROUP_DATA_ERROR'
  }
}

export function fetchMember(group) {
  return async dispatch => {
    dispatch(memberLoading())
    try {
      const {data} = await axios.get(`http://localhost:3001/${group}`)
      dispatch(successMember(data))
      dispatch(setGroupName(group))
    } catch (err) {
      console.log(err)
      dispatch(errorMember())
    }
  }
}
