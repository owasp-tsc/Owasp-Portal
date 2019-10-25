// Create a seperate context for all the components present inside App.js

import React, { createContext, PureComponent } from "react"

const NavbarContext = createContext({})

class NavbarProvider extends PureComponent {
  render() {
    const { children, value } = this.props
    return (
      <NavbarContext.Provider value={{ ...value }}>
        {children}
      </NavbarContext.Provider>
    )
  }
}

export const NavbarConsumer = NavbarContext.Consumer
export { NavbarContext }
export default NavbarProvider
