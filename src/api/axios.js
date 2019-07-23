import axios from 'axios'

export function fetchMember(member) {
  console.log('apakah diriku jalan?')
  return axios.get(`https://korean-group-dict.semmivp1.now.sh/${member}`)
}
