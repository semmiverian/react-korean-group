import React from 'react'
import { render } from '@testing-library/react'
// Untuk menambahkan extend kaya toBeInTheDocument
import '@testing-library/jest-dom/extend-expect'

import Member from './Member'

it('should render without an error', () => {
  const member = {
    name: 'Jays no limit',
    image: '/',
    dateOfBirth: '20-10-1998'
  }
  // debug => untuk menampilkan dom nya
  // getByText => untuk mencari sebuah element di dalam DOM nya
  const { getByText, debug} = render(<Member member={member} index={0} />)
  expect(getByText(member.name)).toBeInTheDocument()
})
