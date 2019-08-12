import React from 'react'
import {render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {Provider} from 'react-redux'
import store from '../store/index'
import Home from './Home'

it('should render correctly', async () => {
  const {debug, getByTestId, getByText} = render(
    <Provider store={store}>
      <Home />
    </Provider>
  )
  
  expect(getByTestId('apink')).toBeInTheDocument()
  fireEvent.click(getByTestId('apink'))

  // Wait for element digunakan untuk menunggu proses async
  // Parameter pertamanya adalah sebuah callback
  // Pengecekan apa yang kita mau tunggu

  // getByTestId adalah sebuah fungsi yang akan mencari sebuah
  // element dengan attribute data-testid
  await waitForElement(() => getByTestId('memberWrapper'))
  // debug()
  expect(getByText('Members of apink')).toBeInTheDocument()

  expect(getByTestId('memberList').children.length).toBe(6)
})
