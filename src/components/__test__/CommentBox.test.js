import React from 'react'
import { mount } from 'enzyme'
import CommentBox from '../CommentBox'

it('has a textarea and a submit button', () => {
  const wrapped = mount(<CommentBox />)

  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})
