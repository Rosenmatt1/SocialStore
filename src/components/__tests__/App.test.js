import React from 'react'
import App from '../../App'
// import Navigation from '../Navigation'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'

//it or test

it('my first test', () => {
  const isTrue = true
  expect(isTrue).toBe(true)
})

test('<App /> renders without crashing', () => {
  const wrapper = shallow(<App />)
})

test('<App /> has 6 Route child components', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Route).length).toEqual(6)
})



