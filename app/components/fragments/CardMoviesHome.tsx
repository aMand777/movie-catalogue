'use client'
import React from 'react'
import { Text, Divider, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  title: string
  poster: string
  rating: number
  link: string
}

const CardMoviesHome: React.FC<CardProps> = ({ title, poster, rating, link }) => {

  return (
    <div className='mx-1'>
      <Link href={link}>
        <div className='w-24 h-36 md:w-32 md:h-48 lg:w-40 lg:h-60 relative'>
          <Image src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${poster}`} alt={title} fill={true} />
          <Badge
            variant='solid'
            colorScheme='green'
            className={`absolute bottom-0 left-0 rounded-tr-lg ${rating === 0 && 'hidden'}`}>
            {rating.toString().substring(0, 3)}
            <StarIcon color='yellow.500' className='-mt-1' />
            <StarIcon color='yellow.500' className={`-mt-1 ${rating < 7 && 'hidden'}`} />
            <StarIcon color='yellow.500' className={`-mt-1 ${rating < 9 && 'hidden'}`} />
          </Badge>
        </div>
        <Divider />
        <Text
          fontSize='xs'
          className='font-semibold truncate bg-white w-24 md:w-32 lg:w-40 px-1 rounded:lg'>
          {title}
        </Text>
      </Link>
    </div>
  )
}

export default CardMoviesHome
