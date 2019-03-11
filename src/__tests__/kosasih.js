import React from 'react'
import Kosasih from '../components/Kosasih'
import {render} from 'react-testing-library'

test('it will works with snapshot', () => {
  const {container} = render(<Kosasih />)

  expect(container).toMatchSnapshot()
})