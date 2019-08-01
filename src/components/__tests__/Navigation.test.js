import React from 'react'
// import App from '../../App'
import Navigation from '../Navigation'
import { shallow } from 'enzyme'
import * as Auth0 from "../../react-auth0-wrapper";

test('<Navigation /> renders without crashing', () => {
  jest.spyOn(Auth0, 'useAuth0').mockImplementation(() => {
    return {
      isAuthenticated: false
    }
  })

  const wrapper = shallow(<Navigation />)

})