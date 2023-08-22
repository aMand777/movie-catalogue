
const Nav = ({children}: {children: React.ReactNode}) => {
  return (
    <nav className='w-screen h-10 bg-primary flex justify-around items-center fixed top-0 z-40'>{children}</nav>
  )
}

export default Nav