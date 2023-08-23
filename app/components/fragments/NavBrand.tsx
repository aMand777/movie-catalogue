const NavBrand = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <p className='text-white font-semibold text-center cursor-default'>
      {children}
      </p>
    </div>
  )
}

export default NavBrand