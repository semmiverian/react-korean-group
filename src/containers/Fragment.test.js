import React from 'react'
import { render } from '@testing-library/react'
import Fragment from './Fragment'

test('should work', () => {
  const { container } = render(<Fragment />)

  expect(container).toMatchSnapshot()
})