import React from 'react'
import App from '../App'
import {render, fireEvent, waitForElement} from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

// Routing
import {MemoryRouter as Router} from 'react-router-dom'


it('should render correctly', (done) => {
  // Kita akan menampilkan halaman home dulu
  const {debug, getByText, getByTestId} = render(
    <Router initialEntries={['/']}>
      <App />
    </Router>
  )

  const findGroupElement = getByText('Find Group')
  expect(findGroupElement).toBeInTheDocument()
  
  // Kita akan pindah halam dari home ke halaman findGroup
  fireEvent.click(findGroupElement)
  expect(getByTestId('findGroupPage')).toBeInTheDocument()

  // Kita akan nge input sebuah form dengan group name
  const form = getByTestId('formInput')

  fireEvent.change(form, {
    target: {
      value: 'wannaone'
    }
  })

  // Kita submit form tersebut
  const formSubmit = getByTestId('formSubmit')
  fireEvent.submit(formSubmit)

  // Kita expect membernya sesuai jumlahnya dengan yang diinput
  // contohnya; wannaone -> 11 Member

  waitForElement(() => getByTestId('memberList'))
    .then(() => {
      expect(getByTestId('memberList').childElementCount).toBe(11)

      done()
    })
    .catch(err => {
      console.log(err)
    })
})