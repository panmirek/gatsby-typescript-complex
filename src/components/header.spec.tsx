import * as React from 'react'
import renderer from 'react-test-renderer'

import Header from './header'

describe('Header', (): void => {
  it('renders correctly', (): void => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
