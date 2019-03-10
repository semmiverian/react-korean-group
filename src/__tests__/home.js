import React from 'react'
import Home from './../containers/Home'
import {render, fireEvent, wait, getByLabelText} from 'react-testing-library'
import {Provider} from 'react-redux'
import store from './../store/index'
import axiosMock from 'axios'

jest.mock('axios', () => {
  // Mocking agar testing kita tidak harus
  // melakukan http calls untuk mendapatkan datanya
  // yang kita lakukan adalah ketika component memanggil
  // axios.get
  // instead kita melakukan request kita hanya me resolve sebuah
  // promise dengan data yang kita kirimkan.
  return {
    get: jest.fn(() => Promise.resolve({data: [{}, {}, {}, {}, {}, {}]}))
  }
})

afterEach(() => {
  // Untuk menjaga test kita terisolasi ( tidak ada hubungannya
  //  antara satu test dengan test lain)
  // setiap kali sebuah test berhasil
  // kita akan mereset mock yang sudah kita buat sebelumnya
  axiosMock.get.mockClear()
})

function renderWithRedux(component, store) {
  return render(<Provider store={store}>{component}</Provider>)
}

test('it will render four group logo', () => {
  const {container, debug, getByTestId} = renderWithRedux(<Home />, store)
  // debug()
  // console.log(getByTestId('group-container').childElementCount, 'aaa')
  expect(getByTestId('group-container').childElementCount).toBe(4)
})

test('it will show the member group when click one of the group logo', async () => {
  const {container, debug, getByTestId, getByText} = renderWithRedux(<Home />, store)

  const apinkElement = getByTestId('group-container').firstChild

  fireEvent.click(apinkElement)

  await wait(() => expect(getByTestId('member-wrapper').childElementCount).toBe(6))

  expect(getByText(/apink/i)).toBeInTheDocument()
  expect(axiosMock.get).toHaveBeenCalledTimes(1)
})
