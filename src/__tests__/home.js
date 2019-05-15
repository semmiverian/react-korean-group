import React from 'react'
import Home, {Home as HomeComponent} from '../containers/Home'
import {render, fireEvent, waitForElement} from 'react-testing-library'

import {Provider} from 'react-redux'
import store from '../store/index'

import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

it('should render correctly', (done) => {
  // Kita akan nge render component Home
  console.log('ini yang pertama')
  const {debug, getByTestId} = render(
    <Provider store={store}>
      <Home />
    </Provider>
  )

  // debug()

  // Kita akan nge click salah satu group yang ada di component tersebut
  const wannaoneElement = getByTestId('wannaone')
  
  fireEvent.click(wannaoneElement)
   
  // debug()

  waitForElement(() => getByTestId('memberList'))
    .then(() => {
      // console.log(getByTestId('memberList').childElementCount)
      // Next nya kita akan nge cek member list sesuai dengan yang di return dari API nya
      expect(getByTestId('memberList').childElementCount).toBe(11)
      done()
    })
    .catch(err => {
      console.log(err)
    })



  // Ex: wannaone => 11 member
  // Ex: apink => 6 member
})


it('testing', () => {
  console.log('ini ini ini')
  const {debug} = render(
    <HomeComponent isLogin={true} />
  )
  debug()
})
