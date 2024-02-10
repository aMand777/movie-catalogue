'use client'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const HamburgerMenu = () => {
  const pathname = usePathname()
  const currentPath = pathname.substring(8)

  return (
    <div className='md:hidden justify-self-center z-50'>
      <Menu>
        <MenuButton>
          <HamburgerIcon boxSize={8} />
        </MenuButton>
        <MenuList className='z-50'>
          <Link href='/movies/popular'>
            <MenuItem
              className={`text-xl ${
                currentPath === 'popular' && 'text-primary font-semibold italic'
              }`}>
              Popular
              <Image
                src='/img/like.svg'
                alt='like-icon'
                width={25}
                height={25}
                className={`ml-auto mr-0 ${currentPath === 'popular' && 'animate-bounce'}`}
              />
            </MenuItem>
          </Link>
          <Link href='/movies/trending'>
            <MenuItem
              className={`text-xl ${
                currentPath === 'trending' && 'text-primary font-semibold italic'
              }`}>
              Trending
              <Image
                src='/img/trending.svg'
                alt='trending-icon'
                width={25}
                height={25}
                className={`ml-auto mr-0 ${currentPath === 'trending' && 'animate-bounce'}`}
              />
            </MenuItem>
          </Link>
          <Link href='/movies/nowplaying'>
            <MenuItem
              className={`text-xl ${
                currentPath === 'nowplaying' && 'text-primary font-semibold italic'
              }`}>
              Now Playing
              <Image
                src='/img/now-playing.svg'
                alt='now-playing-icon'
                width={25}
                height={25}
                className={`ml-auto mr-0 ${currentPath === 'nowplaying' && 'animate-bounce'}`}
              />
            </MenuItem>
          </Link>
          <Link href='/movies/upcoming'>
            <MenuItem
              className={`text-xl ${
                currentPath === 'upcoming' && 'text-primary font-semibold italic'
              }`}>
              Upcoming
              <Image
                src='/img/upcoming.svg'
                alt='upcoming-icon'
                width={25}
                height={25}
                className={`ml-auto mr-0 ${currentPath === 'upcoming' && 'animate-bounce'}`}
              />
            </MenuItem>
          </Link>
          <Link href='/movies/toprated'>
            <MenuItem
              className={`text-xl ${
                currentPath === 'toprated' && 'text-primary font-semibold italic'
              }`}>
              Top Rated
              <Image
                src='/img/top-rated.svg'
                alt='top-rated-icon'
                width={25}
                height={25}
                className={`ml-auto mr-0 ${currentPath === 'toprated' && 'animate-bounce'}`}
              />
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  )
}

export default HamburgerMenu
