'use client'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

const HamburgerMenu = () => {
  const [currentPath, setCurrenPath] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    setCurrenPath(pathname.substring(8))
  }, [pathname])

  return (
    <div className='md:hidden justify-self-center z-50'>
    <Menu>
        <MenuButton>
          <HamburgerIcon boxSize={6}/>
        </MenuButton>
      <MenuList className='z-50'>
          <Link href='/movies/popular'>
            <MenuItem>
              Popular
              <Image src='/img/like.svg' alt='like-icon' width={20} height={20} className={`ml-auto mr-0 ${currentPath === 'popular' && 'animate-bounce'}`} />
            </MenuItem>
          </Link>
        <Link href='/movies/trending'>
            <MenuItem>
              Trending
              <Image src='/img/trending.svg' alt='trending-icon' width={20} height={20} className={`ml-auto mr-0 ${currentPath === 'trending' && 'animate-bounce'}`} />
              </MenuItem>
          </Link>
        <Link href='/movies/nowplaying'>
            <MenuItem>
              Now Playing
              <Image src='/img/now-playing.svg' alt='now-playing-icon' width={20} height={20} className={`ml-auto mr-0 ${currentPath === 'nowplaying' && 'animate-bounce'}`} />
              </MenuItem>
          </Link>
        <Link href='/movies/upcoming'>
            <MenuItem>
              Upcoming
              <Image src='/img/upcoming.svg' alt='upcoming-icon' width={20} height={20} className={`ml-auto mr-0 ${currentPath === 'upcoming' && 'animate-bounce'}`} />
              </MenuItem>
          </Link>
        <Link href='/movies/toprated'>
          <MenuItem>
          Top Rated
              <Image src='/img/top-rated.svg' alt='top-rated-icon' width={20} height={20} className={`ml-auto mr-0 ${currentPath === 'toprated' && 'animate-bounce'}`} />
            </MenuItem>
          </Link>
      </MenuList>
    </Menu>
    </div>
  )
}

export default HamburgerMenu