
const Nav = ({children}: {children: React.ReactNode}) => {
  return (
    <nav className='w-screen h-10 bg-primary grid grid-cols-3 items-center fixed top-0 z-30'>{children}</nav>
  )
}

export default Nav