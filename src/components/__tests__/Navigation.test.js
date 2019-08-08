import React from 'react'
// import App from '../../App'
import Navigation from '../Navigation'
import { shallow } from 'enzyme'
import * as Auth0 from "../../react-auth0-wrapper"
import { Link } from 'react-router-dom'

describe('<Navigation /> functionality', () => {
  describe('isAuthenticated = false', () => {

    test('renders 3 Link components', () => {
      jest.spyOn(Auth0, 'useAuth0').mockImplementation(() => {
        return {
          isAuthenticated: false
        }
      })
      const wrapper = shallow(<Navigation />)
      expect(wrapper.find(Link).length).toBe(3)
    })
    it('renders 1 button', () => {
      jest.spyOn(Auth0, 'useAuth0').mockImplementation(() => {
        return {
          isAuthenticated: false
        }
      })
      const wrapper = shallow(<Navigation />)
      expect(wrapper.find('button').length).toBe(1)
    })
  })

  describe('isAuthenticated = true', () => {
    it('<Navigation /> renders 1 button when isAuthenticaed = false', () => {
      jest.spyOn(Auth0, 'useAuth0').mockImplementation(() => {
        return {
          isAuthenticated: true
        }
      })
      const wrapper = shallow(<Navigation />)
      expect(wrapper.find('button').length).toBe(1)
      // expect(wrapper.find('button').html()).toMatch('Log Out')
    })

    it('renders 4 Link components', () => {
      jest.spyOn(Auth0, 'useAuth0').mockImplementation(() => {
        return {
          isAuthenticated: true
        }
      })
      const wrapper = shallow(<Navigation />)
      expect(wrapper.find(Link).length).toBe(4)
    })
  })

})


