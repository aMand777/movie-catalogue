'use client'
import Image from "next/image"
import { Tooltip } from "@chakra-ui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import HamburgerMenu from "./HamburgerMenu"

const Navigation = () => {
  const pathname = usePathname()
  const currentPath = pathname.substring(8)

  return (
    <>
    <HamburgerMenu />
    <div className='hidden md:flex justify-evenly'>
      <Tooltip label='Popular Movie' fontSize='sm'>
        <Link href='/movies/popular'>
          <Image src='/img/like.svg' alt='like-icon' width={25} height={25} className={`hover:animate-pulse ${currentPath === 'popular' && 'bg-white rounded-md hover:animate-none animate-bounce'}`} />
        </Link>
      </Tooltip>
      <Tooltip label='Trending' fontSize='sm'>
        <Link href='/movies/trending'>
          <Image src='/img/trending.svg' alt='trending-icon' width={25} height={25} className={`hover:animate-pulse ${currentPath === 'trending' && 'bg-white rounded-md hover:animate-none animate-bounce'}`} />
        </Link>
      </Tooltip>
      <Tooltip label='Now Playing' fontSize='sm'>
        <Link href='/movies/nowplaying'>
          <Image src='/img/now-playing.svg' alt='now-playing-icon' width={25} height={25} className={`hover:animate-pulse ${currentPath === 'nowplaying' && 'bg-white rounded-md hover:animate-none animate-bounce'}`} />
        </Link>
      </Tooltip>
      <Tooltip label='Upcoming' fontSize='sm'>
        <Link href='/movies/upcoming'>
          <Image src='/img/upcoming.svg' alt='upcoming-icon' width={25} height={25} className={`hover:animate-pulse ${currentPath === 'upcoming' && 'bg-white rounded-md hover:animate-none animate-bounce'}`} />
        </Link>
      </Tooltip>
      <Tooltip label='Top Rated' fontSize='sm'>
        <Link href='/movies/toprated'>
          <Image src='/img/top-rated.svg' alt='top-rated-icon' width={25} height={25} className={`hover:animate-pulse ${currentPath === 'toprated' && 'bg-white rounded-md hover:animate-none animate-bounce'}`} />
        </Link>
      </Tooltip>
    </div>
    </>
  )
}

export default Navigation