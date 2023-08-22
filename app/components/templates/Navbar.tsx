import Nav from "../elements/Nav"
import NavBrand from "../fragments/NavBrand"
// import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Navigation from '../fragments/Navigation'

const Navbar = () => {
  return (
    <>
      <Nav>
        <Image src='/img/movies-icon.svg' alt='movies-icon' width={20} height={20}/>
        <NavBrand>Movies Info</NavBrand>
        <Navigation />
        {/* <HamburgerIcon /> */}
        {/* <SearchIcon /> */}
      </Nav>
    </>
  )
}

export default Navbar