import React from 'react'
import {render} from 'react-testing-library'
import Group from '../components/Group'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

it('should match snapshot', () => {
  const {container} = render(<Group />)

  expect(container).toMatchSnapshot()
})