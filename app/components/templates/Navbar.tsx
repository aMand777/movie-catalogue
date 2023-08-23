import Nav from "../elements/Nav"
import NavBrand from "../fragments/NavBrand"
import Image from 'next/image'
import Navigation from '../fragments/Navigation'

const Navbar = () => {
  return (
    <>
      <Nav>
        <Image src='/img/movies-icon.svg' alt='movies-icon' width={20} height={20} className="mx-auto"/>
        <NavBrand>Movies Info</NavBrand>
        <Navigation />
      </Nav>
    </>
  )
}

export default Navbar