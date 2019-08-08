import React from 'react'
import ProductsList from '../ProductsList'
import { shallow } from 'enzyme'
import Loader from '../Loader'
import ProductCard from '../ProductsList/ProductCard'

describe('ProductsList /> functionality', () => {
  describe('initial component render', () => {
    let wrapper
    const spyDidMount = jest.spyOn(ProductsList.prototype, 'componentDidMount')

    beforeEach(() => {
      wrapper = shallow(<ProductsList />)
      // console.log('Before set of Tests')
    })

    afterEach(() => {
      // console.log('After set of Tests')
      spyDidMount.mockReset()
    })
    //This resets state of spyDidMount so the number of times 
    //componentDidMount runs is reset

    afterAll(() => {
      spyDidMount.mockRestore()
    })

    it('calls componentDidMount', () => {
      expect(spyDidMount).toHaveBeenCalled()
    })

    it('renders without crashing', () => {
      expect(wrapper).toBeTruthy()
    })

    it('renders a Loader if no data', () => {
      console.log(wrapper.state())
      expect(wrapper.find(Loader).length).toBe(1)
    })

    it('has an isLoaded property on state that = false', () => {
      // console.log(wrapper.state('isLoaded'))
      expect(wrapper.state('isLoaded')).toBe(false)
    })

    it('has an isLoaded property on state that = false', () => {
      expect(wrapper.state('products').length).toBe(0)
    })

    it('renders a header', () => {
      expect(wrapper.find('header').length).toBe(1)
    })
  })

  describe('render after data is fetched', () => {
    let wrapper

    window.fetch = jest.fn().mockImplementation(() => {

      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            products: [{ id: 1, name: 'product1' }, { id: 2, name: 'product2' }]
          })
        }
      })
    })

    beforeEach(() => {
      wrapper = shallow(<ProductsList />)
      console.log('Second set of Tests')
    })

    // afterEach(() => {
    //   // spyDidMount.mockReset()
    //   console.log('Before each set of Tests')
    // })

    it('does not render Loader if received data', () => {
      expect(wrapper.find(Loader).length).toBe(0)
    })

    it('render <ProductCard />components', () => {
      expect(wrapper.find(ProductCard).length).toBe(2)
    })

    it('has an isLoaded in state set to true', () => {
      expect(wrapper.state('isLoaded')).toBe(true)
    })

    it('has an array of products on state', () => {
      expect(wrapper.state('products').length).toBe(2)
    })

  })
})