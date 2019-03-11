import axios from 'axios'

export const fetchMember = async member => {
  console.log('aku ga dipanggil?')
  try {
    const { data } = await axios.get(`http://localhost:3001/${member}`)
    return {
      members: data,
      groupName: member
    }
  } catch (err) {
    throw new Error(err)
  }
}