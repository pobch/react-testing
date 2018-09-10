import React from 'react'
import { mount } from 'enzyme'
import Root from '../../Root'
import CommentList from '../CommentList'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['comment 1', 'comment 2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})
