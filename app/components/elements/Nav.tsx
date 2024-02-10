const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className='w-screen h-12 bg-primary grid grid-cols-3 items-center fixed top-0 z-20 gap-0'>
      {children}
    </nav>
  )
}

export default Nav
