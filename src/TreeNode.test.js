import React from 'react'
import { shallow, mount } from 'enzyme'
import TreeNode from './TreeNode'

it('renders without crashing', () => {
  var testNodes = {title: 'one', childNodes: [{title: 'one', childNodes: [{title: 'one'}]}, {title: 'two'}]}
  shallow(<TreeNode node={testNodes}/>)
})

it('renders its prop `node` as a list of todos', () => {
  var testNodes = {title: 'one', childNodes: [{title: 'one'}, {title: 'two'}]}
  const wrapper = shallow(<TreeNode node={testNodes} />)
  expect(wrapper.find('ul').children().length).toBe(2)
})

it('each component contains an input form and button', () => {
  var testNodes = {title: 'one'}
  const wrapper = shallow(<TreeNode node={testNodes} />)
  expect(wrapper.contains(
    [<form><input type="text" /><input type="submit" /></form>]
  )).toEqual(true)
})

// it('submitting text through the form creates a new <TreeNode /> component ')
