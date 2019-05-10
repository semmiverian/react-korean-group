import axios from 'axios'

export function fetchMember(member) {
  console.log('apakah diriku jalan?')
  return axios.get(`http://localhost:3001/${member}`)
}