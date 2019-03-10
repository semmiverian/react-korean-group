import React from 'react'
import App from './../App'
import {MemoryRouter as Router} from 'react-router-dom'
import {render, fireEvent, wait} from 'react-testing-library'
import {Provider} from 'react-redux'
import store from './../store/index'

function renderWithRouterAndRedux(component, route = '/') {
  return render(
    <Router initialEntries={[route]}>
      <Provider store={store}>{component}</Provider>
    </Router>
  )
}

test('it will render FindGroup component when visit /find-group', () => {
  const {getByTestId, debug} = renderWithRouterAndRedux(<App />, '/find-group')

  expect(getByTestId('find-group-page')).toBeInTheDocument()
})

test('it can navigate to find-group when find group button is clicked', () => {
  const {getByText, getByTestId, queryByTestId} = renderWithRouterAndRedux(<App />)

  const findGroupLink = getByText(/Find Group/)

  expect(findGroupLink).toBeInTheDocument()

  fireEvent.click(findGroupLink)

  expect(getByTestId('find-group-page')).toBeInTheDocument()

  // Query by akan return null kalau dia ga ketemu
  // Get by akan return error kalau dia ga ketemu
  expect(queryByTestId('home-page')).not.toBeInTheDocument()
})

test('it will return apink member when searching apink as the group name', async () => {
  const {getByTestId, getByPlaceholderText, getByText} = renderWithRouterAndRedux(<App />, '/find-group')
  const group = 'apink'

  const search = getByPlaceholderText(/search any group/i)

  fireEvent.change(search, {target: {value: group}})

  const form = getByTestId('form-find-group')
  fireEvent.submit(form)

  await wait(() => getByTestId('member-wrapper'))

  expect(getByText(/apink/i)).toBeInTheDocument()

  expect(getByTestId('member-wrapper').childElementCount).toBe(6)

  expect(search.value).toBe('')
})

test('it will render error when find unregistered component', async () => {
  const {getByTestId, getByPlaceholderText, getByText, queryByTestId} = renderWithRouterAndRedux(<App />, '/find-group')

  const group = 'exo'

  const search = getByPlaceholderText(/search any group/i)

  fireEvent.change(search, {target: {value: group}})

  const form = getByTestId('form-find-group')
  fireEvent.submit(form)

  await wait(() => getByText(/not found/i))

  expect(getByText(/not found/i)).toBeInTheDocument()

  expect(queryByTestId('member-wrapper')).not.toBeInTheDocument()
})
