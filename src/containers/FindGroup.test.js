import React from 'react'
import {render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {MemoryRouter as Router} from 'react-router-dom'

import App from './../App'

test('should work hopefully', async () => {
  const { debug, getByTestId, queryByTestId, getByText} = render(<Router><App /></Router>)

  expect(queryByTestId('findGroupPage')).not.toBeInTheDocument()
  fireEvent.click(getByTestId('findGroupLink'))
  expect(getByTestId('findGroupPage')).toBeInTheDocument()

  const e = {
    target: {
      value: 'apink'
    }
  }

  fireEvent.change(getByTestId('inputGroup'), e)
  fireEvent.submit(getByTestId('submitFindGroup'))

  await waitForElement(() => getByTestId('wrapperMember'))
  expect(getByText('Members of apink')).toBeInTheDocument()
  expect(getByTestId('memberList').children.length).toBe(6)
});