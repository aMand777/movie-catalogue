const NavBrand = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className='text-white font-semibold text-center text-sm min-[420px]:text-base sm:text-lg md:text-2xl cursor-pointer'>
        {children}
      </p>
    </div>
  )
}

export default NavBrand
