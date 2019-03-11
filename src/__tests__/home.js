import React from 'react'
import Home from './../containers/Home'
import {render, fireEvent, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {Provider} from 'react-redux'
import store from './../store/index'

test('it will render without error', () => {
  const {container, debug, getByTestId, getByText} = render(
    <Provider store={store}><Home /></Provider>
  )
  const wannaoneElement = getByTestId('wannaone')  
  fireEvent.click(wannaoneElement)

  return wait(() => expect(getByText('Members of wannaone')).toBeInTheDocument())
    .then(() => {
      console.log('aaaa')
      const memberWrapper = getByTestId('member-wrapper')
      expect(memberWrapper.childElementCount).toBe(11)
    })

  // ketika kita nge klik group wanna one
  // harus memunculkan ke sebelasan

  // debug()
})