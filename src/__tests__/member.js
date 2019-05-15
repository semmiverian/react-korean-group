import React from 'react'
import Member from '../components/Member'
import {render} from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'


it('should render correctly without an error', () => {
  // Kita akan nge render component Member
  const member = {
    image: '/',
    name: 'Naga Rubhi',
    dateOfBirth: '31-07-1993'
  }

  const index = 0

  const {container, debug, getByText, getByTestId} = render(<Member member={member} index={index} />)
  expect(getByText(member.name)).toBeInTheDocument()
  expect(getByText(member.dateOfBirth)).toBeInTheDocument()
  expect(getByTestId('memberImage')).toHaveStyle(`background-image: url(${member.image})`)
  
  // Ketika nge render component member
  // Dalam dom nya harus ada image url nya aja
  // Harus ada nama membernya
  // Harus ada tanggal lahir membernya
})


