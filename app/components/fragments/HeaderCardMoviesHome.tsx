import React from 'react'
import { Badge } from '@chakra-ui/react'
import Link from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'

type HeaderCardMoviesHomeProps = {
children: React.ReactNode
title: string
link: string
}

const HeaderCardMoviesHome: React.FC<HeaderCardMoviesHomeProps> = ({children, title, link}) => {
  return (
    <>
    <div className='flex justify-between items-center mx-1 md:mx-3 mt-5'>
      <Badge variant='solid' colorScheme='red' className='rounded-tr-lg cursor-default'>{children}</Badge>
      <Link href={link}>
        <span className='flex text-viewAll text-[10px] lg:text-xs hover:text-white items-center'>
          <p className='hover:mr-1 p-2 duration-500'>{title}</p>
          <ArrowForwardIcon boxSize={4} className='hover:ml-1 duration-500' />
        </span>
      </Link>
    </div>
    </>
  )
}

export default HeaderCardMoviesHome