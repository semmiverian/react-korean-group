import {render} from 'react-testing-library'
import React from 'react'
import Member from '../components/Member.jsx'

test('it will render member component', () => {
  const member = {
    image: '/',
    name: 'Kim Nam Joo',
    dateOfBirth: '15-04-1995'
  }
  const {getByTestId, debug} = render(<Member index={0} member={member} />)
  // Code ini akan nge print dom kita saat fungsi ini dipanggil
  // debug()

  // bisa juga memanggil debug pada element yang kita inginkan
  // debug(getByTestId('member-name'))

  expect(getByTestId('member-name')).toHaveTextContent(member.name)
  expect(getByTestId('member-image')).toHaveStyle(`background-image : url(${member.image})`)
  expect(getByTestId('member-date-of-birth')).toHaveTextContent(member.dateOfBirth)

  expect(getByTestId('member-container')).toHaveClass('w-1/4 pr-2 pb-4')
})

test('it will match the snapshot', () => {
  const member = {
    image: '/',
    name: 'Kim Nam Joo',
    dateOfBirth: '15-04-1995'
  }

  const {container} = render(<Member index={0} member={member} />)

  expect(container).toMatchSnapshot()
})
