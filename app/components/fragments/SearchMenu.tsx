import React from 'react'
import { Card, CardBody, Text, Divider, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import Link from 'next/link'

type CardMoviesProps = {
  id: string
  title: string
  poster: string
  year: string
  rating: number
  link: string
}

const SearchMenu: React.FC<CardMoviesProps> = ({ id, title, poster, year, rating, link }) => {
  return (
    <>
      <Link href={link}>
        <div className='grid grid-cols-6 w-fit p-2 bg-black hover:opacity-95 group'>
          <Card key={id} maxW='sm'>
            <CardBody className='p-0 col-span-2 group-hover:animate-pulse'>
              <Image
                objectFit='cover'
                src={`${process.env.NEXT_PUBLIC_BASEIMGURL}/${poster}`}
                alt={title}
              />
            </CardBody>
          </Card>
          <Text
            fontSize='xs'
            className='text-white col-span-3 text-left mx-2 2xl:text-lg group-hover:text-primary'>
            {title}
          </Text>
          <Text
            fontSize='xs'
            className='text-white col-span-1 text-justify 2xl:text-lg group-hover:text-primary'>
            {year.substring(0, 4)}
          </Text>
          <Text
            fontSize='xs'
            className='text-white col-span-1 text-justify 2xl:text-lg group-hover:text-primary'>
            <StarIcon color='yellow.500' className='mx-1 -mt-1' />
            {rating.toString().substring(0, 3)}
          </Text>
        </div>
        <Divider className='-mt-2' />
      </Link>
    </>
  )
}

export default SearchMenu
