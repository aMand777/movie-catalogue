const NavBrand = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className='text-white font-semibold text-center text-base min-[420px]:text-lg md:text-2xl cursor-pointer'>
        {children}
      </p>
    </div>
  )
}

export default NavBrand
