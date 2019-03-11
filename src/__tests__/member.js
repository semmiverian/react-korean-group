import React from 'react'
import Member from './../components/Member'
import {render} from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

test('it should render the member image, name, date of birth', () => {
  const ulfa = {
    image: '/',
    name: "Maria Ulfa",
    dateOfBirth: '11-03-1996'
  }

  const {container, debug, getByText, getByTestId} = render(<Member member={ulfa} index={0} />)

  // debug()
  expect(container).toBeInTheDocument()

  const ulfaElement = getByText(ulfa.name)
  expect(ulfaElement).toBeInTheDocument()

  const ulfaBirthDate = getByText(ulfa.dateOfBirth)
  expect(ulfaBirthDate).toBeInTheDocument()

  const ulfaImage = getByTestId('member-image')
  expect(ulfaImage).toHaveStyle(`background-url: url(${ulfa.image})`)

  const memberContainer = getByTestId('member-container')

  expect(memberContainer).toHaveClass('w-1/4 pr-2 pb-4')

  // debug(ulfaImage)
  // console.log(container)
})

test('hmm masa', () => {
  const ulfa = {
    image: '/',
    name: "Maria Ulfa",
    dateOfBirth: '11-03-1996'
  }
  const {container, debug, getByText, getByTestId} = render(<Member member={ulfa} index={0} />)

  // debug()
})