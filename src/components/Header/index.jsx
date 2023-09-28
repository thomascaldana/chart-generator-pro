import { Container, Nav, MenuOptions, Ul, LogoImg } from './styles'
import Logo from '../../assets/imgs/data-lab-icon.svg'
import { Link } from 'react-router-dom'


import { useState } from 'react'

export const Header = () => {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <Container style={{ width: '100%' }}>
      <Nav>
        <a target='_blank'>
          <LogoImg src={Logo} alt='Logo'></LogoImg>
        </a>


        <Ul className='nav-links' >
          <li className='li-item'><Link to="/" className='link-routes'>ChartGenerator</Link></li>
          <li className='li-item'><Link to="/ChartExamples" className='link-routes'>Chart Examples</Link></li>
          <li className='li-item'><Link to="/mycharts" className='link-routes'>My Charts</Link></li>
        </Ul>
        <Ul className='nav-links' >
          <li className='li-item'><Link to="/auth" className='link-routes'>Login</Link></li>
          <li className='li-item'><Link id='sign-up' to="/signup" className='link-routes'>Sign up</Link></li>
        </Ul>

        <div className='burger-menu' onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </Nav >

      <MenuOptions className={menu_class} isVisible={isMenuClicked}>
        <ul className='menu-options' >
          <li className='li-item'><Link to="/" className='link-routes'>ChartGenerator</Link></li>
          <li className='li-item'><Link to="/ChartExamples" className='link-routes'>Chart Examples</Link></li>
        </ul>
      </MenuOptions>
    </Container >
  )

}

