import React from 'react'
import Menu from './Navigations/Menu'
import Header from './Header'
import Navbar from './Navigations/Navbar'
import About from './About'
import Footer from './Footer'
import Books from './Books'

class App extends React.Component {
  constructor () {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      menu: { open : true }
    }
  }

  toggleMenu () {
    this.setState({ menu : { open: !this.state.menu.open } })
  }

  render() {
    const { menu } = this.state

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />
        <Navbar toggleMenu={ this.toggleMenu } />
        <Header title="ReactJS Library" />
        <Books />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App
